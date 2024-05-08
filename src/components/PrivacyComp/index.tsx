import { Box, Typography } from "@mui/material";
import { success } from "../../theme/palette";
import { paths } from "../../config/path";
import { Link } from 'react-router-dom';

export default function PrivacyComp() {

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        columnGap: "60px",
      }}
    >
      <Link to={paths.PRIVACYPOLICY} target="_blank" style={{textDecoration: 'none'}}>
        <Typography
          variant="h5"
          sx={{ fontWeight: "500" }}
          color={success.dark}
        >
          Privacy &#38; Policy
          </Typography>
      </Link>
      <Link to={paths.TERMSCONDITION} target="_blank" style={{textDecoration: 'none'}}>
        <Typography
          variant="h5"
          sx={{ fontWeight: "500" }}
          color={success.dark}
        >
          Terms &#38; Condition
        </Typography>
      </Link>
    </Box>
  );
}
