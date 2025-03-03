import { useCallback, useRef } from "react";

export function useDebouncedMove(
    onMove: (from: string, to: string) => void,
    delay = 100
) {
    const timeoutRef = useRef<NodeJS.Timeout>();

    return useCallback(
        (from: string, to: string) => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }

            timeoutRef.current = setTimeout(() => {
                onMove(from, to);
            }, delay);
        },
        [onMove, delay]
    );
}
