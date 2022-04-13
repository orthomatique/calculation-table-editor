import {AddCircle} from "@mui/icons-material";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  TextField
} from "@mui/material";
import React, {ChangeEvent, useState} from "react";


interface AddClasseButtonProps {
  addClasse: (classe: string) => void
}

const AddClasseButton = ({addClasse}: AddClasseButtonProps) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<string>("")

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const addPercentile = () => {
    setOpen(false);
    if (value) {
      addClasse(value);
      setValue("")
    }
  }

  return <>
    <IconButton onClick={handleClickOpen}>
      <AddCircle/>
    </IconButton>
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Ajout d&apos;une classe</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Pour ajouter une classe, merci de saisir ci-dessous son libellé
        </DialogContentText>
        <TextField
          label="Nouvelle classe"
          value={value}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {setValue(e.target.value)}}
          margin="dense"
          fullWidth
          variant="standard"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Annuler</Button>
        <Button onClick={addPercentile}>Valider</Button>
      </DialogActions>
    </Dialog>
  </>
}

export default AddClasseButton;
