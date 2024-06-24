import { Formik } from "formik";
import CustomInputComp from "../CustomInputComp";
import CustomButton from "../button";
// import { useVerifyQuery } from "../../RTK/verifyNumber";
// import { useState } from "react";

interface IAuthCartComp {
    setIsLogedIn: (arg: string) => void
    setActiveField: (arg: boolean) => void
}
export default function AuthCartComp({ setIsLogedIn, setActiveField }: IAuthCartComp) {
    // const [isSkip, setIsSkip] = useState(true);
    // const [number, setNumber] = useState(0);

    // const { data } = useVerifyQuery(number, { skip: isSkip });

    return (
        <Formik
        initialValues={{ number: '' }}
            onSubmit={({ number }, { resetForm }) => {
                // setNumber(number);
                // setIsSkip(false);
            setIsLogedIn(number);
            resetForm();
        }}
        validate={(values) => setActiveField(!values.number)}
        >
        {({ values, handleSubmit, handleChange, handleBlur, touched, errors }) => (
            <form style={{ display: 'flex', gap: '20px'}}>     
                <CustomInputComp
                id='number'
                name='number'
                type='number'
                values={values.number}
                handleChange={handleChange}
                handleBlur={handleBlur}
                touched={touched}
                errors={errors}
                placeholder="Your phone number" />
                        
                {errors.number && <div id="number">{errors.number}</div>}
                <CustomButton color="primary" text="verificate" height='54px' onClick={handleSubmit} isActive={String(values.number).length <= 9}></CustomButton>
            </form>
        )}
        </Formik>
    )
}