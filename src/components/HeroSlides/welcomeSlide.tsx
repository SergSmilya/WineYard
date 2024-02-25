import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { useTheme } from "@mui/material/styles";
import useProgressiveImage from "../../hooks/useProgressiveImage"; 
import welcomeBackground from "../../assets/welcomeBackground.jpeg";
import CustomButton from "../button";
import RouterLink from "../../routes/routerLink";
import { paths } from "../../config/path";

function WelcomeSlide() {
  const theme = useTheme();
  const loaded = useProgressiveImage(welcomeBackground); // використання хука useProgressiveImage для лінивого завантаження фону

  return (
    <Box
      sx={{
        boxShadow: "inset 0 0 0 2000px #00000080",
        borderRadius: "0px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "center",
        gap: "163px",
        height: "810px",
        paddingTop: "132px",
        backgroundImage: `url(${loaded || welcomeBackground})`, 
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Stack sx={{
        gap: "31px",
        textAlign: "center",
        maxWidth: "570px",
        color: theme.palette.info.main
      }}>
        <Typography variant="h5">
          Online wine store
        </Typography>
        <Typography variant="h1">
          WELCOME TO WINEYARD!
        </Typography>
        <Typography variant="h3">
          Taste the World: Discover <br /> Europe's Vineyards at Your Door
        </Typography>
      </Stack>
      <RouterLink to={paths.CATALOG} style={{ textDecoration: "none" }}>
        <CustomButton
          color="primary"
          text="Browse Wines"
          width="272px"
          height="62px"
        />
      </RouterLink>
    </Box>
  );
}

export default WelcomeSlide;
