import { Formik } from "formik";
import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import CustomInputComp from "../CustomInputComp";
import CustomButton from "../button";
import { useVerifyQuery } from "../../RTK/verifyNumber";
import { useDispatch } from "react-redux";
import { addData } from "../../store/authSlice";

interface IAuthCartComp {
    setActiveField: (arg: boolean) => void
    setUserName: (arg: string) => void
}
export default function AuthCartComp({ setActiveField, setUserName }: IAuthCartComp) {
    const [skip, setScip] = useState(true);
    const [number, setNumber] = useState<number | string>(0);
    const dispatch = useDispatch();

    const { data, error } = useVerifyQuery(number, { skip });
    
    useEffect(() => {
        if (data) {
            dispatch(addData(data));
            setUserName(String(number));
        }
    }, [data, dispatch, number, setUserName])

    if (error) {
        return (<Typography>Reload Page, please</Typography>)
    }
    
    return (
        <Formik
        initialValues={{ number: '' }}
            onSubmit={({ number }, { resetForm }) => {
            setNumber(number);
            setScip(false);
            resetForm();
        }}
        validate={(values) => setActiveField(!values.number)}
        >
        {({ values, handleSubmit, handleChange, handleBlur, touched, errors }) => (
            <form>     
                <Box sx={{ display: 'flex', flexDirection: {xs: 'column', lg: 'row'}, gap: {xs: '32px', lg: '20px'} }}>
                    <CustomInputComp
                    id='number'
                    name='number'
                    type='number'
                    values={values.number}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    touched={touched}
                    errors={errors}
                    placeholder="Your phone number 380..." />
                            
                    {errors.number && <div id="number">{errors.number}</div>}
                    <CustomButton color="primary" text="verificate" height='54px' onClick={handleSubmit} isActive={String(values.number).length <= 9}></CustomButton>
                </Box>
            </form>
        )}
        </Formik>
    )
}