"use client";

import { ChessBoard } from "@/components/chess-board";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { usePlayerIdentity } from "@/hooks/use-player-identity";
import { supabase } from "@/lib/supabase";
import { Chess } from "chess.js";
import { AlertCircle, ArrowLeft, Copy } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

interface GameRoomProps {
    gameId: string;
    playerName: string;
    activeTab?: string;
}

type Player = {
    id: string;
    name: string;
    color?: "white" | "black";
};

type GameState = {
    position: string;
    turn: "w" | "b";
    status: "waiting" | "playing" | "checkmate" | "draw" | "stalemate";
    players: Player[];
    lastMove?: { from: string; to: string };
};

export function GameRoom({
    gameId,
    playerName,
    activeTab = "create",
}: GameRoomProps) {
    const router = useRouter();
    const { toast } = useToast();
    const [gameState, setGameState] = useState<GameState>({
        position: new Chess().fen(),
        turn: "w",
        status: "waiting",
        players: [],
    });
    const { id: playerId } = usePlayerIdentity(playerName);
    const [isPlayerTurn, setIsPlayerTurn] = useState(false);
    const [activeTabState] = useState(activeTab); // Added state for active tab (create/join)

    // Join the game
    useEffect(() => {
        if (!playerId) return;
        const joinGame = async () => {
            try {
                // Check if game exists
                const { data: existingGame, error } = await supabase
                    .from("games")
                    .select("game_state")
                    .eq("id", gameId)
                    .single();

                if (error) {
                    console.error("Error checking game:", error);
                    if (error.code === "PGRST116") {
                        // Game doesn't exist
                        if (activeTabState !== "create") {
                            toast({
                                title: "Game not found",
                                description:
                                    "The game code you entered doesn't exist.",
                                variant: "destructive",
                            });
                            router.push("/play");
                            return;
                        }
                        // Continue to create new game...
                    } else {
                        // Other error
                        toast({
                            title: "Error",
                            description:
                                "Failed to connect to the game server.",
                            variant: "destructive",
                        });
                        router.push("/play");
                        return;
                    }
                }

                let currentGameState: GameState;

                if (existingGame) {
                    // Game exists, join it
                    currentGameState = existingGame.game_state as GameState;

                    // Check if game is full
                    if (
                        currentGameState.players.length >= 2 &&
                        !currentGameState.players.some((p) => p.id === playerId)
                    ) {
                        toast({
                            title: "Game is full",
                            description: "This game already has two players.",
                            variant: "destructive",
                        });
                        console.log("Game is full");
                        router.push("/play");
                        return;
                    }

                    // Add player if not already in the game
                    console.log(
                        "Adding player to game",
                        playerId,
                        currentGameState.players
                    );
                    if (
                        !currentGameState.players.some((p) => p.id === playerId)
                    ) {
                        currentGameState = {
                            ...currentGameState,
                            players: [
                                ...currentGameState.players,
                                {
                                    id: playerId,
                                    name: playerName,
                                    color:
                                        currentGameState.players.length === 0
                                            ? "white"
                                            : "black",
                                },
                            ],
                        };
                        currentGameState.status =
                            currentGameState.players.length >= 2
                                ? "playing"
                                : "waiting";
                    }
                } else {
                    // Create new game if we're in create mode
                    if (activeTabState !== "create") {
                        toast({
                            title: "Game not found",
                            description:
                                "The game code you entered doesn't exist.",
                            variant: "destructive",
                        });
                        router.push("/play");
                        return;
                    }

                    currentGameState = {
                        position: new Chess().fen(),
                        turn: "w",
                        status: "waiting",
                        players: [
                            {
                                id: playerId,
                                name: playerName,
                                color: "white",
                            },
                        ],
                    };

                    // Create the game
                    const { error: createError } = await supabase
                        .from("games")
                        .insert([
                            {
                                id: gameId,
                                game_state: currentGameState,
                                created_at: new Date().toISOString(),
                            },
                        ]);

                    if (createError) {
                        console.error("Error creating game:", createError);
                        toast({
                            title: "Error",
                            description: "Failed to create the game.",
                            variant: "destructive",
                        });
                        router.push("/play");
                        return;
                    }
                }

                // Update game state if needed
                if (
                    existingGame &&
                    currentGameState !== existingGame.game_state
                ) {
                    const { error: updateError } = await supabase
                        .from("games")
                        .update({ game_state: currentGameState })
                        .eq("id", gameId);

                    if (updateError) {
                        console.error("Error updating game:", updateError);
                        toast({
                            title: "Error",
                            description: "Failed to join the game.",
                            variant: "destructive",
                        });
                        router.push("/play");
                        return;
                    }
                }

                setGameState(currentGameState);
            } catch (error) {
                console.error("Error joining game:", error);
                toast({
                    title: "Error",
                    description: "Failed to join the game.",
                    variant: "destructive",
                });
                router.push("/play");
            }
        };

        joinGame();
    }, [gameId, playerId, playerName, router, toast, activeTabState]);

    useEffect(() => {        // Set up realtime subscription
        console.log("listening to game", gameId);
        const gameChannel = supabase
            .channel(`game-${gameId}`)
            .on(
                "postgres_changes",
                {
                    event: "UPDATE",
                    schema: "public",
                    table: "games",
                    filter: `id=eq.${gameId}`,
                },
                (payload) => {
                    console.log("Game state updated:", payload.new.game_state); // Debug log
                    const updatedGameState = payload.new
                        .game_state as GameState;
                    setGameState(updatedGameState);
                }
            )
            .subscribe();

        return () => {
            console.log("unsubscribing from game", gameId);
            supabase.removeChannel(gameChannel);
        };
    }, [gameId]);
    // Check if it's the player's turn
    useEffect(() => {
        const playerColor = gameState.players.find(
            (p) => p.id === playerId
        )?.color;
        if (playerColor) {
            setIsPlayerTurn(
                (playerColor === "white" && gameState.turn === "w") ||
                    (playerColor === "black" && gameState.turn === "b")
            );
        }
    }, [gameState, playerId]);

    const handleMove = async (from: string, to: string) => {
        if (!isPlayerTurn) return;

        try {
            const response = await fetch("/api/game/move", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    gameId,
                    from,
                    to,
                }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.error("Move error:", errorData);
                throw new Error(errorData.error || "Failed to make move");
            }

            // Update local state immediately with the response
            const data = await response.json();
            setGameState((prevState) => ({
                ...prevState,
                position: data.position,
                turn: data.turn,
                status: data.status,
                lastMove: { from, to },
            }));
        } catch (error) {
            console.error("Error making move:", error);
            toast({
                title: "Error",
                description: "Failed to make the move. Please try again.",
                variant: "destructive",
            });
        }
    };

    const copyGameId = () => {
        navigator.clipboard.writeText(gameId);
        toast({
            title: "Game code copied",
            description: "Share this code with your opponent to join the game.",
        });
    };

    const leaveGame = () => {
        router.push("/play");
    };

    const statusMessage = useMemo(() => {
        switch (gameState.status) {
            case "waiting":
                return "Waiting for opponent to join...";
            case "playing":
                return isPlayerTurn ? "Your turn" : "Opponent's turn";
            case "checkmate":
                const winner = gameState.turn === "w" ? "Black" : "White";
                return `Checkmate! ${winner} wins!`;
            case "draw":
                return "Game ended in a draw";
            case "stalemate":
                return "Game ended in stalemate";
            default:
                return "";
        }
    }, [gameState, isPlayerTurn]);

    const opponentName = useMemo(() => {
        const opponent = gameState.players.find((p) => p.id !== playerId);
        return opponent ? opponent.name : "Waiting for opponent...";
    }, [gameState, playerId]);

    return (
        <div className="container mx-auto py-8 px-4">
            <div className="flex items-center mb-6">
                <Button variant="ghost" onClick={leaveGame} className="mr-2">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back
                </Button>
                <h1 className="text-2xl font-bold">Game Room</h1>
            </div>

            <div className="grid md:grid-cols-[1fr_300px] gap-6">
                <div>
                    <div className="mb-4 flex justify-between items-center">
                        <div>
                            <Badge
                                variant={
                                    gameState.turn === "w"
                                        ? "default"
                                        : "outline"
                                }
                            >
                                White:{" "}
                                {gameState.players.find(
                                    (p) => p.color === "white"
                                )?.name || "Waiting..."}
                            </Badge>
                        </div>
                        <div>
                            <Badge
                                variant={
                                    gameState.turn === "b"
                                        ? "default"
                                        : "outline"
                                }
                            >
                                Black:{" "}
                                {gameState.players.find(
                                    (p) => p.color === "black"
                                )?.name || "Waiting..."}
                            </Badge>
                        </div>
                    </div>

                        <ChessBoard
                            position={gameState.position}
                            onMove={handleMove}
                            playerColor={
                                gameState.players.find((p) => p.id === playerId)
                                    ?.color || "white"
                            }
                        />
                </div>

                <div className="space-y-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Game Information</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div>
                                <div className="text-sm font-medium mb-1">
                                    Game Code
                                </div>
                                <div className="flex items-center">
                                    <code className="bg-muted px-2 py-1 rounded text-sm flex-1">
                                        {gameId}
                                    </code>
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        onClick={copyGameId}
                                    >
                                        <Copy className="h-4 w-4" />
                                    </Button>
                                </div>
                            </div>

                            <div>
                                <div className="text-sm font-medium mb-1">
                                    Your Name
                                </div>
                                <div className="text-sm">{playerName}</div>
                            </div>

                            <div>
                                <div className="text-sm font-medium mb-1">
                                    Opponent
                                </div>
                                <div className="text-sm">{opponentName}</div>
                            </div>

                            <div>
                                <div className="text-sm font-medium mb-1">
                                    Status
                                </div>
                                <div className="text-sm">{statusMessage}</div>
                            </div>
                        </CardContent>
                    </Card>

                    {gameState.status === "waiting" && (
                        <Alert>
                            <AlertCircle className="h-4 w-4" />
                            <AlertTitle>Waiting for opponent</AlertTitle>
                            <AlertDescription>
                                Share your game code with a friend to start
                                playing.
                            </AlertDescription>
                        </Alert>
                    )}

                    {(gameState.status === "checkmate" ||
                        gameState.status === "draw" ||
                        gameState.status === "stalemate") && (
                        <Card>
                            <CardContent className="pt-6">
                                <h3 className="text-lg font-medium mb-2">
                                    Game Over
                                </h3>
                                <p>{statusMessage}</p>
                            </CardContent>
                            <CardFooter>
                                <Button onClick={leaveGame} className="w-full">
                                    Back to Lobby
                                </Button>
                            </CardFooter>
                        </Card>
                    )}
                </div>
            </div>
        </div>
    );
}
