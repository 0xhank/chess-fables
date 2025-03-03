"use client";

import { useEffect, useState } from "react";

const generatePlayerId = () =>
    `player-${Math.random().toString(36).substring(2, 9)}`;
const generatePlayerName = () => `Player${Math.floor(Math.random() * 10000)}`;

interface PlayerIdentity {
    id: string | null;
    name: string | null;
}

export function usePlayerIdentity(initialName?: string): PlayerIdentity {
    // Use null as initial state to prevent hydration mismatch
    const [identity, setIdentity] = useState<PlayerIdentity | null>(null);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);

        // Try to get stored identity
        const storedIdentity = localStorage.getItem("playerIdentity");

        if (storedIdentity) {
            // Use stored identity but allow name override
            const parsed = JSON.parse(storedIdentity);
            setIdentity({
                id: parsed.id,
                name: initialName || parsed.name,
            });
        } else {
            // Create and store new identity
            const newIdentity = {
                id: generatePlayerId(),
                name: initialName || generatePlayerName(),
            };
            localStorage.setItem("playerIdentity", JSON.stringify(newIdentity));
            setIdentity(newIdentity);
        }
    }, [initialName]);

    // Return a loading state until client-side code runs
    if (!isClient || !identity) {
        return {
            id: null,
            name: initialName || null
        };
    }

    return identity;
}
