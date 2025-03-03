import { ChessPiece } from "@/types/story";

interface PieceInfoProps {
    piece: ChessPiece;
}

export function PieceInfo({ piece }: PieceInfoProps) {
    return (
        <div className="bg-background p-6 rounded-lg shadow-xl w-full h-full overflow-y-auto">
            <h2 className="text-2xl font-bold mb-4">{piece.name}</h2>
            <p className="text-sm text-muted-foreground mb-4">ID: {piece.id}</p>

            <div className="space-y-4">
                <div>
                    <h3 className="text-lg font-semibold mb-2">Role</h3>
                    <p>
                        {piece.role} of the {piece.color} army
                    </p>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-2">Personality</h3>
                    <div className="grid grid-cols-2 gap-2">
                        {Object.entries(piece.personality).map(
                            ([trait, value]) => (
                                <div
                                    key={trait}
                                    className="flex justify-between"
                                >
                                    <span className="capitalize">{trait}:</span>
                                    <span>{value}</span>
                                </div>
                            )
                        )}
                    </div>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-2">
                        Relationships
                    </h3>
                    {Object.entries(piece.relationships).map(
                        ([type, relations]) => (
                            <div key={type} className="mb-2">
                                <p className="capitalize font-medium">
                                    {type}:
                                </p>
                                {Array.isArray(relations) ? (
                                    <p>{relations.join(", ")}</p>
                                ) : (
                                    <p>{relations}</p>
                                )}
                            </div>
                        )
                    )}
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-2">History</h3>
                    <div className="space-y-2">
                        <p>
                            Battles Survived: {piece.history.battles_survived}
                        </p>
                        <div>
                            <p className="font-medium">Titles:</p>
                            <p>{piece.history.titles.join(", ")}</p>
                        </div>
                        {piece.history.notable_victories.length > 0 && (
                            <div>
                                <p className="font-medium">
                                    Notable Victories:
                                </p>
                                <p>
                                    {piece.history.notable_victories.join(", ")}
                                </p>
                            </div>
                        )}
                        {piece.history.past_defeats.length > 0 && (
                            <div>
                                <p className="font-medium">Past Defeats:</p>
                                <p>{piece.history.past_defeats.join(", ")}</p>
                            </div>
                        )}
                    </div>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-2">Current Game</h3>
                    <div className="space-y-1">
                        <p>Moves Made: {piece.current_game.moves_made}</p>
                        <p>
                            Times in Check: {piece.current_game.times_in_check}
                        </p>
                        <p>Escapes: {piece.current_game.escapes}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
