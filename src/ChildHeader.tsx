import {
  Divider,
  Grid,
  Typography
} from "@mui/material";
import React, {Dispatch, SetStateAction} from "react";
import AddPercentileButton from "./AddPercentileButton";
import {CentileColumns} from "./Types";

type ChildHeaderType = {
  centileColumns: Array<{centileValue: number}>,
  setCentileColumns: Dispatch<SetStateAction<CentileColumns>>
}

const ChildHeader = ({centileColumns, setCentileColumns}: ChildHeaderType) => {

  const addPercentileColumn = (centileValue: number) => {
    setCentileColumns((previousColumns: Array<{centileValue: number}>) => {
      const nextColumns = [...previousColumns, {centileValue}];
      nextColumns.sort(({centileValue: v1}, {centileValue: v2}) => v1 - v2)
      return nextColumns;
    })
  };

  return <Grid item sm={12} container spacing={2}>
    <Grid item sm={3}>
      <Typography variant="h4">Libellé d&apos;&eacute;preuve</Typography>
    </Grid>
    <Grid item sm={2}>
      <Typography variant="h4">Zscore</Typography>
    </Grid>
    <Grid item sm={7} container spacing={2}>
      <Grid item sm={12}>
        <Typography variant="h4">centiles</Typography>
      </Grid>
      <Grid item sm={12} container spacing={2}>
        {
          centileColumns.map((centileColumn) =>
            <Grid item sm={1} key={centileColumn.centileValue}>
              P{centileColumn.centileValue}
            </Grid>
          )
        }
        <AddPercentileButton addPercentileColumn={addPercentileColumn} />
      </Grid>
    </Grid>
    <Grid item sm={12}>
      <Divider/>
    </Grid>

  </Grid>
}

export default ChildHeader;
