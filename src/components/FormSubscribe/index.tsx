import { Box, Link, TextField, Typography } from "@mui/material";
import { success } from "../../theme/palette";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import CustomButton from "../button";
import { paths } from "../../config/path";
import RouterLink from "../../routes/routerLink";

const validationSchema = yup.object().shape({
  email: yup
    .string().matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, {message: "Enter a valid email", excludeEmptyString: true})
    .email("Enter a valid email")
    .required("Email is required"),
});

export default function FormSubscribe() {
  const [isActiveButton, setIsActiveButton] = useState(true);
  
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema,
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

  const { values, handleChange, handleBlur, handleSubmit, touched, errors, isValid } = formik;

  useEffect(() => {
    if (isValid && values.email && !errors.email) {
      setIsActiveButton(false);
      return;
    }
      setIsActiveButton(true);
  }, [errors.email, isValid, values.email])


  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", lg: "row" },
        justifyContent: "space-between",
        alignItems: {xs: "flex-start", lg: "start"},
        columnGap: "16px",
        marginBottom: "16px",
      }}
      className="subscribe-sec"
    >
      <Box sx={{ width: '100%'}}>
        <TextField sx={{ marginBottom: '8px'}}
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

        <Typography
          sx={{
            fontSize: "14px",
            lineHeight: "142.86%",
            marginBottom: {xs: "16px", lg: 'none' }
          }}
          variant="h6"
          color={success.light}
          >
          We care about your data in our{" "}
          <Link
            component={RouterLink}
            to={paths.PRIVACYPOLICY}
            target="_blank"
            color={success.light}
          >
            privacy &#38; policy
          </Link>
        </Typography>
      </Box>

      <CustomButton
        color="primary"
        width="195px"
        height="54px"
        text="SUBSCRIBE"
        onClick={handleSubmit}
        isActive={isActiveButton}
      />
    </Box>
  );
}
