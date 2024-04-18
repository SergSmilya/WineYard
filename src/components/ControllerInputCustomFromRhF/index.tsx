import { TextField } from "@mui/material"
import { Controller, FieldValues } from "react-hook-form"
// style
import { inputProps, resetStyle } from "../CustomInputComp/styles";
import { useState } from "react";
// type
interface ControllerInputFromRhF extends FieldValues {
    name: string;
    placeholder: string;
}

export default function ControllerInputCustomFromRhF({ control, name, placeholder }: ControllerInputFromRhF) {
    const [activeInput, setActiveInput] = useState(true);

    return (
        <Controller
            control={control}
            // rules={
            //     {
            //         required: true
            //     }
            // }
            name={name}
            render={(data) => {
                if (Object.keys(data.formState.dirtyFields).length !== 0 && Object.keys(data.formState.dirtyFields)[0] !== name) {
                    setActiveInput(false)
                }
                return <TextField sx={resetStyle}
                    fullWidth
                    placeholder={placeholder}
                    inputProps={inputProps}
                    variant="standard"
                    {...data.field} />
            }}
            disabled={!activeInput}
        />
    )
}