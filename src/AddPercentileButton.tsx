import {AddCircle} from "@mui/icons-material";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  InputAdornment
} from "@mui/material";
import React, {useState} from "react";
import NumericInputTextField from "./NumericInputTextField";


interface AddPercentileButtonProps {
  addPercentileColumn: (centileValue: number) => void
}

const AddPercentileButton = ({addPercentileColumn}: AddPercentileButtonProps) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<number>(0)

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const addPercentile = () => {
    setOpen(false);
    if (value) {
      addPercentileColumn(value);
      setValue(0)
    }
  }

  return <>
    <IconButton onClick={handleClickOpen}>
      <AddCircle/>
    </IconButton>
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Ajout d&apos;une limite de centile</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Pour ajouter une limite de centile, merci de saisir ci-dessous la valeur
        </DialogContentText>
        <NumericInputTextField
          label="limite de centile"
          value={value}
          onChangeValue={setValue}
          margin="dense"
          fullWidth
          variant="standard"
          InputProps={{
            startAdornment: <InputAdornment position="start">P</InputAdornment>,
          }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Annuler</Button>
        <Button onClick={addPercentile}>Valider</Button>
      </DialogActions>
    </Dialog>
  </>
}

export default AddPercentileButton;
