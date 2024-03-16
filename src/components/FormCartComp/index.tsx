import { Box } from "@mui/material";
import { useFormik } from "formik";
import CustomButton from "../button";
import CustomInputComp from "../CustomInputComp";
import validationSchema from "./schema";
import initialValues from "./initialValues";
import FormTitleComp from "../FormTitleComp";

export default function FormCartComp() {
  const formik = useFormik({
  initialValues, 
  validationSchema,
  
  onSubmit: (values, { resetForm }) => {
    console.log(values);
  resetForm();
  },
  });

  const { values, handleChange, handleBlur, handleSubmit, touched, errors } = formik;
  
  return (
    <Box sx={{
      display: 'grid',
      gridTemplateColumns: "repeat(2, 1fr)",
      gridTemplateRows: "repeat(4, auto)",
      rowGap: '20px',
      columnGap: '20px'
    }}>
      <Box sx={{
        gridColumn: 'span 2',
        marginBottom: '4px'
      }}>
        <FormTitleComp>Contact information</FormTitleComp>
      </Box>

       <CustomInputComp
              id='name'
              name='name'
              type='text'
              values={values.name}
              handleChange={handleChange}
              handleBlur={handleBlur}
              touched={touched}
              errors={errors}
              placeholder="Your name"
      >{'Name'}</CustomInputComp>   
      
      <CustomInputComp
              id='surName'
              name='surName'
              type='text'
              values={values.surName}
              handleChange={handleChange}
              handleBlur={handleBlur}
              touched={touched}
              errors={errors}
              placeholder="Your surname"
      >{'Surname'}</CustomInputComp>   
      
      <CustomInputComp
              id='email'
              name='email'
              type='email'
              values={values.email}
              handleChange={handleChange}
              handleBlur={handleBlur}
              touched={touched}
              errors={errors}
              placeholder="Your email"
      >{'Email'}</CustomInputComp>
      
      <CustomInputComp
              id='phone'
              name='phone'
              type='tel'
              values={values.phone}
              handleChange={handleChange}
              handleBlur={handleBlur}
              touched={touched}
              errors={errors}
              placeholder="Your phone number"
      >{'Phone number'}</CustomInputComp>
      
      <Box sx={{ gridColumn: 'span 2'}}>
        <CustomButton color="primary" width="195px" height="54px" text="SUBSCRIBE" onClick={handleSubmit} />
      </Box>
    </Box>
  )
}