import {Test} from "./Types";
import {Button, Grid} from "@mui/material";
import React from "react";
import {Download} from "@mui/icons-material";
import {compress} from "./FileImportExport";

type FileDownLoaderParams = { fileName: string, content: Test };
const FileDownLoader = ({ fileName, content}: FileDownLoaderParams) => {
  const downloadTxtFile = async () => {

    const data = await compress(JSON.stringify({...content, calculProvidesPc: true, calculProvidesET: true}), "TEST");

    const element = document.createElement("a");
    const file = new Blob([data], {
      type: "text/plain"
    });
    element.href = URL.createObjectURL(file);
    element.download = fileName;
    document.body.appendChild(element);
    element.click();
  };

  return <Grid item sm={12}>
    <Button
      variant="contained"
      component="label"
      startIcon={<Download/>}
      onClick={downloadTxtFile}
    >
      Télécharger
    </Button>
  </Grid>;
}

export default FileDownLoader;
