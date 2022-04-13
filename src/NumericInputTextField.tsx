import React, {ChangeEvent} from "react";
import {TextField} from "@mui/material";
import {InputProps as StandardInputProps} from "@mui/material/Input/Input";
import {TextFieldProps} from "@mui/material/TextField/TextField";

type NumericInputTextFieldType = TextFieldProps & {
    label: string,
    value: number|undefined,
    onChangeValue: (value: number) => void,
    InputProps?: Partial<StandardInputProps>,
  };

const NumericInputTextField = ({label, value, onChangeValue, InputProps, ...props}: NumericInputTextFieldType) => {
  return <TextField
    label={label}
    type="number"
    value={value}
    onChange={(e: ChangeEvent<HTMLInputElement>) => {onChangeValue(e.target.valueAsNumber)}}
    InputProps={{
      inputMode: 'numeric',
      inputProps: {
        step: 0.1
      },
      ...InputProps
    }}
    {...props}
  />
};

export default NumericInputTextField;
