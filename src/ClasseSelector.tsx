import {FormControl, FormHelperText, Grid, InputLabel, MenuItem, Select} from "@mui/material";
import AddClasseButton from "./AddClasseButton";

type ClasseSelectorProps = {
  classes: string[],
  classe: string,
  setClasse: React.Dispatch<React.SetStateAction<string>>,
  addClasse: (newClasse: string) => void
};

const ClasseSelector = ({classe, classes, setClasse, addClasse}: ClasseSelectorProps) => {
  const error = !classes.length;
  return <>
  <Grid item sm={2}>
    <FormControl fullWidth error={error}>
      <InputLabel id="demo-simple-select-label">Classe</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={classe}
        label="Age"
        onChange={(e) => setClasse(e.target.value)}
      >
        {
          classes.map(classe => <MenuItem key={classe} value={classe}>{classe}</MenuItem> )
        }
      </Select>
      {
        error && <FormHelperText>Cliquez sur le bouton &quot;+&quot; pour ajouter une classe</FormHelperText>
      }
    </FormControl>
  </Grid>
  <Grid item sm={10}>
    <AddClasseButton addClasse={addClasse}/>
  </Grid>
</>
};

export default ClasseSelector;
