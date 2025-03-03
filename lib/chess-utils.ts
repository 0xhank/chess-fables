import { Chess } from "chess.js";

export function isValidMove(fen: string, from: string, to: string): boolean {
    const game = new Chess(fen);
    try {
        const move = game.move({ from, to });
        return !!move;
    } catch {
        return false;
    }
}
