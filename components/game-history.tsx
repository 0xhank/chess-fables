import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type HistoryEntry = {
    moveNumber: number;
    white?: {
        from: string;
        to: string;
        story: string;
    };
    black?: {
        from: string;
        to: string;
        story: string;
    };
};

interface GameHistoryProps {
    history: HistoryEntry[];
    currentTurn: "w" | "b";
}

export function GameHistory({ history, currentTurn }: GameHistoryProps) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Game History</CardTitle>
            </CardHeader>
            <CardContent className="max-h-[600px] overflow-y-auto space-y-4">
                {history.length === 0 ? (
                    <p className="text-sm text-muted-foreground text-center">
                        No moves yet
                    </p>
                ) : (
                    history.map((entry) => (
                        <div
                            key={entry.moveNumber}
                            className="border-b pb-3 last:border-0"
                        >
                            <div className="font-mono text-sm text-muted-foreground mb-2">
                                Move {entry.moveNumber}
                            </div>
                            {entry.white && (
                                <div
                                    className={`mb-2 ${
                                        currentTurn === "w" &&
                                        entry.moveNumber === history.length
                                            ? "bg-muted p-2 rounded"
                                            : ""
                                    }`}
                                >
                                    <div className="font-medium">White</div>
                                    <div className="text-sm text-muted-foreground mb-1">
                                        {entry.white.from} → {entry.white.to}
                                    </div>
                                    <p className="text-sm italic">
                                        {entry.white.story}
                                    </p>
                                </div>
                            )}
                            {entry.black && (
                                <div
                                    className={`${
                                        currentTurn === "b" &&
                                        entry.moveNumber === history.length
                                            ? "bg-muted p-2 rounded"
                                            : ""
                                    }`}
                                >
                                    <div className="font-medium">Black</div>
                                    <div className="text-sm text-muted-foreground mb-1">
                                        {entry.black.from} → {entry.black.to}
                                    </div>
                                    <p className="text-sm italic">
                                        {entry.black.story}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))
                )}
            </CardContent>
        </Card>
    );
}
