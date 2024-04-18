import { Box, Link, Stack, Typography } from "@mui/material";

import phone from "../../assets/contacts/phone.svg";
import mail from "../../assets/contacts/mail.svg";
import telegram from "../../assets/contacts/telegram.svg";

import { InfoColors } from "../../types/InfoColors";

interface SocialNetworkItemProps {
  img: string;
  name: string;
  text: string;
}

function SocialNetwork({ dark, grey }: InfoColors) {
  const SocialNetworkItem = ({ img, name, text }: SocialNetworkItemProps) => (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "384px",
      }}
    >
      <Stack sx={{ marginBottom: "20px" }}>
        <img src={img} alt={name} />
      </Stack>
      <Typography variant="h3" sx={{ color: dark, marginBottom: "8px" }}>
        {name}
      </Typography>
      <Link
        href="#"
        sx={{
          textDecorationColor: grey,
          "&:hover": { textDecoration: "none", cursor: "pointer" },
        }}
      >
        <Typography variant="subtitle1" sx={{ color: grey }}>
          {text}
        </Typography>
      </Link>
    </Box>
  );

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: "60px 0",
      }}
    >
      <SocialNetworkItem img={phone} name="Phone" text="+(380) 95-584-883-9" />
      <SocialNetworkItem img={mail} name="Email" text="info@wineyard.com" />
      <SocialNetworkItem img={telegram} name="Telegram" text="@wineyard" />
    </Box>
  );
}

export default SocialNetwork;
