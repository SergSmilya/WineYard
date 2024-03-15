import { TextField } from "@mui/material";
import { secondary, common, success } from "../../theme/palette";
import { ChangeEvent, FocusEvent } from "react";

interface CustomInput {
    children: string;
    id: string;
    name: string;
    type: string;
    values: {[key: string]: string;};
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
    handleBlur: (e: FocusEvent<HTMLInputElement>) => void;
    touched: {[key: string]: boolean};
    errors: { [key: string]: string };
    placeholder: string;
    required?: boolean;
}

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
    required = true
}: CustomInput) {

    const inputProps = {
        sx: {
            '.MuiInput-underline': {
                underline: true
            },
            padding: '16px',
            fontSize: '14px',
            fontWeight: 300,
            lineHeight: '170%',
            color: secondary.textStyle,
            fontFamily: 'Epilogue, sans-serif',
            backgroundColor: common.white
        }
    }

    const labelProps = {
        shrink: true,
        sx: {
            color: success.dark,
            marginBottom: '12px',
        }
    }
    
    return (
        <TextField
            sx={{
                '& .MuiInput-underline': {
                underline: 'true'
                }
            //     '& .MuiInputBase-root': {
            //         mt:'0'
            //     },
            //     '& .MuiInputBase-root::before': {
            //         display: 'none'
            //     },
            //     '& .MuiInputLabel-root': {
            //     position: 'static'
            // },
            }}
            
            label={children}
            fullWidth
            id={id}
            name={name}
            type={type}
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.name && Boolean(errors.name)}
            helperText={touched.name && errors.name}
            placeholder={placeholder}
            required={required}
            variant="standard"
            inputProps={inputProps}
            InputLabelProps={labelProps}
            margin="none"
        />
    )
}