import {Button, Grid} from "@mui/material";
import React, {ChangeEvent, Dispatch, SetStateAction} from "react";
import {uncompress} from "./FileImportExport";
import {Test} from "./Types";

type FileSelectorType = {
  setFileName: (fileName: string) => void,
  setContent: Dispatch<SetStateAction<Test | undefined>>
};

const FileSelector = ({setFileName, setContent}: FileSelectorType) => {

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const [file] = (e.target as HTMLInputElement).files || [];
    if (!file) return;
    const reader = new FileReader();
    reader.readAsArrayBuffer(file);
    reader.onload = async () => {
      //console.log(reader.result)
      setFileName(file.name);
      const {result} = reader;
      const fileContent = new Uint8Array(result as ArrayBuffer);
      // console.log({fileContent})
      const {data} = await uncompress(fileContent);
      setContent(data);
    };
    reader.onerror = () => {
      console.log('file error', reader.error)
    }
  };

  return <Grid item sm={12}>
    <Button
      variant="contained"
      component="label"
    >
      Upload File
      <input
        type="file"
        onChange={handleFileChange}
        hidden
      />
    </Button>
  </Grid>;
};

export default FileSelector;
