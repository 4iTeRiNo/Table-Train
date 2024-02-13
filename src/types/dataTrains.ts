export type TrainsData = TrainData[];

export type TrainData = {
  id: number;
  name: string;
  description: string;
  characteristics: Characteristics[];
};

export type Characteristics = {
  speed: number;
  force: number;
  engineAmperage: number;
};

export type Characteristic = keyof Characteristics;
