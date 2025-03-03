import { ChessPiece } from "@/types/story";

// Initialize piece data
const initialPieces: { [key: string]: ChessPiece } = {
    w_king: {
        id: "w_king",
        name: "King Arthur",
        role: "King",
        color: "white",
        status: "active",
        position: "e1",
        personality: {
            bravery: 40,
            caution: 90,
            leadership: 100,
            loyalty: 95,
            aggression: 20,
        },
        relationships: {
            spouse: "Queen Isabella",
            children: [
                "w_pawn_a",
                "w_pawn_b",
                "w_pawn_c",
                "w_pawn_d",
                "w_pawn_e",
                "w_pawn_f",
                "w_pawn_g",
                "w_pawn_h",
            ],
            trusted_allies: ["w_queen", "w_knight_1", "w_knight_2"],
            rivalries: ["b_king"],
        },
        history: {
            battles_survived: 12,
            notable_victories: ["Checkmated Black King in Grand Tournament"],
            titles: ["Defender of the Realm"],
            past_defeats: ["Captured in Battle of the Crimson Board"],
        },
        current_game: {
            moves_made: 0,
            times_in_check: 0,
            escapes: 0,
        },
    },
    w_queen: {
        id: "w_queen",
        name: "Queen Isabella",
        role: "Queen",
        color: "white",
        status: "active",
        position: "d1",
        personality: {
            bravery: 85,
            caution: 60,
            leadership: 90,
            loyalty: 95,
            aggression: 75,
        },
        relationships: {
            spouse: "King Arthur",
            trusted_allies: ["w_king", "w_bishop_1", "w_bishop_2"],
            rivalries: ["b_queen"],
        },
        history: {
            battles_survived: 15,
            notable_victories: ["The Great Defense of the Western Flank"],
            titles: ["The White Rose", "Protector of the Realm"],
            past_defeats: [],
        },
        current_game: {
            moves_made: 0,
            times_in_check: 0,
            escapes: 0,
        },
    },
    w_bishop_1: {
        id: "w_bishop_1",
        name: "Bishop Aldrich",
        role: "Bishop",
        color: "white",
        status: "active",
        position: "c1",
        personality: {
            bravery: 70,
            caution: 80,
            leadership: 60,
            loyalty: 90,
            aggression: 40,
        },
        relationships: {
            trusted_allies: ["w_king", "w_queen"],
            rivalries: ["b_bishop_1"],
        },
        history: {
            battles_survived: 8,
            notable_victories: ["The Diagonal Crusade"],
            titles: ["Keeper of Light"],
            past_defeats: [],
        },
        current_game: {
            moves_made: 0,
            times_in_check: 0,
            escapes: 0,
        },
    },
    w_bishop_2: {
        id: "w_bishop_2",
        name: "Bishop Edmund",
        role: "Bishop",
        color: "white",
        status: "active",
        position: "f1",
        personality: {
            bravery: 70,
            caution: 80,
            leadership: 60,
            loyalty: 90,
            aggression: 40,
        },
        relationships: {
            trusted_allies: ["w_king", "w_queen"],
            rivalries: ["b_bishop_2"],
        },
        history: {
            battles_survived: 8,
            notable_victories: ["The Diagonal Crusade"],
            titles: ["Keeper of Light"],
            past_defeats: [],
        },
        current_game: {
            moves_made: 0,
            times_in_check: 0,
            escapes: 0,
        },
    },
    w_knight_1: {
        id: "w_knight_1",
        name: "Knight Sir Galahad",
        role: "Knight",
        color: "white",
        status: "active",
        position: "b1",
        personality: {
            bravery: 80,
            caution: 50,
            leadership: 70,
            loyalty: 95,
            aggression: 60,
        },
        relationships: {
            commander: "w_king",
            siblings: ["w_knight_2"],
            trusted_allies: ["w_king", "w_queen"],
            rivalries: ["b_knight_1"],
        },
        history: {
            battles_survived: 10,
            notable_victories: ["The Knight's Charge"],
            titles: ["The White Knight"],
            past_defeats: [],
        },
        current_game: {
            moves_made: 0,
            times_in_check: 0,
            escapes: 0,
        },
    },
    w_knight_2: {
        id: "w_knight_2",
        name: "Knight Sir Gawain",
        role: "Knight",
        color: "white",
        status: "active",
        position: "g1",
        personality: {
            bravery: 80,
            caution: 50,
            leadership: 70,
            loyalty: 95,
            aggression: 60,
        },
        relationships: {
            commander: "w_king",
            siblings: ["w_knight_1"],
            trusted_allies: ["w_king", "w_queen"],
            rivalries: ["b_knight_2"],
        },
        history: {
            battles_survived: 10,
            notable_victories: ["The Knight's Charge"],
            titles: ["The White Knight"],
            past_defeats: [],
        },
        current_game: {
            moves_made: 0,
            times_in_check: 0,
            escapes: 0,
        },
    },
    w_rook_1: {
        id: "w_rook_1",
        name: "Rook Sir Lancelot",
        role: "Rook",
        color: "white",
        status: "active",
        position: "a1",
        personality: {
            bravery: 90,
            caution: 50,
            leadership: 30,
            loyalty: 100,
            aggression: 60,
        },
        relationships: {
            commander: "w_king",
            siblings: ["w_rook_2"],
            trusted_allies: ["w_king", "w_queen"],
            rivalries: ["b_rook_1"],
        },
        history: {
            battles_survived: 12,
            notable_victories: ["The Rook's Charge"],
            titles: ["The White Rook"],
            past_defeats: [],
        },
        current_game: {
            moves_made: 0,
            times_in_check: 0,
            escapes: 0,
        },
    },
    w_rook_2: {
        id: "w_rook_2",
        name: "Rook Sir Percival",
        role: "Rook",
        color: "white",
        status: "active",
        position: "h1",
        personality: {
            bravery: 90,
            caution: 50,
            leadership: 30,
            loyalty: 100,
            aggression: 60,
        },
        relationships: {
            commander: "w_king",
            siblings: ["w_rook_1"],
            trusted_allies: ["w_king", "w_queen"],
            rivalries: ["b_rook_2"],
        },
        history: {
            battles_survived: 12,
            notable_victories: ["The Rook's Charge"],
            titles: ["The White Rook"],
            past_defeats: [],
        },
        current_game: {
            moves_made: 0,
            times_in_check: 0,
            escapes: 0,
        },
    },
    w_pawn_a: {
        id: "w_pawn_a",
        name: "Sir Alaric",
        role: "Pawn",
        color: "white",
        status: "active",
        position: "a2",
        personality: {
            bravery: 90,
            caution: 50,
            leadership: 30,
            loyalty: 100,
            aggression: 60,
        },
        relationships: {
            commander: "w_king",
            siblings: [
                "w_pawn_b",
                "w_pawn_c",
                "w_pawn_d",
                "w_pawn_e",
                "w_pawn_f",
                "w_pawn_g",
                "w_pawn_h",
            ],
        },
        history: {
            battles_survived: 3,
            notable_victories: ["First Line Defense"],
            titles: ["Aspiring Knight"],
            past_defeats: [],
        },
        current_game: {
            moves_made: 0,
            times_in_check: 0,
            escapes: 0,
        },
    },
    w_pawn_b: {
        id: "w_pawn_b",
        name: "Sir Baldrick",
        role: "Pawn",
        color: "white",
        status: "active",
        position: "b2",
        personality: {
            bravery: 90,
            caution: 50,
            leadership: 30,
            loyalty: 100,
            aggression: 60,
        },
        relationships: {
            commander: "w_king",
            siblings: [
                "w_pawn_b",
                "w_pawn_c",
                "w_pawn_d",
                "w_pawn_e",
                "w_pawn_f",
                "w_pawn_g",
                "w_pawn_h",
            ],
        },
        history: {
            battles_survived: 3,
            notable_victories: ["First Line Defense"],
            titles: ["Aspiring Knight"],
            past_defeats: [],
        },
        current_game: {
            moves_made: 0,
            times_in_check: 0,
            escapes: 0,
        },
    },
    w_pawn_c: {
        id: "w_pawn_c",
        name: "Sir Cedric",
        role: "Pawn",
        color: "white",
        status: "active",
        position: "c2",
        personality: {
            bravery: 90,
            caution: 50,
            leadership: 30,
            loyalty: 100,
            aggression: 60,
        },
        relationships: {
            commander: "w_king",
            siblings: [
                "w_pawn_a",
                "w_pawn_b",
                "w_pawn_d",
                "w_pawn_e",
                "w_pawn_f",
                "w_pawn_g",
                "w_pawn_h",
            ],
        },
        history: {
            battles_survived: 3,
            notable_victories: ["First Line Defense"],
            titles: ["Aspiring Knight"],
            past_defeats: [],
        },
        current_game: {
            moves_made: 0,
            times_in_check: 0,
            escapes: 0,
        },
    },
    w_pawn_d: {
        id: "w_pawn_d",
        name: "Sir Desmond",
        role: "Pawn",
        color: "white",
        status: "active",
        position: "d2",
        personality: {
            bravery: 90,
            caution: 50,
            leadership: 30,
            loyalty: 100,
            aggression: 60,
        },
        relationships: {
            commander: "w_king",
            siblings: [
                "w_pawn_a",
                "w_pawn_b",
                "w_pawn_c",
                "w_pawn_e",
                "w_pawn_f",
                "w_pawn_g",
                "w_pawn_h",
            ],
        },
        history: {
            battles_survived: 3,
            notable_victories: ["First Line Defense"],
            titles: ["Aspiring Knight"],
            past_defeats: [],
        },
        current_game: {
            moves_made: 0,
            times_in_check: 0,
            escapes: 0,
        },
    },
    w_pawn_e: {
        id: "w_pawn_e",
        name: "Sir Edmund",
        role: "Pawn",
        color: "white",
        status: "active",
        position: "e2",
        personality: {
            bravery: 90,
            caution: 50,
            leadership: 30,
            loyalty: 100,
            aggression: 60,
        },
        relationships: {
            commander: "w_king",
            siblings: [
                "w_pawn_a",
                "w_pawn_b",
                "w_pawn_c",
                "w_pawn_e",
                "w_pawn_f",
                "w_pawn_g",
                "w_pawn_h",
            ],
        },
        history: {
            battles_survived: 3,
            notable_victories: ["First Line Defense"],
            titles: ["Aspiring Knight"],
            past_defeats: [],
        },
        current_game: {
            moves_made: 0,
            times_in_check: 0,
            escapes: 0,
        },
    },
    w_pawn_f: {
        id: "w_pawn_f",
        name: "Sir Frederic",
        role: "Pawn",
        color: "white",
        status: "active",
        position: "f2",
        personality: {
            bravery: 90,
            caution: 50,
            leadership: 30,
            loyalty: 100,
            aggression: 60,
        },
        relationships: {
            commander: "w_king",
            siblings: [
                "w_pawn_a",
                "w_pawn_b",
                "w_pawn_c",
                "w_pawn_e",
                "w_pawn_f",
                "w_pawn_g",
                "w_pawn_h",
            ],
        },
        history: {
            battles_survived: 3,
            notable_victories: ["First Line Defense"],
            titles: ["Aspiring Knight"],
            past_defeats: [],
        },
        current_game: {
            moves_made: 0,
            times_in_check: 0,
            escapes: 0,
        },
    },
    w_pawn_g: {
        id: "w_pawn_g",
        name: "Sir Godric",
        role: "Pawn",
        color: "white",
        status: "active",
        position: "g2",
        personality: {
            bravery: 90,
            caution: 50,
            leadership: 30,
            loyalty: 100,
            aggression: 60,
        },
        relationships: {
            commander: "w_king",
            siblings: [
                "w_pawn_a",
                "w_pawn_b",
                "w_pawn_c",
                "w_pawn_e",
                "w_pawn_f",
                "w_pawn_h",
            ],
        },
        history: {
            battles_survived: 3,
            notable_victories: ["First Line Defense"],
            titles: ["Aspiring Knight"],
            past_defeats: [],
        },
        current_game: {
            moves_made: 0,
            times_in_check: 0,
            escapes: 0,
        },
    },
    w_pawn_h: {
        id: "w_pawn_h",
        name: "Sir Harold",
        role: "Pawn",
        color: "white",
        status: "active",
        position: "h2",
        personality: {
            bravery: 90,
            caution: 50,
            leadership: 30,
            loyalty: 100,
            aggression: 60,
        },
        relationships: {
            commander: "w_king",
            siblings: [
                "w_pawn_a",
                "w_pawn_b",
                "w_pawn_c",
                "w_pawn_e",
                "w_pawn_f",
                "w_pawn_g",
            ],
        },
        history: {
            battles_survived: 3,
            notable_victories: ["First Line Defense"],
            titles: ["Aspiring Knight"],
            past_defeats: [],
        },
        current_game: {
            moves_made: 0,
            times_in_check: 0,
            escapes: 0,
        },
    },

    b_king: {
        id: "b_king",
        name: "King Mordred",
        role: "King",
        color: "black",
        status: "active",
        position: "e8",
        personality: {
            bravery: 70,
            caution: 60,
            leadership: 85,
            loyalty: 70,
            aggression: 80,
        },
        relationships: {
            spouse: "Queen Morgana",
            children: [
                "b_pawn_a",
                "b_pawn_b",
                "b_pawn_c",
                "b_pawn_d",
                "b_pawn_e",
                "b_pawn_f",
                "b_pawn_g",
                "b_pawn_h",
            ],
            trusted_allies: ["b_queen", "b_knight_1", "b_knight_2"],
            rivalries: ["w_king"],
        },
        history: {
            battles_survived: 10,
            notable_victories: ["The Dark Conquest"],
            titles: ["The Shadow King"],
            past_defeats: [],
        },
        current_game: {
            moves_made: 0,
            times_in_check: 0,
            escapes: 0,
        },
    },
    b_queen: {
        id: "b_queen",
        name: "Queen Morgana",
        role: "Queen",
        color: "black",
        status: "active",
        position: "d8",
        personality: {
            bravery: 95,
            caution: 40,
            leadership: 85,
            loyalty: 80,
            aggression: 90,
        },
        relationships: {
            spouse: "King Mordred",
            trusted_allies: ["b_king", "b_bishop_1", "b_bishop_2"],
            rivalries: ["w_queen"],
        },
        history: {
            battles_survived: 13,
            notable_victories: [
                "The Dark Queen's Gambit",
                "The Shadow Conquest",
            ],
            titles: ["The Midnight Rose", "Shadow Queen"],
            past_defeats: [],
        },
        current_game: {
            moves_made: 0,
            times_in_check: 0,
            escapes: 0,
        },
    },
    b_bishop_1: {
        id: "b_bishop_1",
        name: "Bishop Malakai",
        role: "Bishop",
        color: "black",
        status: "active",
        position: "c8",
        personality: {
            bravery: 65,
            caution: 85,
            leadership: 70,
            loyalty: 75,
            aggression: 60,
        },
        relationships: {
            trusted_allies: ["b_king", "b_queen"],
            rivalries: ["w_bishop_1"],
        },
        history: {
            battles_survived: 9,
            notable_victories: ["The Dark Crusade"],
            titles: ["Keeper of Shadows"],
            past_defeats: ["The Battle of Dawn"],
        },
        current_game: {
            moves_made: 0,
            times_in_check: 0,
            escapes: 0,
        },
    },
    b_bishop_2: {
        id: "b_bishop_2",
        name: "Bishop Ravencroft",
        role: "Bishop",
        color: "black",
        status: "active",
        position: "f8",
        personality: {
            bravery: 75,
            caution: 70,
            leadership: 65,
            loyalty: 80,
            aggression: 55,
        },
        relationships: {
            trusted_allies: ["b_king", "b_queen"],
            rivalries: ["w_bishop_2"],
        },
        history: {
            battles_survived: 7,
            notable_victories: ["The Twilight Siege"],
            titles: ["Shadow Priest"],
            past_defeats: [],
        },
        current_game: {
            moves_made: 0,
            times_in_check: 0,
            escapes: 0,
        },
    },
    b_knight_1: {
        id: "b_knight_1",
        name: "Sir Blackthorn",
        role: "Knight",
        color: "black",
        status: "active",
        position: "b8",
        personality: {
            bravery: 85,
            caution: 40,
            leadership: 65,
            loyalty: 85,
            aggression: 80,
        },
        relationships: {
            commander: "b_king",
            siblings: ["b_knight_2"],
            trusted_allies: ["b_king", "b_queen"],
            rivalries: ["w_knight_1"],
        },
        history: {
            battles_survived: 11,
            notable_victories: ["The Midnight Raid"],
            titles: ["The Dark Knight", "Shadow Rider"],
            past_defeats: [],
        },
        current_game: {
            moves_made: 0,
            times_in_check: 0,
            escapes: 0,
        },
    },
    b_knight_2: {
        id: "b_knight_2",
        name: "Sir Shadowmere",
        role: "Knight",
        color: "black",
        status: "active",
        position: "g8",
        personality: {
            bravery: 90,
            caution: 35,
            leadership: 60,
            loyalty: 80,
            aggression: 85,
        },
        relationships: {
            commander: "b_king",
            siblings: ["b_knight_1"],
            trusted_allies: ["b_king", "b_queen"],
            rivalries: ["w_knight_2"],
        },
        history: {
            battles_survived: 9,
            notable_victories: ["The Night's Ambush"],
            titles: ["Twilight Rider"],
            past_defeats: ["The Dawn Skirmish"],
        },
        current_game: {
            moves_made: 0,
            times_in_check: 0,
            escapes: 0,
        },
    },
    b_rook_1: {
        id: "b_rook_1",
        name: "Lord Obsidian",
        role: "Rook",
        color: "black",
        status: "active",
        position: "a8",
        personality: {
            bravery: 95,
            caution: 30,
            leadership: 40,
            loyalty: 90,
            aggression: 85,
        },
        relationships: {
            commander: "b_king",
            siblings: ["b_rook_2"],
            trusted_allies: ["b_king", "b_queen"],
            rivalries: ["w_rook_1"],
        },
        history: {
            battles_survived: 14,
            notable_victories: ["The Tower's Fall", "The Dark Siege"],
            titles: ["The Black Tower", "Shadow Guardian"],
            past_defeats: [],
        },
        current_game: {
            moves_made: 0,
            times_in_check: 0,
            escapes: 0,
        },
    },
    b_rook_2: {
        id: "b_rook_2",
        name: "Lord Nightshade",
        role: "Rook",
        color: "black",
        status: "active",
        position: "h8",
        personality: {
            bravery: 85,
            caution: 40,
            leadership: 45,
            loyalty: 85,
            aggression: 90,
        },
        relationships: {
            commander: "b_king",
            siblings: ["b_rook_1"],
            trusted_allies: ["b_king", "b_queen"],
            rivalries: ["w_rook_2"],
        },
        history: {
            battles_survived: 11,
            notable_victories: ["The Fortress Breach"],
            titles: ["Dread Tower"],
            past_defeats: ["The Light's Defense"],
        },
        current_game: {
            moves_made: 0,
            times_in_check: 0,
            escapes: 0,
        },
    },
    b_pawn_a: {
        id: "b_pawn_a",
        name: "Sir Darkblade",
        role: "Pawn",
        color: "black",
        status: "active",
        position: "a7",
        personality: {
            bravery: 90,
            caution: 50,
            leadership: 30,
            loyalty: 100,
            aggression: 60,
        },
        relationships: {
            commander: "b_king",
            siblings: [
                "b_pawn_b",
                "b_pawn_c",
                "b_pawn_d",
                "b_pawn_e",
                "b_pawn_f",
                "b_pawn_g",
                "b_pawn_h",
            ],
        },
        history: {
            battles_survived: 3,
            notable_victories: ["First Line Defense"],
            titles: ["Aspiring Knight"],
            past_defeats: [],
        },
        current_game: {
            moves_made: 0,
            times_in_check: 0,
            escapes: 0,
        },
    },
    b_pawn_b: {
        id: "b_pawn_b",
        name: "Sir Nightshade",
        role: "Pawn",
        color: "black",
        status: "active",
        position: "b7",
        personality: {
            bravery: 90,
            caution: 50,
            leadership: 30,
            loyalty: 100,
            aggression: 60,
        },
        relationships: {
            commander: "b_king",
            siblings: [
                "b_pawn_a",
                "b_pawn_c",
                "b_pawn_d",
                "b_pawn_e",
                "b_pawn_f",
                "b_pawn_g",
                "b_pawn_h",
            ],
        },
        history: {
            battles_survived: 3,
            notable_victories: ["First Line Defense"],
            titles: ["Aspiring Knight"],
            past_defeats: [],
        },
        current_game: {
            moves_made: 0,
            times_in_check: 0,
            escapes: 0,
        },
    },
    b_pawn_c: {
        id: "b_pawn_c",
        name: "Sir Shadowmere",
        role: "Pawn",
        color: "black",
        status: "active",
        position: "c7",
        personality: {
            bravery: 90,
            caution: 50,
            leadership: 30,
            loyalty: 100,
            aggression: 60,
        },
        relationships: {
            commander: "b_king",
            siblings: [
                "b_pawn_a",
                "b_pawn_b",
                "b_pawn_d",
                "b_pawn_e",
                "b_pawn_f",
                "b_pawn_g",
                "b_pawn_h",
            ],
        },
        history: {
            battles_survived: 3,
            notable_victories: ["First Line Defense"],
            titles: ["Aspiring Knight"],
            past_defeats: [],
        },
        current_game: {
            moves_made: 0,
            times_in_check: 0,
            escapes: 0,
        },
    },
    b_pawn_d: {
        id: "b_pawn_d",
        name: "Sir Dreadforge",
        role: "Pawn",
        color: "black",
        status: "active",
        position: "d7",
        personality: {
            bravery: 90,
            caution: 50,
            leadership: 30,
            loyalty: 100,
            aggression: 60,
        },
        relationships: {
            commander: "b_king",
            siblings: [
                "b_pawn_a",
                "b_pawn_b",
                "b_pawn_c",
                "b_pawn_e",
                "b_pawn_f",
                "b_pawn_g",
                "b_pawn_h",
            ],
        },
        history: {
            battles_survived: 3,
            notable_victories: ["First Line Defense"],
            titles: ["Aspiring Knight"],
            past_defeats: [],
        },
        current_game: {
            moves_made: 0,
            times_in_check: 0,
            escapes: 0,
        },
    },
    b_pawn_e: {
        id: "b_pawn_e",
        name: "Sir Ebonheart",
        role: "Pawn",
        color: "black",
        status: "active",
        position: "e7",
        personality: {
            bravery: 90,
            caution: 50,
            leadership: 30,
            loyalty: 100,
            aggression: 60,
        },
        relationships: {
            commander: "b_king",
            siblings: [
                "b_pawn_a",
                "b_pawn_b",
                "b_pawn_c",
                "b_pawn_e",
                "b_pawn_f",
                "b_pawn_g",
                "b_pawn_h",
            ],
        },
        history: {
            battles_survived: 3,
            notable_victories: ["First Line Defense"],
            titles: ["Aspiring Knight"],
            past_defeats: [],
        },
        current_game: {
            moves_made: 0,
            times_in_check: 0,
            escapes: 0,
        },
    },
    b_pawn_f: {
        id: "b_pawn_f",
        name: "Sir Frostweaver",
        role: "Pawn",
        color: "black",
        status: "active",
        position: "f7",
        personality: {
            bravery: 90,
            caution: 50,
            leadership: 30,
            loyalty: 100,
            aggression: 60,
        },
        relationships: {
            commander: "b_king",
            siblings: [
                "b_pawn_a",
                "b_pawn_b",
                "b_pawn_c",
                "b_pawn_e",
                "b_pawn_f",
                "b_pawn_g",
                "b_pawn_h",
            ],
        },
        history: {
            battles_survived: 3,
            notable_victories: ["First Line Defense"],
            titles: ["Aspiring Knight"],
            past_defeats: [],
        },
        current_game: {
            moves_made: 0,
            times_in_check: 0,
            escapes: 0,
        },
    },
    b_pawn_g: {
        id: "b_pawn_g",
        name: "Sir Grimthorn",
        role: "Pawn",
        color: "black",
        status: "active",
        position: "g7",
        personality: {
            bravery: 90,
            caution: 50,
            leadership: 30,
            loyalty: 100,
            aggression: 60,
        },
        relationships: {
            commander: "b_king",
            siblings: [
                "b_pawn_a",
                "b_pawn_b",
                "b_pawn_c",
                "b_pawn_e",
                "b_pawn_f",
                "b_pawn_h",
            ],
        },
        history: {
            battles_survived: 3,
            notable_victories: ["First Line Defense"],
            titles: ["Aspiring Knight"],
            past_defeats: [],
        },
        current_game: {
            moves_made: 0,
            times_in_check: 0,
            escapes: 0,
        },
    },
    b_pawn_h: {
        id: "b_pawn_h",
        name: "Sir Havocbringer",
        role: "Pawn",
        color: "black",
        status: "active",
        position: "h7",
        personality: {
            bravery: 90,
            caution: 50,
            leadership: 30,
            loyalty: 100,
            aggression: 60,
        },
        relationships: {
            commander: "b_king",
            siblings: [
                "b_pawn_a",
                "b_pawn_b",
                "b_pawn_c",
                "b_pawn_e",
                "b_pawn_f",
                "b_pawn_g",
            ],
        },
        history: {
            battles_survived: 3,
            notable_victories: ["First Line Defense"],
            titles: ["Aspiring Knight"],
            past_defeats: [],
        },
        current_game: {
            moves_made: 0,
            times_in_check: 0,
            escapes: 0,
        },
    },
};

export class StoryService {
    private pieces: { [key: string]: ChessPiece } = initialPieces;

    getPieceAtPosition(position: string): ChessPiece | null {
        return (
            Object.values(this.pieces).find(
                (piece) =>
                    piece.position === position && piece.status === "active"
            ) || null
        );
    }

    generateMoveStory(
        pieceId: string,
        from: string,
        to: string,
        capture?: string
    ): string {
        const piece = this.pieces[pieceId];
        if (!piece) return "";

        // Update piece state
        piece.position = to;
        piece.current_game.moves_made++;

        if (capture) {
            const capturedPiece = this.pieces[capture];
            if (capturedPiece) {
                capturedPiece.status = "captured";
                return this.generateCaptureStory(piece, capturedPiece);
            }
        }

        return this.generateBasicMoveStory(piece, from, to);
    }

    private generateBasicMoveStory(
        piece: ChessPiece,
        from: string,
        to: string
    ): string {
        // Generate story based on piece personality and role
        const stories = {
            Pawn: `${piece.name}, a brave soldier of the ${piece.color} army, advances cautiously across the battlefield, their first step into the unknown.`,
            Knight: `${piece.name} guides their mystical steed in a graceful leap, landing with precision on new ground.`,
            Bishop: `${piece.name} glides diagonally across the field, their magical powers creating patterns of light in their wake.`,
            Rook: `The mighty ${piece.name} moves with unwavering determination, their heavy footsteps echoing across the battlefield.`,
            Queen: `${piece.name} demonstrates their mastery of the battlefield, moving with both grace and power.`,
            King: `${piece.name} makes a calculated move, their royal guard ensuring their safety at every step.`,
        };

        return stories[piece.role] || "";
    }

    private generateCaptureStory(
        attacker: ChessPiece,
        defender: ChessPiece
    ): string {
        return `In a fierce clash, ${attacker.name} confronts ${defender.name}. 
        ${
            attacker.personality.aggression > defender.personality.bravery
                ? `With overwhelming force, ${attacker.name} claims victory.`
                : `After a valiant struggle, ${defender.name} falls to ${attacker.name}'s superior position.`
        }`;
    }
}
