import { useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { info } from "../../theme/palette";

import background from "../../assets/contacts/contacts-bg.jpeg";

function ContactsHero() {
  const [loaded, setLoaded] = useState(false);

  const handleLoad = () => {
    setLoaded(true);
  };

  return (
    <>
      <img
        src={background}
        alt=""
        onLoad={handleLoad}
        style={{ display: "none" }}
      />
      {loaded ? (
        <Box
          sx={{
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "810px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "81px",
            boxShadow: `${loaded ? "inset 0 0 0 2000px #00000080" : ""}`,
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
      ) : null}
    </>
  );
}

export default ContactsHero;
