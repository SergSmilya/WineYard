import { TextField } from "@mui/material"
import { Controller, FieldValues } from "react-hook-form"

interface ControllerInputFromRhF extends FieldValues {
    name: string;
}

export default function ControllerInputCustomFromRhF({ control, name }: ControllerInputFromRhF) {
    return (
        <Controller
            control={control}
            name={name}
            render={(data) => {
                return <TextField {...data.field}/>
            }}
        />
    )
}