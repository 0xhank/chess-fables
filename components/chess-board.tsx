"use client";

import { storyService } from "@/lib/story-service-instance";
import { useCallback, useLayoutEffect, useRef, useState } from "react";
import { Chessboard } from "react-chessboard";
import { MoveStory } from "./move-story";
import { PieceInfo } from "./piece-info";

interface ChessBoardProps {
    isStatic?: boolean;
    position: string;
    onMove?: (from: string, to: string) => void;
    playerColor?: "white" | "black";
}

export function ChessBoard({
    isStatic = false,
    position,
    onMove,
    playerColor = "white",
}: ChessBoardProps) {
    const [selectedSquare, setSelectedSquare] = useState<string | null>(null);
    const [latestStory, setLatestStory] = useState("");

    // Memoize the listener function
    const storyListener = useCallback((story: string) => {
        console.log("Received story update:", story);
        setLatestStory(story);
    }, []);

    // Keep a ref to track if we're subscribed
    const subscriptionRef = useRef<(() => void) | null>(null);

    useLayoutEffect(() => {
        console.log("Setting up story subscription");

        // Only subscribe if we haven't already
        if (!subscriptionRef.current) {
            subscriptionRef.current = storyService.subscribe(storyListener);
        }

        // Initialize with the latest story
        const lastStory =
            storyService.getMoveHistory().slice(-1)[0]?.story || "";
        console.log("Initial story:", lastStory);
        setLatestStory(lastStory);

        // Cleanup subscription on unmount
        return () => {
            console.log("Cleaning up story subscription");
            if (subscriptionRef.current) {
                subscriptionRef.current();
                subscriptionRef.current = null;
            }
        };
    }, [storyListener]);

    const onDrop = useCallback(
        (sourceSquare: string, targetSquare: string) => {
            if (isStatic) return false;

            // Notify parent component of attempted move
            if (onMove) {
                onMove(sourceSquare, targetSquare);
            }

            // update the story
            // Always return false to prevent local state update
            return false;
        },
        [isStatic, onMove]
    );

    const onSquareClick = useCallback((square: string) => {
        setSelectedSquare((current) => (current === square ? null : square));
    }, []);

    // Get piece information for the selected square
    const selectedPiece = selectedSquare
        ? storyService.getPieceAtPosition(selectedSquare)
        : null;

    // Custom styles for the selected square
    const customSquareStyles = {
        ...(selectedSquare && {
            [selectedSquare]: {
                backgroundColor: "rgba(34, 197, 94, 0.2)", // green-500 with opacity
                borderRadius: "8px",
            },
        }),
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-start">
            <div className="lg:col-span-2 h-full">
                {selectedPiece ? (
                    <PieceInfo piece={selectedPiece} />
                ) : (
                    <div className="bg-background p-6 rounded-lg shadow-xl w-full h-full flex items-center justify-center text-muted-foreground"></div>
                )}
            </div>
            <div className="lg:col-span-3">
                <div className="aspect-square w-full">
                    <Chessboard
                        position={position}
                        onPieceDrop={onDrop}
                        onSquareClick={onSquareClick}
                        boardOrientation={playerColor}
                        customSquareStyles={customSquareStyles}
                        isDraggablePiece={({ piece }) => {
                            if (isStatic) return false;
                            const pieceColor =
                                piece[0] === "w" ? "white" : "black";
                            return pieceColor === playerColor;
                        }}
                    />
                </div>
                <MoveStory story={latestStory} />
            </div>
        </div>
    );
}
