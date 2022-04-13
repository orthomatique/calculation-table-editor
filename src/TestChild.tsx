import React from "react";
import {Divider, Grid, Typography} from "@mui/material";
import NumericInputTextField from "./NumericInputTextField";
import {CalculData, CentileColumns, Child, ChildInput} from "./Types";

type ChildType =
  & Child
  & {
    centileColumns: CentileColumns,
    calculData: CalculData,
    setCalculData: (calculData: CalculData) => void
  }

const TestChild = ({id, input, label, centileColumns, calculData, setCalculData}: ChildType) => {

  const updateAverage = (moyenne: number) => {
    const testCalculData = calculData[id];
    setCalculData({...calculData, [id]: {...testCalculData, moyenne}});
  };

  const updateStandardDeviation = (ET: number) => {
    const testCalculData = calculData[id];
    setCalculData({...calculData, [id]: {...testCalculData, ET}});
  };

  const updatePercentileValue = (centileColumnValue: number) => (percentileValue: number) => {
    const testCalculData = calculData[id];
    const pct = (testCalculData.pct || []).map(({p, v}) => {
      if (p !== centileColumnValue) return {p, v};
      return {p, v: percentileValue};
    });
    setCalculData({...calculData, [id]: {...testCalculData, pct}});
  };

  return (
    <Grid item sm={12} key={id} container rowSpacing={1} spacing={2} alignItems="center">
      <Grid item sm={3}>
        <Typography variant="h4">- {label}</Typography>
      </Grid>
      <Grid item sm={2} container rowSpacing={1} spacing={2}>
        { ['SCORE_ET', 'TEMPS_ET', 'ERR_SCORE_ET', 'ERR_TEMPS_ET'].some((r) => input.includes(r as ChildInput)) &&
          <>
            <Grid item sm={12}>
              <NumericInputTextField
                label="Moyenne"
                value={calculData[id].moyenne}
                onChangeValue={updateAverage}
              />
            </Grid>
            <Grid item sm={12}>
              <NumericInputTextField
                label="E.T."
                value={calculData[id].ET}
                onChangeValue={updateStandardDeviation}
              />
            </Grid>
          </>
        }
      </Grid>
      <Grid item sm={7} container rowSpacing={1} spacing={2}>
        {
          ['SCORE_CENTILE', 'TEMPS_CENTILE', 'ERR_CENTILE', 'ERR_TEMPSCENTILE', 'SCORE_QUART', 'SCORE_QUINT'].some(r=> input.includes(r as ChildInput)) &&
          centileColumns.map(({centileValue: centileColumnValue}) =>
            <Grid item sm={1} key={centileColumnValue}>
              <NumericInputTextField
                label={`P${centileColumnValue}`}
                value={((calculData[id].pct || []).find(({p})=> p === centileColumnValue)|| {}).v || 0}
                onChangeValue={updatePercentileValue(centileColumnValue)}
              />
            </Grid>
          )
        }
      </Grid>
      <Grid item sm={12}>
        <Divider/>
      </Grid>
    </Grid>
  );
};

export default TestChild;

