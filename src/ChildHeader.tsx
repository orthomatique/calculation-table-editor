import {
  Divider,
  Grid,
  Typography
} from "@mui/material";
import React, {Dispatch, SetStateAction} from "react";
import AddPercentileButton from "./AddPercentileButton";
import {CentileColumn} from "./Types";

type ChildHeaderType = {
  centileColumns: Array<{centileValue: number}>,
  setCentileColumns: Dispatch<SetStateAction<CentileColumn[]>>
}

const ChildHeader = ({centileColumns, setCentileColumns}: ChildHeaderType) => {

  const addPercentileColumn = (centileValue: number) => {
    setCentileColumns((previousColumns: Array<{centileValue: number}>) => {
      const nextColumns = [...previousColumns, {centileValue}];
      nextColumns.sort(({centileValue: v1}, {centileValue: v2}) => v1 - v2)
      return nextColumns;
    })
  };

  return <Grid item md={12} container spacing={2}>
    <Grid item md={3}>
      <Typography variant="h4">Libellé d&apos;&eacute;preuve</Typography>
    </Grid>
    <Grid item md={2}>
      <Typography variant="h4">Zscore</Typography>
    </Grid>
    <Grid item md={7} container spacing={2}>
      <Grid item md={12}>
        <Typography variant="h4">centiles</Typography>
      </Grid>
      <Grid item md={12} container spacing={2}>
        {
          centileColumns.map((centileColumn) =>
            <Grid item xl={1} lg={2} md={3} key={centileColumn.centileValue}>
              P{centileColumn.centileValue}
            </Grid>
          )
        }
        <AddPercentileButton addPercentileColumn={addPercentileColumn} />
      </Grid>
    </Grid>
    <Grid item md={12}>
      <Divider/>
    </Grid>

  </Grid>
}

export default ChildHeader;
