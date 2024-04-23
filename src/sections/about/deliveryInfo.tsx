import { Box, Stack, Typography } from "@mui/material";
import { secondary, success } from "../../theme/palette";

import map from "../../assets/about/map.jpg";
import delivery from "../../assets/about/delivery.jpeg";

function DeliveryInfo() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: "135px",
      }}
    >
      <Stack
        sx={{
          maxWidth: "569px",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            lineHeight: "70px",
            fontSize: "64px",
            color: secondary.light,
            marginBottom: "26px",
          }}
        >
          Extensive Delivery Network Across Europe
        </Typography>
        <Typography
          variant="body2"
          sx={{
            lineHeight: "28px",
            color: success.main,
          }}
        >
          At Wineyard, we're passionate about sharing the world of European
          wines with you. We offer a curated selection delivered directly to
          your doorstep, no matter where you are in Europe (that's 48 countries
          and counting!).
          <br />
          <br />
          We invite you to explore the world of European wines with us. Discover
          new flavors, learn about different regions, and find the perfect
          bottle for every occasion. With our convenient online shop and
          extensive delivery network, Europe's diverse and delicious wines are
          just a click away.
          <br />
          <br />
          <strong>Let the adventure begin!</strong>
        </Typography>
      </Stack>
      <Stack sx={{ position: "relative" }}>
        <img
          src={map}
          loading="lazy"
          alt="Map"
          style={{
            objectFit: "cover",
            maxHeight: "662px",
            maxWidth: "576px",
          }}
        />
        <img
          src={delivery}
          loading="lazy"
          alt="Delivery"
          style={{
            borderRadius: "220px 220px 0 0",
            height: "278px",
            width: "202px",
            position: "absolute",
            bottom: "143px",
            left: "-76px",
          }}
        />
      </Stack>
    </Box>
  );
}

export default DeliveryInfo;
