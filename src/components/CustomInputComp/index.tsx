import { TextField } from "@mui/material";
import { inputProps, labelProps, resetStyle } from "./styles";
import CustomInput from "./type";

export default function CustomInputComp({
    children,
    id,
    name,
    type,
    border,
    values,
    handleChange,
    handleBlur,
    touched,
    errors,
    placeholder,
    required = true
}: CustomInput) {

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
            error={touched.name && Boolean(errors.name)}
            helperText={touched.name && errors.name}
            placeholder={placeholder}
            required={required}
            variant="standard"
            inputProps={inputProps}
            InputLabelProps={labelProps}
        />
    )
}