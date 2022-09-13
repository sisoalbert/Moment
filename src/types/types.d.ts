export type BookState = {
  id: string;
  title: string | undefined;
  author: string | undefined;
};

export interface HomeContentsProps {
  name: string;
}

export type driver = {
  image: string;
  name: string;
  abbr: string;
  id: number;
  number: number;
};

export type team = {
  id: number;
  name: string;
  logo: string;
};

export interface ItemType {
  name: string | undefined;
  position: number | string;
  id: number;
  driver?: driver;
  team?: team;
  points?: string | number;
  wins?: null;
  behind?: null;
  image?: string;
  season?: number;
}
export type driverData = {
  driver: {
    id: number;
    name: string;
    image: string;
  };
};
