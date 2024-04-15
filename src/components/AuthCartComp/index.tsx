import { TextField } from "@mui/material";
import { Controller, useForm } from "react-hook-form";

export default function AuthCartComp() {

    const { handleSubmit, control } = useForm({ defaultValues: { email: '' } });
    
    return (
        <form onSubmit={handleSubmit((data)=> console.log(data))}>

            <Controller
                control={control}
                name="email"
                render={({ field }) => {
                    console.log(field);
                    return <TextField {...field}/>
                }}
            />

            <input type="submit" value="Submit" />
        </form>
    )
}