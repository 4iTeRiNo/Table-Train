export type TrainsData = TrainData[];

export type TrainData = {
  id: number | undefined;
  name: string | undefined;
  description: string | undefined;
  characteristics: Characteristics[] | undefined;
};

export type Characteristics = {
  speed: number;
  force: number;
  engineAmperage: number;
};

export type Characteristic = keyof Characteristics;
