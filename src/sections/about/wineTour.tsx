import { Box, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import wineStand from "../../assets/about/wine-stand.jpg";

interface ListItemProp {
  count: string;
  text: string;
}

function WineTour() {
  const theme = useTheme();

  const colors = {
    red: theme.palette.primary.main,
    green: theme.palette.secondary.light,
    dark: theme.palette.success.main,
  };

  const ListItem = ({ count, text }: ListItemProp) => (
    <Box sx={{ width: "264px" }}>
      <Typography
        variant="h2"
        sx={{
          fontSize: "48px",
          lineHeight: "72px",
          color: colors.red,
          marginBottom: "5px",
        }}
      >
        {count}
      </Typography>
      <Typography
        variant="h5"
        sx={{ fontSize: "22px", lineHeight: "28px", color: colors.dark }}
      >
        {text}
      </Typography>
    </Box>
  );

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: "96px",
        marginTop: "60px",
      }}
    >
      <Stack sx={{ maxWidth: "576px", maxHeight: "662px" }}>
        <img src={wineStand} alt="Wine stand" />
      </Stack>
      <Stack sx={{ maxWidth: "576px" }}>
        <Typography
          variant="h5"
          sx={{ color: colors.red, marginBottom: "5px" }}
        >
          We invite you to explore the world of wine with us
        </Typography>
        <Typography
          variant="h4"
          sx={{ lineHeight: "60px", color: colors.green, marginBottom: "50px" }}
        >
          Bringing Europe's Wines to Your Doorstep
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            columnGap: "32px",
            rowGap: "48px",
          }}
        >
          <ListItem count="5K+" text="happy returning customers" />
          <ListItem count="9K+" text="monthly visitors" />
          <ListItem count="48" text="countries presence (the whole Europe)" />
          <ListItem count="55" text="warehouses throughout Europe" />
        </Box>
      </Stack>
    </Box>
  );
}

export default WineTour;
