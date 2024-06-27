import { Formik } from "formik";
import initialValues from "./initialValues";
import validationSchema from "./schema";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { Box, FormControlLabel, Radio, RadioGroup, TextareaAutosize, Typography } from "@mui/material";
import { info } from "../../theme/palette";
import FormTitleComp from "../FormTitleComp";
import CustomInputComp from "../CustomInputComp";
import CartOrderedDescriptionComp from "../CartOrderedDescriptionComp";
import CustomButton from "../button";
import InfoManagerInFormComp from "../InfoManagerInFormComp";
import { clearCart } from "../../store/cartOrderedSlice";
import { clearData } from "../../store/authSlice";
import { useNavigate } from "react-router-dom";
import { paths } from "../../config/path";
import { toast } from "react-toastify";
import { baseGridStyles, inputSideStyles, commonRadioButtonStyles, textAreaStyles } from "./styles";

export default function FormCartComp() {
  const result = useSelector((state: RootState) => state.cartOrdered); 
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        const order = {
          ...values,
          ordered: result
        }
        console.log(order);
        actions.resetForm();
        dispatch(clearCart());
        dispatch(clearData());
        navigate(paths.HOME);
        toast.success('Your order was sended');
      }}
      validationSchema={validationSchema}
      >
      {({ values, handleSubmit, handleChange, handleBlur, errors, touched }) => {
      return (
      <form style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gridAutoRows: 'auto' }}>
        {/* Inputs */}
        <Box sx={inputSideStyles}>
          <FormTitleComp>Contact information</FormTitleComp>
          {/* Name, sername, email, phone */}
          <Box sx={baseGridStyles}>
            {/* <Box sx={{ position: 'relative'}}> */}
            <CustomInputComp
            id='name'
            name='name'
            type='text'
            values={values.name}
            handleChange={handleChange}
            handleBlur={handleBlur}
            touched={touched}
            errors={touched && errors}
            placeholder="Your name">{'Name'}</CustomInputComp>
            {/* {errors.name && <Typography sx={positionErrorStyles} variant="h6" id="name">{errors.name}</Typography>}       */}
            {/* </Box> */}

            <CustomInputComp
            id='surName'
            name='surName'
            type='text'
            values={values.surName}
            handleChange={handleChange}
            handleBlur={handleBlur}
            touched={touched}
            errors={errors}
            placeholder="Your surname">{'Surname'}</CustomInputComp>

            <CustomInputComp
            id='email'
            name='email'
            type='email'
            values={values.email}
            handleChange={handleChange}
            handleBlur={handleBlur}
            touched={touched}
            errors={errors} 
            placeholder="Your email">{'Email'}</CustomInputComp>
            
            <CustomInputComp
            id='phone'
            name='phone'
            type='number'
            values={values.phone}
            handleChange={handleChange}
            handleBlur={handleBlur}
            touched={touched}
            errors={errors}
            placeholder="Your phone number 380...">{'Phone number'}</CustomInputComp>
          </Box>
          {/* Delivery information */}
          <FormTitleComp>Delivery information</FormTitleComp>
          <Box>
            <RadioGroup sx={{ display: 'flex', gap: '100px', ...commonRadioButtonStyles }}
              row
              aria-labelledby="delivery-radio-buttons-group"
                name="delivery"
                defaultValue= 'fedex'
                onChange={handleChange}
              >
              <FormControlLabel sx={{
                '.MuiFormControlLabel-root': {
                  margin: 0
                }
              }} value='dhl' name="delivery" control={<Radio color="secondary"/>} label="DHL" />
              <FormControlLabel value='fedex' name="delivery" control={<Radio color="secondary"/>} label="FedEx" />
              <FormControlLabel value='messtexpress' name="delivery" control={<Radio color="secondary"/>} label="MeestExpress" />
            </RadioGroup>  
          </Box>  
          {/* Country, state, city, postcode */}
          <Box sx={baseGridStyles}>
            <CustomInputComp
            id='country'
            name='country'
            type='text'
            values={values.country}
            handleChange={handleChange}
            handleBlur={handleBlur}
            touched={touched}
            errors={touched && errors}
            placeholder="Write country">{'Country'}</CustomInputComp>
            
            <CustomInputComp
            id='state'
            name='state'
            type='text'
            values={values.state}
            handleChange={handleChange}
            handleBlur={handleBlur}
            touched={touched}
            errors={errors}
            placeholder="Write state">{'State'}</CustomInputComp>

            <CustomInputComp
            id='city'
            name='city'
            type='text'
            values={values.city}
            handleChange={handleChange}
            handleBlur={handleBlur}
            touched={touched}
            errors={errors} 
            placeholder="Write city">{'City'}</CustomInputComp>
              
            <CustomInputComp
            id='postcode'
            name='postcode'
            type='number'
            values={values.postcode}
            handleChange={handleChange}
            handleBlur={handleBlur}
            touched={touched}
            errors={errors}
            placeholder="Write postcode">{'Postcode'}</CustomInputComp>
          </Box>
          {/* Payment */}
          <FormTitleComp>Payment</FormTitleComp>
          <Box>
            <RadioGroup sx={{ ...commonRadioButtonStyles }}
                row
                aria-labelledby="payment-radio-buttons-group"
                name="payment"
                defaultValue='account'
                onChange={handleChange}
              >
              <FormControlLabel name="payment" value="account" control={<Radio color="secondary"/>} label="Settlement account number" />
              <FormControlLabel name="payment" value="order" control={<Radio color="secondary"/>} label="When receiving the order" />
            </RadioGroup>  
          </Box>  
          {/* Manager */}
          <Box sx={{ padding: '18px 34px 42px 12px', backgroundColor: info.dark }}>
            <InfoManagerInFormComp />
          </Box>
          {/* Comment section */}
          <FormTitleComp>Comment section</FormTitleComp>
          <Box>
            <TextareaAutosize style={textAreaStyles}
              id='comment'
              name='comment'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.comment}  
              minRows={8} placeholder="Please send no later than Wednesday in eco package" />
          </Box>  
        </Box>
        {/* CartOrderedDescriptionComp */}
        <Box sx={{ paddingLeft: '66px' }}>
          {result.length ? <CartOrderedDescriptionComp /> : <Typography variant="h4">Cart is empty</Typography>}
          <CustomButton onClick={handleSubmit} color="primary" width="100%" height="54px" text="PLACE ORDER" isActive={!result.length} />
        </Box>  
      </form> )
      }}
    </Formik>
  )
}