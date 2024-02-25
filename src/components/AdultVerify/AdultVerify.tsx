import { Backdrop, Box, Typography } from "@mui/material";
import CustomButton from "../button";
import Logo from "../logo";

interface AdultVerify {
  isOpen: boolean;
  handleChangeModalShow: (type: boolean) => void;
}

export default function AdultVerify({
  isOpen,
  handleChangeModalShow,
}: AdultVerify) {
  return (
    <Backdrop
      open={isOpen}
      sx={{
        backdropFilter: "blur(15px)",
        inset: 0,
        textAlign: "center",
        zIndex: 10000
      }}
    >
      <Box
        sx={{
          backgroundColor: "#F5EBE2",
          width: "60%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          borderRadius: "97px",
          paddingTop: "40px",
          paddingBottom: "60px",
          rowGap: "60px",
        }}
      >
        <Logo />

        <Box>
          <Typography variant="h3" sx={{
            marginBottom: "30px"
          }}>
            Verify your age
          </Typography>

          <Typography sx={{
            letterSpacing: '0.2px',
            lineHeight: "44%"
          }} variant="h1">Are you 18?</Typography>
        </Box>

        <Box sx={{ display: "flex", columnGap: "16px" }}>
          <CustomButton
            text="YES"
            onClick={() => handleChangeModalShow(false)}
            color="primary"
            width="128px"
            type="button"
            height="62px"
          ></CustomButton>

          <CustomButton
            text="NO"
            onClick={() => alert("Go out")}
            color="secondary"
            width="128px"
            type="button"
            height="62px"
          ></CustomButton>
        </Box>
      </Box>
    </Backdrop>
  );
}