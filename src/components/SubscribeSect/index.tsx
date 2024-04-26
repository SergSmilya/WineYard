import { Box, Container, Link, Typography } from "@mui/material";
import FormSubscribe from "../FormSubscribe";
import { paths } from "../../config/path";

export default function SubscribeSect() {
  return (
    <Box
      sx={{
        padding: "100px 0",
      }}
    >
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "end",
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
                maxWidth: "390px",
                fontFamily: "Epilogue, sans-serif",
                color: "#475467",
                fontSize: "20px",
                lineHeight: "150%",
              }}
              variant="h4"
            >
              Subscribe to our newsletters and get 10% discount on first three
              orders
            </Typography>
          </Box>

          <Box
            sx={{
              flexBasis: "50%",
            }}
          >
            <FormSubscribe />
            <Typography
              sx={{
                color: "#475467",
                fontSize: "14px",
                lineHeight: "142.86%",
              }}
              variant="h6"
            >
              We care about your data in our{" "}
              <Link
                href={paths.PRIVACYPOLICY}
                target="_blank" 
                sx={{
                  color: "#475467",
                }}
              >
                privacy policy
              </Link>
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
