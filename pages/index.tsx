import React, {useEffect, useState} from 'react';
import type {NextPage} from 'next';
import {Box, Container, Grid, Typography} from "@mui/material";
import { mergeAdvanced } from "object-merge-advanced";
import test from '../src/test.json';
import TestChild from "../src/TestChild";
import ChildHeader from "../src/ChildHeader";
import FileSelector from "../src/FileSelector";
import {CalculData, CentileColumns, Test} from "../src/Types";

const Home: NextPage = () => {
  const [fileName, setFileName] = useState('No file selected yet');
  const [content, setContent] = useState<Test>();
  const [centileColumns, setCentileColumns] = useState<CentileColumns>([5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95].map(v => ({centileValue: v})));
  const [classe] = useState<string>("CE1");

  useEffect(() => {
    setContent(test as Test);
  }, []);

  const updateCalculData = (calculData: CalculData) => {
    const calcul = [{classes: classe, data: calculData}];
    setContent({...content, calcul })
  };

  const defaultCalculData = ((content || {}).children || []).reduce((acc: CalculData, {id}) => {
    acc[id] = {
      moyenne: 0,
      ET: 0,
      order: "ASC",
      pct: centileColumns.map(({centileValue}) => ({
        p: centileValue,
        v: 0
      })) || []
    }
    return acc;
  }, {});

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
          {content && (content.children || []).map(({id, input, label}) => {
            const contentCalculData = ((content.calcul || []).find(({classes}) => classes === classe) || {}).data;
            const calculData = mergeAdvanced(defaultCalculData, contentCalculData, {});
            return <TestChild
              key={id}
              id={id}
              input={input}
              label={label}
              centileColumns={centileColumns}
              calculData={calculData}
              setCalculData={updateCalculData}
            />;
          })
          }
          <Grid item sm={12}>
            {JSON.stringify(content)}
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Home;
