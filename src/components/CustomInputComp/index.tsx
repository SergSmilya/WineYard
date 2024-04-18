import { TextField } from "@mui/material";
import { success } from "../../theme/palette";
import { inputProps, labelProps } from "./styles";
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
            sx={{
                '.MuiInputBase-root': {
                    margin: 0,
                    border: border || null,
                    borderRadius: border ? "4px" : null
                },
                '.MuiInputBase-root::before, .MuiInputBase-root::after': {
                    display: 'none'
                },
                '.MuiInput-input::placeholder': {
                    color: success.dark,
                },
                '.Mui-focused': {
                    color: success.dark,
                },
                
            }}
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