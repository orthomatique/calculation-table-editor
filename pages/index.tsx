import React, {useEffect, useState} from 'react';
import type {NextPage} from 'next';
import {Box, Container, Grid, Typography} from "@mui/material";
import test from '../src/test.json';
import TestChild from "../src/TestChild";
import ChildHeader from "../src/ChildHeader";
import FileSelector from "../src/FileSelector";
import {CalculData, CentileColumns} from "../src/Types";

const Home: NextPage = () => {
  const [fileName, setFileName] = useState('No file selected yet');
  const [content, setContent] = useState(test);
  const [centileColumns, setCentileColumns] = useState<CentileColumns>([5, 10, 25, 50, 75, 90, 95].map(v => ({centileValue: v})));
  const [calculData, setCalculData] = useState<CalculData>();

  useEffect(() => {
    const initialiseCalculData = () => {
      const nextCalculData = content.children.reduce((acc: CalculData, {id}) => {
        // TODO retrieve previous pct values to ensure they are not lost after adding new centileColumn
        acc[id] = {
          moyenne: 0,
          ET: 0,
          order: "ASC",
          pct: centileColumns.map(({ centileValue}) => ({
            p: centileValue,
            v: 0
          })) || []
        }
        return acc;
      }, {});
      setCalculData(nextCalculData);
    };

    initialiseCalculData();
  }, [content, centileColumns]);

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Éditeur de table de calcul pour orthoscribe V2.
        </Typography>
        <Grid container spacing={1}>
          <FileSelector
            setFileName={setFileName}
            setContent={setContent}
          />
          <Grid item sm={12}>
            {fileName}
          </Grid>
          <ChildHeader
            centileColumns={centileColumns}
            setCentileColumns={setCentileColumns}
          />
          {calculData && content.children.map(({id, input, label}) =>
              <TestChild
                key={id}
                id={id}
                input={input}
                label={label}
                centileColumns={centileColumns}
                calculData={calculData}
                setCalculData={setCalculData}
              />)
          }
        </Grid>
      </Box>
    </Container>
  );
};

export default Home;
