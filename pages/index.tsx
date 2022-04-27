import React, {useState} from 'react';
import type {NextPage} from 'next';
import {Box, Container, Grid, Typography} from "@mui/material";
import { mergeAdvanced } from "object-merge-advanced";
import TestChild from "../src/TestChild";
import ChildHeader from "../src/ChildHeader";
import FileSelector from "../src/FileSelector";
import ClasseSelector from "../src/ClasseSelector";
import {CalculData, CentileColumn, Test} from "../src/Types";
import {inputHasPercentile, inputHasStandardDeviation} from "../src/util";
import FileDownLoader from "../src/FileDownloader";

const Home: NextPage = () => {
  const [fileName, setFileName] = useState<string>();
  const [content, setContent] = useState<Test>();
  const [centileColumns, setCentileColumns] = useState<CentileColumn[]>([].map(v => ({centileValue: v})));
  const [classe, setClasse] = useState<string>("");

  const updateCalculData = (calculData: CalculData) => {
    const {calcul = []} = content || {};
    const index = calcul.findIndex(({classes}) => classes === classe);
    const newCalcul = {classes: classe, data: calculData};
    calcul.splice(index, 1, newCalcul)
    setContent({...content, calcul })
  };

  const addClasse = (newClasse: string) => {
    const {calcul = []} = content || {};
    calcul.push({classes: newClasse, data: defaultCalculData})
    setContent({...content, calcul});
    if (!classe) setClasse(newClasse)
  };

  const defaultCalculData = ((content || {}).children || []).reduce((acc: CalculData, {id, input}) => {
      const standardDeviation = inputHasStandardDeviation(input) ? {
        moyenne: 0,
        ET: 0
      } : {};
      const percentile = inputHasPercentile(input) ? {
        order: "ASC",
        pct: centileColumns.map(({centileValue}) => ({
          p: centileValue,
          v: 0
        })) || []
      } : {};
      // @ts-ignore
      acc[id] = {
        ...standardDeviation,
        ...percentile
      }
      return acc;
    }, {});
  const contentCalculData = (((content && content.calcul) || []).find(({classes}) => classes === classe) || {}).data;
  const calculData = mergeAdvanced(defaultCalculData, contentCalculData, {});

  console.log({content})

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
          Éditeur de table de calcul pour Orthoscribe V2.
        </Typography>
        <Grid container spacing={1}>
          {
            !content &&
            <FileSelector
              setFileName={setFileName}
              setContent={setContent}
            />
          }
          <Grid item md={12}>
            {fileName || 'Pas de fichier sélectionné'}
          </Grid>
          {content &&
            <>
              <Grid item md={12} container>
                <ClasseSelector
                  classes={((content && content.calcul) || []).map(({classes})=>classes)}
                  classe={classe}
                  setClasse={setClasse}
                  addClasse={addClasse}
                />
              </Grid>
              <ChildHeader
                centileColumns={centileColumns}
                setCentileColumns={setCentileColumns}
              />
              {classe && content && (content.children || []).map(({id, input, label}) =>
                <TestChild
                  key={id}
                  id={id}
                  input={input}
                  label={label}
                  centileColumns={centileColumns}
                  calculData={calculData}
                  setCalculData={updateCalculData}
                />)
              }
            </>
          }
          <Grid item md={12}>
            {
              content && fileName &&
                <FileDownLoader
                    fileName={fileName}
                    content={content}
                />
            }
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Home;
