import { Box, Stack, Typography } from "@mui/material";
import { info, success } from "../../../theme/palette";

interface ListItemsProps {
  icon: string;
  name: string;
  text: string;
}

function BenefitsListItem({ icon, name, text }: ListItemsProps) {
  return (
    <Box sx={{ textAlign: "center" }}>
      <Stack
        sx={{
          width: "60px",
          height: "70px",
          borderRadius: "40px 40px 0 0",
          backgroundColor: info.main,
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
        sx={{ color: success.main, marginBottom: "8px" }}
      >
        {name}
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{ color: success.light }}
      >
        {text}
      </Typography>
    </Box>
  );
}

export default BenefitsListItem;
