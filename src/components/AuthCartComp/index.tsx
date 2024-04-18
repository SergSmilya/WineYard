import { useForm } from "react-hook-form";
import { Box, Typography } from "@mui/material";
import { success } from "../../theme/palette";
// component
import FormTitleComp from "../FormTitleComp";
import ControllerInputCustomFromRhF from "../ControllerInputCustomFromRhF";
import CustomButton from "../button";
// type
type FormValues = {
    googleAuth: string
    email: string
}
// style
const commonStyles = {
    display: 'flex',
    gap: '25px'
}
const text = {
    fontSize: '14px',
    fontWeight: 300,
    lineHeight: '170%',
}

export default function AuthCartComp({ setIsLogedIn }: { setIsLogedIn: (arg: string) => void }) {

    const { handleSubmit, control, reset } = useForm<FormValues>({ defaultValues: { googleAuth: '', email: '' } });

    function onSubmit(data: FormValues) {
        Object.values(data).forEach(el => {
            if (el) setIsLogedIn(el)
        })
        reset()
    }

    return (
        <Box sx={{
            ...commonStyles,
            flexDirection: 'column',
        }}>
            <FormTitleComp>Log in</FormTitleComp>
            <form style={commonStyles}>
                <Box sx={{
                   ...commonStyles,
                    alignItems: 'center',
                }}>
                    <ControllerInputCustomFromRhF control={control} name='googleAuth' placeholder="Continue with Google" />
                    <Typography sx={text} color={success.dark}>or</Typography>
                    <ControllerInputCustomFromRhF control={control} name='email' placeholder="Your email" />
                </Box>

                <CustomButton color="primary" text="verificate" height='54px' onClick={handleSubmit(onSubmit)} />
            </form>
        </Box>
    )
}