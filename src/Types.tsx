export type CentileColumn = { centileValue: number };

export type CentileColumns = Array<CentileColumn>;

export type Child = {
  id: string,
  input: Array<string>,
  label: string,
  centileColumns: Array<{ centileValue: number }>
};

export type PercentileValue = { p: number, v: number | null };
export type PercentileValues = Array<PercentileValue>;

export type TestCalculData = {
  moyenne: number,
  ET: number,
  order: "ASC" | "DESC",
  pct: PercentileValues
};

export type CalculData = {
  [childId: string]: TestCalculData
};

export type Calcul = {
  classes: string,
  data: CalculData
};

export type Calculs = Array<Calcul>;

export type Test = {
  uuid: string;
  testName: string;
  type: string;
  description: string;
  json: string;
  patho: string;
  difficultyThreshold: string;
  options: string[];
  children: { id: string; input: string[]; label: string; }[];
  affectation: never[];
  testCode: string;
}
