import { TextField } from "@mui/material";
import { inputProps, labelProps, resetStyle } from "./styles";
import ICustomInput from "../../types/customInput";

export default function CustomInputComp({
    children,
    id,
    name,
    type,
    values,
    handleChange,
    handleBlur,
    touched,
    errors,
    placeholder,
    required = true,
    multiline,
    rows,
    inActive = false,
}: ICustomInput) {
    return (
        <TextField
            sx={resetStyle}
            label={children}
            fullWidth
            id={id}
            name={name}
            type={type}
            value={values}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched[name] && Boolean(errors[name])}
            helperText={touched[name] && errors[name]}
            placeholder={placeholder}
            required={required}
            variant="standard"
            inputProps={inputProps}
            InputLabelProps={labelProps}
            multiline={multiline}
            rows={rows}
            disabled={inActive}
        />
    )
}