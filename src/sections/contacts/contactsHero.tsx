import { Box, Stack, Typography } from "@mui/material";
import { info } from "../../theme/palette";

import background from "../../assets/contacts/contacts-bg.jpeg";

function ContactsHero() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "810px",
        background: `url(${background}), linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.5)",
        zIndex: -1,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "81px",
          height: "100%",
        }}
      >
        <Stack
          sx={{
            maxWidth: "599px",
            textAlign: "center",
            color: info.main,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "68px",
            padding: "0 16px",
          }}
        >
          <Typography variant="h1" sx={{ textTransform: "uppercase" }}>
            Get in touch!
          </Typography>
          <Typography
            variant="h3"
            sx={{
              lineHeight: "25px",
              maxWidth: "533px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            We are available every day from 10:00 a.m. to 8:00 p.m (GPT +3).
            <br />
            <br />
            <Box sx={{ maxWidth: "470px" }}>
              We'll respond as soon as we can within 24 hours
            </Box>
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
}

export default ContactsHero;
