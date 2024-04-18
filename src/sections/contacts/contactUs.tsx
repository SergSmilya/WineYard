import React from "react";
import {
  Box,
  Checkbox,
  FormControlLabel,
  InputLabel,
  Link,
  Stack,
  TextareaAutosize,
  Typography,
} from "@mui/material";

import laptop from "../../assets/contacts/laptop.jpeg";
import { InfoColors } from "../../types/InfoColors";
import CustomInputComp from "../../components/CustomInputComp";
import { useFormik } from "formik";
import validationSchema from "../../components/FormCartComp/schema";
import initialValues from "../../components/FormCartComp/initialValues";
import checkboxIcon from "../../assets/icons/checkbox.svg";
import checkboxCheckedIcon from "../../assets/icons/checkbox-checked.svg";
import { useState } from "react";
import CustomButton from "../../components/button";

const inputBorder = "1px solid #D0D5DD";

function ContactUs({ black, green }: InfoColors) {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,

    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm();
    },
  });

  const { values, handleChange, handleBlur, handleSubmit, touched, errors } =
    formik;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: "96px",
        margin: "60px 0",
      }}
    >
      <Stack sx={{ width: "576px", height: "650px" }}>
        <img
          src={laptop}
          alt="Laptop"
          loading="lazy"
          style={{ height: "100%", objectFit: "cover" }}
        />
      </Stack>
      
      <Stack sx={{ maxWidth: "480px" }}>
        <Typography
          variant="h4"
          sx={{ color: green, marginBottom: "48px", lineHeight: "44px" }}
        >
          Contact us
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            marginBottom: "32px",
          }}
        >
          <Stack sx={{ display: "flex", flexDirection: "row", gap: "20px" }}>
            <CustomInputComp
              id="name"
              name="name"
              type="text"
              border={inputBorder}
              values={values.name}
              handleChange={handleChange}
              handleBlur={handleBlur}
              touched={touched}
              errors={errors}
              placeholder="Your name"
            >
              {"Name"}
            </CustomInputComp>

            <CustomInputComp
              id="surName"
              name="surName"
              type="text"
              border={inputBorder}
              values={values.surName}
              handleChange={handleChange}
              handleBlur={handleBlur}
              touched={touched}
              errors={errors}
              placeholder="Your surname"
            >
              {"Surname"}
            </CustomInputComp>
          </Stack>

          <CustomInputComp
            id="email"
            name="email"
            type="email"
            border={inputBorder}
            values={values.email}
            handleChange={handleChange}
            handleBlur={handleBlur}
            touched={touched}
            errors={errors}
            placeholder="Your email"
          >
            {"Email"}
          </CustomInputComp>

          <Stack>
            <InputLabel
              htmlFor="message-textarea"
              sx={{ color: black, marginBottom: "12px" }}
            >
              Message *
            </InputLabel>
            <TextareaAutosize
              style={{
                padding: "9px 15px",
                width: "100%",
                height: "174px",
                fontSize: "14px",
                lineHeight: "24px",
                color: black,
                border: inputBorder,
                borderRadius: "4px",
                marginBottom: "5px",
              }}
              id="message-textarea"
              aria-label="Message"
              required
              placeholder="Describe your request"
            />

            <FormControlLabel
              control={
                <Checkbox
                  checked={checked}
                  onChange={handleCheckboxChange}
                  icon={<img src={checkboxIcon} alt="" />}
                  checkedIcon={<img src={checkboxCheckedIcon} alt="" />}
                  required
                />
              }
              label={
                <Typography>
                  You agree to our friendly{" "}
                  <Link href="#" target="_blank" rel="noopener noreferrer">
                    privacy policy
                  </Link>
                  .
                </Typography>
              }
              sx={{
                ".css-10hyoxo-MuiStack-root": {
                  display: "flex",
                  flexDirection: "row",
                },
              }}
            />

          </Stack>
        </Box>

        <CustomButton
          color="primary"
          width="254px"
          height="54px"
          text="SEND MESSAGE"
          type="submit"
          onClick={handleSubmit}
        />

      </Stack>
    </Box>
  );
}

export default ContactUs;
