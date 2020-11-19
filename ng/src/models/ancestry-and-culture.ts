export interface AncestryAndCulture {
  ancestry: Ancestry;
  culture: Culture[];
}

export interface Ref {
  id: string;
  name: string;
}

export enum Size {
  Small,
  Medium,
  Large
}

export interface AbilityScoreIncrease {
  strength?: number;
  dexterity?: number;
  constitution?: number;
  intelligence?: number;
  wisdom?: number;
  charisma?: number;
}

export interface Ability {
  id: string;
  name: string;
  description: string;
  type: AbilityType;
}

export enum AbilityType {
  Proficiency,
  Language,
  Resistance,
  Skill,
  Speed,
  Other
}

export enum Speed {
  Walking,
  Flying,
  Climbing,
  Swimming,
  Burrowing
}

export interface Ancestry {
  id: string;
  name: string;
  description: string;
  age: {
    text: string;
    adult: number;
    old: number;
  };
  size: {
    text: string;
    weight?: number;
    height?: {
      min?: number;
      max?: number;
    };
    size: Size;
  };
  speed: {
    mode: Speed;
    value: number;
  }[];
  abilities: Ability[];
  cultures: string[];
}

export interface Culture {
  id: string;
  name: string;
  description: string;
  asi: AbilityScoreIncrease;
  alignment: string;
  abilities: Ability[];
  ancestries: string[];
}
