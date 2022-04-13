import {FormControl, Grid, InputLabel, MenuItem, Select} from "@mui/material";
import AddClasseButton from "./AddClasseButton";

type ClasseSelectorProps = {
  classes: string[],
  classe: string,
  setClasse: React.Dispatch<React.SetStateAction<string>>,
  addClasse: (newClasse: string) => void
};

const ClasseSelector = ({classe, classes, setClasse, addClasse}: ClasseSelectorProps) => {
  return <>
  <Grid item sm={2}>
    <FormControl fullWidth>
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
    </FormControl>
  </Grid>
  <Grid item sm={10}>
    <AddClasseButton addClasse={addClasse}/>
  </Grid>
</>
};

export default ClasseSelector;
