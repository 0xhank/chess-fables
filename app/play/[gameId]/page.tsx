"use client";

import { GameRoom } from "@/components/game-room";
import { usePlayerIdentity } from "@/hooks/use-player-identity";
import { useSearchParams } from "next/navigation";

export default function JoinGamePage({
    params,
}: {
    params: { gameId: string };
}) {
    const searchParams = useSearchParams();
    const { name: playerName } = usePlayerIdentity(
        searchParams.get("name") || undefined
    );

    return (
        <GameRoom
            gameId={params.gameId}
            playerName={playerName}
            activeTab="join"
        />
    );
}
