import { StoryService } from "@/lib/story-service";
import { supabase } from "@/lib/supabase";
import { Chess } from "chess.js";
import { NextResponse } from "next/server";

type GameState = {
    position: string;
    turn: "w" | "b";
    status: "waiting" | "playing" | "checkmate" | "draw" | "stalemate";
    players: {
        id: string;
        name: string;
        color?: "white" | "black";
    }[];
    lastMove?: { from: string; to: string };
    lastMoveStory?: string;
};

const storyService = new StoryService();

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { gameId, from, to } = body;

        // Validate required fields
        if (!gameId || !from || !to) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        // Get current game state
        const { data: gameData, error: gameError } = await supabase
            .from("games")
            .select("game_state")
            .eq("id", gameId)
            .single();

        if (gameError || !gameData) {
            console.error("Game fetch error:", gameError);
            return NextResponse.json(
                { error: "Failed to fetch game state" },
                { status: 404 }
            );
        }

        const gameState = gameData.game_state as GameState;

        // Validate game status
        if (gameState.status !== "playing") {
            return NextResponse.json(
                { error: "Game is not in playing state" },
                { status: 400 }
            );
        }

        // Create chess instance with current position
        const game = new Chess(gameState.position);

        // Attempt the move
        try {
            const move = game.move({
                from,
                to,
                promotion: "q", // Always promote to queen for simplicity
            });

            if (!move) {
                return NextResponse.json(
                    { error: "Invalid move" },
                    { status: 400 }
                );
            }

            // Generate story for the move
            const pieceId = `${move.color}_${move.piece}_${from}`;
            const story = storyService.generateMoveStory(
                pieceId,
                from,
                to,
                move.captured
                    ? `${move.color === "w" ? "b" : "w"}_${move.captured}_${to}`
                    : undefined
            );

            // Update game state
            const updatedGameState: GameState = {
                ...gameState,
                position: game.fen(),
                turn: game.turn() as "w" | "b",
                lastMove: { from, to },
                lastMoveStory: story,
                status: game.isCheckmate()
                    ? "checkmate"
                    : game.isDraw()
                    ? "draw"
                    : game.isStalemate()
                    ? "stalemate"
                    : "playing",
            };

            // Save to database
            const { error: updateError } = await supabase
                .from("games")
                .update({ game_state: updatedGameState })
                .eq("id", gameId);

            if (updateError) {
                console.error("Update error:", updateError);
                return NextResponse.json(
                    { error: "Failed to update game state" },
                    { status: 500 }
                );
            }

            return NextResponse.json({
                position: updatedGameState.position,
                status: updatedGameState.status,
                turn: updatedGameState.turn,
                players: updatedGameState.players,
                lastMove: updatedGameState.lastMove,
                lastMoveStory: updatedGameState.lastMoveStory,
            });
        } catch (error) {
            console.error("Move error:", error);
            return NextResponse.json(
                { error: "Invalid move" },
                { status: 400 }
            );
        }
    } catch (error) {
        console.error("Error processing move:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
