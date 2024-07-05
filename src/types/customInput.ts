import { ChangeEvent, FocusEvent } from "react";

export default interface ICustomInput {
    children?: string;
    id: string;
    name: string;
    type: string;
    values: string;
    border?: string;
    // values: {[key: string]: string};
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
    handleBlur: (e: FocusEvent<HTMLInputElement>) => void;
    touched: {[key: string]: boolean | undefined};
    errors: { [key: string]: string | undefined };
    placeholder: string;
    required?: boolean;
    multiline?: boolean;
    rows?: number;
    inActive?: boolean;
}