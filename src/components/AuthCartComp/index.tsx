import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
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
    const watchEmailField = watch('email');

    useEffect(() => {
        if (watchEmailField) {
            setActiveField(false);
        } else {
            setActiveField(true);
        }
        if (watchEmailField.length > 3) {
            setIsActiveButton(true);
            return;
        }
        setIsActiveButton(false);
    }, [setActiveField, watchEmailField])

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