import { WorldHistory } from "@/types/story";

export const worldHistory: WorldHistory = {
    overview: `In the mystical realm of Chesaria, two ancient kingdoms have maintained a delicate balance for centuries. 
    The crystalline cities of the White Kingdom, known for their advanced magical arts and diplomatic finesse, 
    stood in stark contrast to the obsidian fortresses of the Black Kingdom, renowned for their military might 
    and technological innovations. The peace was shattered when an ancient prophecy emerged, speaking of a 
    powerful artifact hidden within the checkered plains that could grant absolute power over both kingdoms. 
    Now, both sides marshal their forces for what may be the final battle for control of Chesaria.`,

    factions: {
        white: {
            name: "The Crystal Covenant",
            culture: `A society built on principles of order and protection, where strategic thinking and 
            careful planning are valued above all. Their cities are architectural marvels of crystalline 
            spires, and their people are known for their diplomatic skills and magical prowess.`,
            conflict_role: `Seeking to protect the artifact from what they believe would be destructive 
            use by the Obsidian Order.`,
        },
        black: {
            name: "The Obsidian Order",
            culture: `A pragmatic and innovative society that values strength and technological advancement. 
            Their fortress cities are marvels of engineering, powered by steam and ancient magic, and their 
            people are known for their resilience and tactical brilliance.`,
            conflict_role: `Believing the artifact is their birthright and key to advancing their 
            civilization to new heights.`,
        },
    },
};
