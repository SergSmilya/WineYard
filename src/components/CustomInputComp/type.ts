import { ChangeEvent, FocusEvent } from "react";

export default interface CustomInput {
    children: string;
    id: string;
    name: string;
    type: string;
    values: string;
    border?: string;
    // values: {[key: string]: string};
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
    handleBlur: (e: FocusEvent<HTMLInputElement>) => void;
    touched: {[key: string]: boolean};
    errors: { [key: string]: string };
    placeholder: string;
    required?: boolean;
    multiline?: boolean;
    rows?: number;
}