"use client";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "@/components/ui/use-toast";
import { usePlayerIdentity } from "@/hooks/use-player-identity";
import { supabase } from "@/lib/supabase";
import { Chess } from "chess.js";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function PlayPage() {
    const router = useRouter();
    const [gameId, setGameId] = useState("");
    const { name: playerName, id: playerId } = usePlayerIdentity();
    const [activeTab, setActiveTab] = useState("join");

    const handleCreateGame = async () => {
        const newGameId = Math.random()
            .toString(36)
            .substring(2, 8)
            .toUpperCase();

        try {
            // Create the game first
            const { error: createError } = await supabase.from("games").insert([
                {
                    id: newGameId,
                    game_state: {
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
                    },
                    created_at: new Date().toISOString(),
                },
            ]);

            if (createError) {
                throw new Error("Failed to create game");
            }

            // Only redirect after successful creation
            router.push(
                `/play/${newGameId}?name=${encodeURIComponent(playerName || "")}`
            );
        } catch (error) {
            console.error("Error creating game:", error);
            toast({
                title: "Error",
                description: "Failed to create the game. Please try again.",
                variant: "destructive",
            });
        }
    };

    const handleJoinGame = () => {
        if (!gameId) return;
        router.push(`/play/${gameId}?name=${encodeURIComponent(playerName || "")}`);
    };

    return (
        <div className="container mx-auto py-8 px-4">
            <h1 className="text-3xl font-bold mb-8 text-center">Play Chess</h1>

            <div className="text-center mb-4">
                <p className="text-sm text-muted-foreground">
                    Playing as: {playerName === "Loading..." ? "" : playerName}
                </p>
            </div>

            <div className="max-w-md mx-auto">
                <Tabs defaultValue={activeTab} onValueChange={setActiveTab}>
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="create">Create Game</TabsTrigger>
                        <TabsTrigger value="join">Join Game</TabsTrigger>
                    </TabsList>

                    <TabsContent value="create">
                        <Card>
                            <CardHeader>
                                <CardTitle>Create a New Game</CardTitle>
                                <CardDescription>
                                    Start a new chess game and invite a friend
                                    to play
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="space-y-2">
                                    <label
                                        htmlFor="create-name"
                                        className="text-sm font-medium"
                                    >
                                        Your Name
                                    </label>
                                    <div className="flex items-center gap-2">
                                            {playerName}
                                    </div>
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button
                                    className="w-full"
                                    onClick={handleCreateGame}
                                    disabled={
                                        !playerName ||
                                        playerName === "Loading..."
                                    }
                                >
                                    Create Game
                                </Button>
                            </CardFooter>
                        </Card>
                    </TabsContent>

                    <TabsContent value="join">
                        <Card>
                            <CardHeader>
                                <CardTitle>Join a Game</CardTitle>
                                <CardDescription>
                                    Enter a game code to join an existing chess
                                    game
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="space-y-2">
                                    <label
                                        htmlFor="join-name"
                                        className="text-sm font-medium"
                                    >
                                        Your Name
                                    </label>
                                    <div className="flex items-center gap-2">
                                        {playerName}
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label
                                        htmlFor="game-id"
                                        className="text-sm font-medium"
                                    >
                                        Game Code
                                    </label>
                                    <Input
                                        id="game-id"
                                        placeholder="Enter game code"
                                        value={gameId}
                                        onChange={(e) =>
                                            setGameId(
                                                e.target.value.toUpperCase()
                                            )
                                        }
                                    />
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button
                                    className="w-full"
                                    onClick={handleJoinGame}
                                    disabled={
                                        !gameId ||
                                        !playerName ||
                                        playerName === "Loading..."
                                    }
                                >
                                    Join Game
                                </Button>
                            </CardFooter>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
}
