import {ChildInput} from "./Types";

export const inputHasStandardDeviation = (input: ChildInput[]) => ['SCORE_ET', 'TEMPS_ET', 'ERR_SCORE_ET', 'ERR_TEMPS_ET'].some((r) => input.includes(r as ChildInput));
export const inputHasPercentile = (input: ChildInput[]) => ['SCORE_CENTILE', 'TEMPS_CENTILE', 'ERR_CENTILE', 'ERR_TEMPSCENTILE', 'SCORE_QUART', 'SCORE_QUINT'].some(r=> input.includes(r as ChildInput));

