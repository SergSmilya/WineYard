import { Box } from "@mui/material";
import { useFormik } from "formik";
import * as yup from 'yup';
import CustomButton from "../button";
import CustomInputComp from "../CustomInputComp";

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Enter a valid email')
    .required('Email is required'),
});

export default function FormCartComp() {
    const formik = useFormik({
    initialValues: {
      email: '',
    },
    
    validationSchema: validationSchema,
    onSubmit: ({email}, {resetForm}) => {
      alert(email);
      resetForm();
    },
  });
  
    const { values, handleChange, handleBlur, handleSubmit, touched, errors } = formik;

  return (
    <Box sx={{display:'flex', justifyContent:'space-between', alignItems:'center', columnGap:'16px', marginBottom: '16px'}}>
          <CustomInputComp
                id='email'
                name='email'
                type='email'
                values={values}
                handleChange={handleChange}
                handleBlur={handleBlur}
                touched={touched}
              errors={errors}
              placeholder="email"
          >{'email'}</CustomInputComp>
      
      <CustomButton color="primary" width="195px" height="54px" text="SUBSCRIBE" onClick={handleSubmit} />
    </Box>
  )
}