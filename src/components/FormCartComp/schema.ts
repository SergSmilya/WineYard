import * as yup from 'yup';

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .min(1)
    .required('Enter your Name'),
  surName: yup
    .string()
    .min(1)
    .required('Enter your Surname'),
  email: yup
    .string()
    .email('Enter a valid email')
    .required('Email is required'),
  phone: yup
    .string()
    .min(7)
    .required('Enter your Phone Number'),
  country: yup
    .string()
    .min(1)
    .required('Choose country'),
  state: yup
    .string()
    .min(1)
    .required('Write state'),
  city: yup
    .string()
    .min(1)
    .required('Write city'),
  postcode: yup
    .string()
    .min(1)
    .required('Write postcode'),
});

export default validationSchema;