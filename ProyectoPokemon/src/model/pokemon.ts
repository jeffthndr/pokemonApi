export type Pokemon = {
  id: number;
  name: string;
  poster: string;
  effect: string;
};
export type ResultApi = {
  count: number;
  next: string;
  previous: unknown;
  results: Pokemon[];
};
