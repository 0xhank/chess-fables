import { supabase } from "./supabase";


export function setupGameConnection(gameId: string, onMove: (move: any) => void) {
    const channel = supabase
        .channel(`game:${gameId}`)
        .on('broadcast', { event: 'move' }, ({ payload }) => {
            onMove(payload);
        })
        .subscribe();

    return () => {
        channel.unsubscribe();
    };
} 