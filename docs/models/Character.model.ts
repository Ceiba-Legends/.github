class Character {
    id: string;
    firstName: string;
    lastName: string;
    combativity: Combativity;
    wounds: Wound[];
    stats: Stat[];
    skills: Skill[];
    specialSkills: SpecialSkill[];
    talents: Talent[];
    flaws: Flaw[];
    equipment: Equipment[];
    possessions: Possession[];
    money: Money;
    munitions: Munition[];
}

class Combativity {
    max: number;
    temp: number;
    actual: number;
}

class Wound {
    id: string;
    localisation: string;
    total: number;
    healed: boolean;
}

class Stat {
    id: string;
    name: string;
    value: number;
}

class Skill {
    id: string;
    name: string;
    value: number;
    relatedStatsIds: string[];
}

class SpecialSkill {
    id: string;
    name: string;
    description: string;
}

class Talent {
    id: string;
    name: string;
    description: string;
}

class Flaw {
    id: string;
    name: string;
    description: string;
}

class Equipment {
    weapons: Weapon[];
    wearables: Wearable[];
}

class Weapon {
    id: string;
    name: string;
    damage: number;
    range: number;
    attributes: Attributes[];
    description: string;
}

enum Attributes {
    "Léger",
    "Lourd",
    "Deux mains",
    "À distance"
}

class Wearable {
    id: string;
    name: string;
    description: string;
    localisation: Localisation;
}

enum Localisation {
    "Tête",
    "Veste",
    "Torse",
    "Ceinture",
    "Jambes",
    "Pieds"
}

class Possession {
    id: string;
    name: string;
    description: string;
}

class Money {
    reales: number;
    heightCoins: number;
    doublons: number;
}

class Munition {
    id: string;
    type: MunitionTypes;
    quantity: number;
}

enum MunitionTypes {
    "Balle",
    "Flèche",
    "Boulet",
    "Flechette"
}

