import { useFormik } from "formik";
import * as yup from "yup";
import { Box, TextField } from "@mui/material";
import CustomButton from "../button";

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
});

export default function FormSubscribe() {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: validationSchema,
    onSubmit: ({ email }, { resetForm }) => {
      alert(email);
      resetForm();
    },
  });

  const inputProps = {
    style: {
      padding: "12px",
      fontSize: "20px",
      fontWeight: 500,
      lineHeight: "120%",
      color: "#667085",
      fontFamily: "Epilogue, sans-serif",
    },
  };

  const { values, handleChange, handleBlur, handleSubmit, touched, errors } =
    formik;

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        columnGap: "16px",
        marginBottom: "16px",
      }}
      className="subscribe-sec"
    >
      <TextField
        inputProps={inputProps}
        fullWidth
        id="email"
        name="email"
        type="email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.email && Boolean(errors.email)}
        helperText={touched.email && errors.email}
        placeholder="Enter your email"
        required
      />

      <CustomButton
        color="primary"
        width="195px"
        height="54px"
        text="SUBSCRIBE"
        onClick={handleSubmit}
      />
    </Box>
  );
}
