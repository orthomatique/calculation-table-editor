import React, {Dispatch, SetStateAction} from "react";
import {Divider, Grid, Typography} from "@mui/material";
import NumericInputTextField from "./NumericInputTextField";
import {CalculData, Child} from "./Types";

type ChildType =
  &Child
  & {
    calculData: CalculData,
    setCalculData: Dispatch<SetStateAction<CalculData | undefined>>
  }

const TestChild = ({id, label, centileColumns, calculData, setCalculData}: ChildType) => {

  const updateAverage = (moyenne: number) => {
    setCalculData(previousCalculData => {
      if (previousCalculData) {
        const testCalculData = previousCalculData[id];
        return {...previousCalculData, [id]: {...testCalculData, moyenne}}
      }
    });
  };

  const updateStandardDeviation = (ET: number) => {
    setCalculData(previousCalculData => {
      if (previousCalculData) {
        const testCalculData = previousCalculData[id];
        return {...previousCalculData, [id]: {...testCalculData, ET}}
      }
    });
  };

  const updatePercentileValue = (centileColumnValue: number) => (percentileValue: number) => {
    setCalculData(previousCalculData => {
      if (previousCalculData) {
        const testCalculData = previousCalculData[id];
        const pct = testCalculData.pct.map(({p, v}) => {
          if (p !== centileColumnValue) return {p, v};
          return {p, v: percentileValue};
        });
        return {...previousCalculData, [id]: {...testCalculData, pct}};
      }
    });
  };

  return (
    <Grid item sm={12} key={id} container rowSpacing={1} spacing={2}>
      <Grid item sm={3}>
        <Typography variant="h4">{label}</Typography>
      </Grid>
      <Grid item sm={2} container rowSpacing={1} spacing={2}>
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
      </Grid>
      <Grid item sm={7} container rowSpacing={1} spacing={2}>
        {
          centileColumns.map(({centileValue: centileColumnValue}) =>
            <Grid item sm={1} key={centileColumnValue}>
              <NumericInputTextField
                label={`P${centileColumnValue}`}
                value={(calculData[id].pct.find(({p})=> p === centileColumnValue)|| {}).v || 0}
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

