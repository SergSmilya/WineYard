import { Box, FormControlLabel, Radio, RadioGroup, TextareaAutosize, Typography } from "@mui/material";
import { useFormik } from "formik";
import CustomButton from "../button";
import CustomInputComp from "../CustomInputComp";
import validationSchema from "./schema";
import initialValues from "./initialValues";
import FormTitleComp from "../FormTitleComp";
import { info, secondary, success } from "../../theme/palette";
import CustomIconComp from "../CustomIconComp";

import infoIcon from '../../assets/icons/information-variant-circle-outline.svg';

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

      <Box sx={{
        gridColumn: 'span 2',
        display: 'grid',
        gridTemplateColumns: "repeat(2, 1fr)",
      gridTemplateRows: "repeat(4, auto)",
        rowGap: '20px',
        columnGap: '20px'
      }}>
        <Box sx={{
          gridColumn: 'span 2',
        }}>
          <FormTitleComp>Delivery information</FormTitleComp>
        </Box>

        <RadioGroup
          sx={{
            justifyContent: 'space-between',
            gridColumn: 'span 2',
            '.MuiRadio-root': {
              width: '40px',
              height: '40px',
              color: success.dark,
              padding: '8px',
            },
            '.MuiRadio-colorSecondary': {
              color: success.dark
            },
            '.MuiFormControlLabel-root': {
              margin: 0,
              gap: '4px',
            },
            '.MuiFormControlLabel-label': {
              letterSpacing: '0.48px',
              lineHeight: 'normal'
            }
          }}
        row
        aria-labelledby="delivery-radio-buttons-group"
          name="delivery-radio-buttons-group"
          defaultValue='fedex'
      >
          <FormControlLabel sx={{
            '.MuiFormControlLabel-root': {
              margin: 0
            }
          }} value="dhl" control={<Radio color="secondary"/>} label="DHL" />
          <FormControlLabel value="fedex" control={<Radio color="secondary"/>} label="FedEx" />
        <FormControlLabel value="messtexpress" control={<Radio color="secondary"/>} label="MeestExpress" />
        </RadioGroup>
        
            <CustomInputComp
              id='country'
              name='country'
              type='text'
              values={values.country}
              handleChange={handleChange}
              handleBlur={handleBlur}
              touched={touched}
              errors={errors}
              placeholder="Choose country"
      >{'Country'}</CustomInputComp>
            <CustomInputComp
              id='state'
              name='state'
              type='text'
              values={values.state}
              handleChange={handleChange}
              handleBlur={handleBlur}
              touched={touched}
              errors={errors}
              placeholder="Write state"
        >{'State'}</CustomInputComp>
        <CustomInputComp
              id='city'
              name='city'
              type='text'
              values={values.city}
              handleChange={handleChange}
              handleBlur={handleBlur}
              touched={touched}
              errors={errors}
              placeholder="Write city"
      >{'City'}</CustomInputComp>
            <CustomInputComp
              id='postcode'
              name='postcode'
              type='text'
              values={values.postcode}
              handleChange={handleChange}
              handleBlur={handleBlur}
              touched={touched}
              errors={errors}
              placeholder="Write postcode"
      >{'Postcode'}</CustomInputComp>

      </Box>

      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        gridColumn: 'span 2',
        borderRadius: '4px',
      }}>

        <FormTitleComp>Payment</FormTitleComp>

        <RadioGroup
          sx={{
            justifyContent: 'space-between',
            gridColumn: 'span 2',
            '.MuiRadio-root': {
              width: '40px',
              height: '40px',
              color: success.dark,
              padding: '8px',
            },
            '.MuiRadio-colorSecondary': {
              color: success.dark
            },
            '.MuiFormControlLabel-root': {
              margin: 0,
              gap: '4px',
            },
            '.MuiFormControlLabel-label': {
              letterSpacing: '0.48px',
              lineHeight: 'normal'
            }
          }}
        row
        aria-labelledby="payment-radio-buttons-group"
          name="payment-radio-buttons-group"
          defaultValue='account'
      >
          <FormControlLabel value="account" control={<Radio color="secondary"/>} label="Settlement account number" />
          <FormControlLabel value="order" control={<Radio color="secondary"/>} label="When receiving the order" />
        </RadioGroup>

        <Box sx={{
          padding: '18px 34px 42px 12px',
          backgroundColor: info.dark,
        }}>
          <Box sx={{
            display: 'flex',
            columnGap: '12px',
          }}>
            <Box sx={{
              width: '24px',
              height: '24px'
            }}>
              <CustomIconComp>{infoIcon}</CustomIconComp>
            </Box>
            <Typography sx={{
              maxWidth: '542px',
            fontWeight: '500',
            letterSpacing: '0.48px',
            lineHeight: 'normal',
          }} color={success.dark}>Our manager will contact you after placing the order and will provide a settlement account number for
          payment on your email.</Typography>
          </Box>
        </Box>
      </Box>

      <Box sx={{
        gridColumn: 'span 2',
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
      }}>
        <FormTitleComp>Comment section</FormTitleComp>

        <TextareaAutosize style={{
          padding: '18px 12px',
          width: '100%',
          fontSize: '16px',
          letterSpacing: '0.48px',
          lineHeight: 'normal',
          color: secondary. textStyle
        }} minRows={8} placeholder="Please send no later than Wednesday in eco package"/>

      </Box>
      
      <Box sx={{ gridColumn: 'span 2', visibility: 'hidden' }}>
        <CustomButton color="primary" width="195px" height="54px" text="PLACE ORDER" onClick={handleSubmit} />
      </Box>
    </Box>
  )
}