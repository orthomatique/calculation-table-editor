import React from "react";
import {Divider, Grid, Typography} from "@mui/material";
import NumericInputTextField from "./NumericInputTextField";
import {CalculData, CentileColumn, Child} from "./Types";
import {inputHasPercentile, inputHasStandardDeviation} from "./util";

type ChildType =
  & Child
  & {
    centileColumns: CentileColumn[],
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
    <Grid item md={12} key={id} container rowSpacing={1} spacing={2} alignItems="center">
      <Grid item md={3}>
        <Typography variant="h4">- {label}</Typography>
      </Grid>
      <Grid item md={2} container rowSpacing={1} spacing={2}>
        { inputHasStandardDeviation(input) &&
          <>
            <Grid item md={12}>
              <NumericInputTextField
                label="Moyenne"
                value={calculData[id].moyenne}
                onChangeValue={updateAverage}
              />
            </Grid>
            <Grid item md={12}>
              <NumericInputTextField
                label="E.T."
                value={calculData[id].ET}
                onChangeValue={updateStandardDeviation}
              />
            </Grid>
          </>
        }
      </Grid>
      <Grid item md={7} container rowSpacing={1} spacing={2}>
        {
          inputHasPercentile(input) &&
          centileColumns.map(({centileValue: centileColumnValue}) =>
            <Grid item xl={1} lg={2} md={3} key={centileColumnValue}>
              <NumericInputTextField
                label={`P${centileColumnValue}`}
                value={((calculData[id].pct || []).find(({p})=> p === centileColumnValue)|| {}).v || 0}
                onChangeValue={updatePercentileValue(centileColumnValue)}
              />
            </Grid>
          )
        }
      </Grid>
      <Grid item md={12}>
        <Divider/>
      </Grid>
    </Grid>
  );
};

export default TestChild;

