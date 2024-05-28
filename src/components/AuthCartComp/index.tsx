import { useForm } from "react-hook-form";
import { useState } from "react";
// component
import ControllerInputCustomFromRhF from "../ControllerInputCustomFromRhF";
import CustomButton from "../button";
// type
type FormValues = {
    email: string
}
interface IAuthCartComp {
    setIsLogedIn: (arg: string) => void
    setActiveField: (arg: boolean) => void
}
// style
const commonStyles = {
    display: 'flex',
    gap: '25px'
}

export default function AuthCartComp({ setIsLogedIn, setActiveField }: IAuthCartComp) {
    const [isActiveButton, setIsActiveButton] = useState(false);

    const { handleSubmit, control, reset, watch } = useForm<FormValues>({ defaultValues: { email: '' } });
    watch(({ email }) => {
        if (email) {
            setActiveField(false);
        } else {
            setActiveField(true);
        }
        if (email.length > 3) {
            setIsActiveButton(true);
            return;
        }
        setIsActiveButton(false);
    });

    function onSubmit(data: FormValues) {
        Object.values(data).forEach(el => {
            if (el) setIsLogedIn(el)
        })
        reset()
    }

    return (
        <>
            <form style={commonStyles}>
                <ControllerInputCustomFromRhF control={control} name='email' placeholder="Your email" />
                <CustomButton color="primary" text="verificate" height='54px' onClick={handleSubmit(onSubmit)} isActive={!isActiveButton} />
            </form>
        </>
    )
}