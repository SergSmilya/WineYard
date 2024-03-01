import { useTheme } from "@mui/material/styles";
import { Box, Stack, Typography } from "@mui/material";

interface ListItemsProps {
  icon: string;
  name: string;
  text: string;
}

function BenefitsListItem({ icon, name, text }: ListItemsProps) {
  const theme = useTheme();

  return (
    <Box sx={{ textAlign: "center", minWidth: "350px" }}>
      <Stack
        sx={{
          width: "60px",
          height: "70px",
          borderRadius: "40px 40px 0 0",
          backgroundColor: theme.palette.info.main,
          margin: "0 auto",
          display: "flex",
          justifyContent: "center",
          marginBottom: "20px",
        }}
      >
        <img src={icon} alt="Benefit icon" />
      </Stack>
      <Typography
        variant="h3"
        sx={{ color: theme.palette.success.main, marginBottom: "8px" }}
      >
        {name}
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{ color: theme.palette.success.light }}
      >
        {text}
      </Typography>
    </Box>
  );
}

export default BenefitsListItem;
