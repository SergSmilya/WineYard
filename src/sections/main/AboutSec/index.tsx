import { Box, Container, Typography } from "@mui/material";
import CustomButton from "../../../components/button";
import bgdImg from "../../../assets/background_images/bgd_about_sect.jpg";
import { paths } from "../../../config/path";
import RouterLink from "../../../routes/routerLink";

export default function AboutSec() {
  return (
    <Box sx={{ padding: "48px 0", position: "relative" }}>
      <Box
        sx={{
          position: "absolute",
          zIndex: -1,
          inset: 0,
          background: `linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%), url(${bgdImg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></Box>

      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "70px",
            alignItems: "center",
            padding: "85px 38px",
          }}
        >
          <Box
            sx={{
              maxWidth: "1090px",
              display: "flex",
              gap: "30px",
              justifyContent: "space-between",
              color: "#F5EBE2",
            }}
          >
            <Typography
              sx={{
                textTransform: "capitalize",
              }}
              variant="h1"
            >
              About <span style={{ textTransform: "uppercase" }}>WINEYARD</span>
            </Typography>

            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: "700",
                lineHeight: "139%",
                letterSpacing: "0.2px",
                flex: "50%",
              }}
            >
              Find exceptional wines from across Europe, from Italy's sun-kissed
              vineyards to France's vibrant cellars. We deliver to your door,
              offer alcohol-free choices, and help you pair your wine with every
              dish.{" "}
            </Typography>
          </Box>
          <RouterLink to={paths.ABOUT}>
            <CustomButton
              color="primary"
              text="KHOW MORE"
              width="240px"
              height="62px"
            />
          </RouterLink>
        </Box>
      </Container>
    </Box>
  );
}
