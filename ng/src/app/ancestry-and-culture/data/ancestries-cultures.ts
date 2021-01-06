import { WeightedAncestry, WeightedOption } from '../interfaces/WeightedOption';

export const ancestries: WeightedAncestry[] = [
  { option: 'Abolethi', weight: 1, match: ['Abolethi'] },
  { option: 'Apri', weight: 6, match: ['Apri'] },
  { option: 'Aquatic Elf', weight: 8, match: ['Deep Aquatic Elf', 'Sea Aquatic Elf', 'Lake Aquatic Elf'] },
  { option: 'Aster', weight: 5, match: ['Aster Raider', 'Aster Monk'] },
  { option: 'Awakened Undead', weight: 1, match: ['Awakened Undead'] },
  { option: 'Azer', weight: 4, match: ['Azer'] },
  { option: 'Bat Folk', weight: 8, match: ['Bat Folk'] },
  { option: 'Bear Folk', weight: 8, match: ['Bear Folk'] },
  { option: 'Behirborn', weight: 4, match: ['Behirborn'] },
  { option: 'Bird Folk', weight: 8, match: ['Bird Folk'] },
  { option: 'Bugbear', weight: 6, match: ['Bugbear'] },
  { option: 'Bulette Folk', weight: 5, match: ['Bulette Folk'] },
  { option: 'Cat Folk', weight: 8, match: ['Cat Folk'] },
  { option: 'Centaur', weight: 8, match: ['Centaur'] },
  { option: 'Cephalid', weight: 8, match: ['Cephalid'] },
  { option: 'Combined', weight: 3, match: ['Combined'] },
  { option: 'Construct', weight: 2, match: ['Construct'] },
  { option: 'Couatl Folk', weight: 4, match: ['Couatl Folk'] },
  { option: 'Devan', weight: 5, match: ['Devan'] },
  { option: 'Dhampir', weight: 4, match: ['Dhampir'] },
  { option: 'Djinn-Blessed', weight: 4, match: ['Djinn-Blessed'] },
  { option: 'Dragonborn', weight: 10, match: ['Dragonborn'] },
  { option: 'Dryad', weight: 5, match: ['Dryad'] },
  { option: 'Dwarf', weight: 12, match: ['Hill Dwarf', 'Deep Dwarf', 'Rock Dwarf', 'Sea Dwarf'] },
  { option: 'Earthborn', weight: 4, match: ['Earthborn'] },
  { option: 'Efreeti-Touched', weight: 4, match: ['Efreeti-Touched'] },
  { option: 'Elf', weight: 12, match: ['High Elf', 'Deep Elf', 'Fey Elf', 'Forest Elf', 'Shadow Elf'] },
  { option: 'Gargoyle', weight: 3, match: ['Gargoyle'] },
  { option: 'Gnoll', weight: 8, match: ['Gnoll'] },
  { option: 'Gnome', weight: 12, match: ['Rock Gnome', 'Dark Gnome', 'Wood Gnome'] },
  { option: 'Goblin', weight: 8, match: ['Goblin'] },
  { option: 'Halfling', weight: 12, match: ['Lightfoot Halfling', 'Sturdy Halfling', 'Urban Halfling'] },
  { option: 'Harpy', weight: 5, match: ['Harpy'] },
  { option: 'Hobgoblin', weight: 6, match: ['Hobgoblin'] },
  { option: 'Human', weight: 15, match: ['Human'] },
  { option: 'Insect Folk', weight: 1, match: ['Insect Folk'] },
  { option: 'Kobold', weight: 8, match: ['Kobold'] },
  { option: 'Leonin', weight: 8, match: ['Leonin'] },
  { option: 'Lizardfolk', weight: 8, match: ['Lizardfolk'] },
  { option: 'Medusan', weight: 4, match: ['Medusan'] },
  { option: 'Minotaur', weight: 4, match: ['Minotaur'] },
  { option: 'Octofolk', weight: 3, match: ['Octofolk'] },
  { option: 'Oozeling', weight: 1, match: ['Oozeling'] },
  { option: 'Orc', weight: 9, match: ['Orc'] },
  { option: 'Psilocybe', weight: 2, match: ['Psilocybe'] },
  { option: 'Ratfolk', weight: 8, match: ['Ratfolk'] },
  { option: 'Snake Folk', weight: 8, match: ['Snake Folk'] },
  { option: 'Tiefling', weight: 8, match: ['Tiefling'] },
  { option: 'Turtlefolk', weight: 8, match: ['Turtlefolk'] }
];

export const cultures: WeightedOption[] = [
  { option: 'Abolethi', weight: 1 },
  { option: 'Apri', weight: 5 },
  { option: 'Aster Raider', weight: 4 },
  { option: 'Aster Monk', weight: 4 },
  { option: 'Azer', weight: 2 },
  { option: 'Awakened Undead', weight: 1 },
  { option: 'Bat Folk', weight: 6 },
  { option: 'Bear Folk', weight: 6 },
  { option: 'Behirborn', weight: 6 },
  { option: 'Bird Folk', weight: 6 },
  { option: 'Bugbear', weight: 4 },
  { option: 'Bulette Folk', weight: 3 },
  { option: 'Cat Folk', weight: 8 },
  { option: 'Centaur', weight: 8 },
  { option: 'Cephalid', weight: 6 },
  { option: 'Combined', weight: 3 },
  { option: 'Construct', weight: 2 },
  { option: 'Couatl Folk', weight: 2 },
  { option: 'Dark Gnome', weight: 6 },
  { option: 'Deep Aquatic Elf', weight: 10 },
  { option: 'Deep Dwarf', weight: 6 },
  { option: 'Deep Elf', weight: 6 },
  { option: 'Devan', weight: 5 },
  { option: 'Dhampir', weight: 2 },
  { option: 'Djinn-Blessed', weight: 2 },
  { option: 'Dragonborn', weight: 10 },
  { option: 'Dryad', weight: 5 },
  { option: 'Earthborn', weight: 2 },
  { option: 'Efreeti-Touched', weight: 2 },
  { option: 'Fey Elf', weight: 4 },
  { option: 'Forest Elf', weight: 8 },
  { option: 'Gargoyle', weight: 3 },
  { option: 'Gnoll', weight: 4 },
  { option: 'Goblin', weight: 4 },
  { option: 'Harpy', weight: 4 },
  { option: 'High Elf', weight: 10 },
  { option: 'Hill Dwarf', weight: 10 },
  { option: 'Hobgoblin', weight: 4 },
  { option: 'Human', weight: 9 },
  { option: 'Insect Folk', weight: 1 },
  { option: 'Kobold', weight: 6 },
  { option: 'Lake Aquatic Elf', weight: 4 },
  { option: 'Leonin', weight: 6 },
  { option: 'Lightfoot Halfling', weight: 10 },
  { option: 'Lizardfolk', weight: 6 },
  { option: 'Medusan', weight: 4 },
  { option: 'Minotaur', weight: 4 },
  { option: 'Octofolk', weight: 3 },
  { option: 'Oozeling', weight: 1 },
  { option: 'Orc', weight: 9 },
  { option: 'Psilocybe', weight: 2 },
  { option: 'Ratfolk', weight: 6 },
  { option: 'Rock Dwarf', weight: 10 },
  { option: 'Rock Gnome', weight: 10 },
  { option: 'Sea Aquatic Elf', weight: 4 },
  { option: 'Sea Dwarf', weight: 10 },
  { option: 'Shadow Elf', weight: 2 },
  { option: 'Snake Folk', weight: 6 },
  { option: 'Sturdy Halfling', weight: 10 },
  { option: 'Tiefling', weight: 8 },
  { option: 'Turtlefolk', weight: 8 },
  { option: 'Urban Halfling', weight: 6 },
  { option: 'Wood Gnome', weight: 10 }
];

export const geographicCultures: WeightedOption[] = [
  { option: 'Arctic', weight: 10 },
  { option: 'Coastal', weight: 10 },
  { option: 'Desert', weight: 10 },
  { option: 'Forest', weight: 10 },
  { option: 'Grassland', weight: 10 },
  { option: 'Mountain', weight: 10 },
  { option: 'Swamp', weight: 10 },
  { option: 'Subterranean', weight: 10 },
  { option: 'Underwater', weight: 10 },
  { option: 'Urban', weight: 10 }
];

export const planarCultures: WeightedOption[] = [
  { option: 'Astral Plane', weight: 10 },
  { option: 'Elemental Plane (Earth)', weight: 10 },
  { option: 'Elemental Plane (Air)', weight: 10 },
  { option: 'Elemental Plane (Fire)', weight: 10 },
  { option: 'Elemental Plane (Water)', weight: 10 },
  { option: 'Ethereal Plane', weight: 10 },
  { option: 'Lower Planes (Abyssal)', weight: 10 },
  { option: 'Lower Planes (Infernal)', weight: 10 },
  { option: 'Outer Realms', weight: 10 },
  { option: 'Plane of Faerie', weight: 10 },
  { option: 'Plane of Shadows', weight: 10 },
  { option: 'Upper Planes', weight: 10 }
];