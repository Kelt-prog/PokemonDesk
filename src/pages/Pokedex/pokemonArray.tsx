export interface IPokemon {
  nameClean: string;
  abilities: string[];
  stats: {
    [key: string]: number;
  };
  types: string[];
  img: string;
  name: string;
  baseExperience: number;
  height: number;
  id: number;
  isDefault: boolean;
  order: number;
  weight: number;
}
