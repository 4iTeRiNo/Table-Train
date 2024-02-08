export type dataTrains = Train;

type Train = {
  name: string;
  description: string;
  characteristics: Characteristics[];
};
type Characteristics = {
  speed: number;
  force: number;
  engineAmperage: number;
};

// Вариант на union-типах
// type TTrain = Record<string, string | TCharacteristics>;
// type TCharacteristics = Record<string, number>[];
