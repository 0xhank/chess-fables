export type Faction = "white" | "black";

export interface WorldHistory {
    overview: string;
    factions: {
        [key in Faction]: FactionHistory;
    };
}

export interface FactionHistory {
    name: string;
    culture: string;
    conflict_role: string;
}

export interface Personality {
    bravery: number;
    caution: number;
    leadership: number;
    loyalty: number;
    aggression: number;
}

export interface Relationships {
    spouse?: string;
    children?: string[];
    commander?: string;
    siblings?: string[];
    trusted_allies?: string[];
    rivalries?: string[];

}

export interface PieceHistory {
    battles_survived: number;
    notable_victories: string[];
    titles: string[];
    past_defeats: string[];
}

export interface CurrentGame {
    moves_made: number;
    times_in_check: number;
    escapes: number;
}



export interface ChessPiece {
    id: string;
    name: string;
    role: "King" | "Queen" | "Bishop" | "Knight" | "Rook" | "Pawn";
    color: Faction;
    status: "active" | "captured";
    position: string;
    personality: Personality;
    relationships: Relationships;
    history: PieceHistory;
    current_game: CurrentGame;
}
