"use client";

import { useCallback } from "react";
import { Chessboard } from "react-chessboard";

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

    return (
        <div className="aspect-square w-full">
            <Chessboard
                position={position}
                onPieceDrop={onDrop}
                boardOrientation={playerColor}
                isDraggablePiece={({ piece }) => {
                    if (isStatic) return false;
                    const pieceColor = piece[0] === "w" ? "white" : "black";
                    return pieceColor === playerColor;
                }}
            />
        </div>
    );
}
