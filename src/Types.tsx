export type CentileColumn = { centileValue: number };

export type CentileColumns = Array<CentileColumn>;

export type ChildInput = 'SCORE_ET' | 'TEMPS_ET' | 'ERR_SCORE_ET' | 'ERR_TEMPS_ET' | 'SCORE_CENTILE' | 'TEMPS_CENTILE' | 'ERR_CENTILE' | 'ERR_TEMPSCENTILE' | 'SCORE_QUART' | 'SCORE_QUINT' | 'SCORE_AD' | 'NS19' | 'QUALI';

export type Child = {
  id: string,
  input: Array<ChildInput>,
  label: string,
};

export type PercentileValue = { p: number, v: number | null };
export type PercentileValues = Array<PercentileValue>;

export type TestCalculData = {
  moyenne: number,
  ET: number,
  order?: "ASC" | "DESC",
  pct?: PercentileValues
};

export type CalculData = {
  [childId: string]: TestCalculData
};

export type Calcul = {
  classes: string,
  data: CalculData
};

export type Test = {
  uuid?: string;
  testName?: string;
  type?: string;
  description?: string;
  json?: string;
  patho?: string;
  difficultyThreshold?: string;
  options?: string[];
  children?: Child[];
  affectation?: never[];
  testCode?: string;
  calcul?: Calcul[];
}
