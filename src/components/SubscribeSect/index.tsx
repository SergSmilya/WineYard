import { Box, Container, Typography } from "@mui/material";
import FormSubscribe from "../FormSubscribe";

export default function SubscribeSect() {
  return (
    <Box
      sx={{
        padding: {xs: "50px 0 70px", lg: "100px 0"},
      }}
    >
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", lg: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "center", lg: "end" },
          }}
        >
          <Box
            sx={{
              maxWidth: "550px",
            }}
          >
            <Typography
              sx={{
                lineHeight: "59.4%",
                color: "#101828",
                marginBottom: "16px",
              }}
              variant="h4"
            >
              Let’s be friends!
            </Typography>

            <Typography
              sx={{
                maxWidth: { xs: "278px", lg: "390px" },
                fontFamily: "Epilogue, sans-serif",
                color: "#475467",
                fontSize: { xs: "14px", lg: "20px" },
                lineHeight: "150%",
                fontWeight: "500",
              }}
            >
              Subscribe to our newsletters and get 10% discount on first three
              orders
            </Typography>
          </Box>

          <Box
            sx={{
              flexBasis: "50%",
              marginTop: { xs: "30px" },
            }}
          >
            <FormSubscribe />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
