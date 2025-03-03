"use client";

import { StoryService } from "@/lib/story-service";
import { useCallback, useState } from "react";
import { Chessboard } from "react-chessboard";
import { PieceInfo } from "./piece-info";

interface ChessBoardProps {
    isStatic?: boolean;
    position: string;
    onMove?: (from: string, to: string) => void;
    playerColor?: "white" | "black";
}

const storyService = new StoryService();

export function ChessBoard({
    isStatic = false,
    position,
    onMove,
    playerColor = "white",
}: ChessBoardProps) {
    const [selectedSquare, setSelectedSquare] = useState<string | null>(null);

    const onDrop = useCallback(
        (sourceSquare: string, targetSquare: string) => {
            if (isStatic) return false;

            // Notify parent component of attempted move
            if (onMove) {
                onMove(sourceSquare, targetSquare);
            }

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

    return (
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-start">
            <div className="lg:col-span-2 h-full">
                {selectedPiece ? (
                    <PieceInfo piece={selectedPiece} />
                ) : (
                    <div className="bg-background p-6 rounded-lg shadow-xl w-full h-full flex items-center justify-center text-muted-foreground">
                    </div>
                )}
            </div>
            <div className="lg:col-span-3">
                <div className="aspect-square w-full">
                    <Chessboard
                        position={position}
                        onPieceDrop={onDrop}
                        onSquareClick={onSquareClick}
                        boardOrientation={playerColor}
                        isDraggablePiece={({ piece }) => {
                            if (isStatic) return false;
                            const pieceColor =
                                piece[0] === "w" ? "white" : "black";
                            return pieceColor === playerColor;
                        }}
                    />
                </div>
            </div>
        </div>
    );
}
