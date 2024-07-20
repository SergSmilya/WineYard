import { Box, List, ListItem, Typography } from "@mui/material";
import TitleComp from "../../../components/TitleComp";
import { success } from "../../../theme/palette";

import imgBoutles from "../../../assets/collection/six-boutles/six-boutles.jpg";
import imgBoutles2X from "../../../assets/collection/six-boutles/six-boutles@2x.jpg";

const commonTextStyle = {
  fontSize: { xs: "16px", lg: "18px" },
  lineHeight: { xs: "20px", lg: "28px" },
  position: "relative",
  paddingLeft: "24px",

  "&::before": {
    content: '""',
    position: "absolute",
    left: 0,
    top: "50%",
    transform: "translateY(-50%)",
    width: "7px",
    height: "7px",
    borderRadius: "50%",
    backgroundColor: success.main,
  },
};
const BoxDescriptionStyle = {
  maxWidth: "570px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: { xs: "15px", lg: "26px" },
};

export default function WhatInsideSection() {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          gap: { xs: "24px" },
          justifyContent: "space-between",
        }}
      >
        {/* Description */}
        <Box sx={BoxDescriptionStyle}>
          <TitleComp size="109%" position="left">
            What’s inside?
          </TitleComp>
          <List>
            <ListItem>
              <Typography sx={commonTextStyle}>
                Each box contains 6 bottles
              </Typography>
            </ListItem>
            <ListItem>
              <Typography sx={commonTextStyle}>
                The wines in the box are all wrapped
              </Typography>
            </ListItem>
            <ListItem>
              <Typography sx={commonTextStyle}>
                Each bottle contains a unique code and card with all information
                about the wine and winemaker
              </Typography>
            </ListItem>
            <ListItem>
              <Typography sx={commonTextStyle}>
                Delivered to your home in a nice sturdy box
              </Typography>
            </ListItem>
            <ListItem>
              <Typography sx={commonTextStyle}>
                Made with the expertise of sommeliers
              </Typography>
            </ListItem>
          </List>
          <Typography
            sx={{
              fontSize: { xs: "16px", lg: "18px" },
              lineHeight: { xs: "20px", lg: "28px" },
              fontWeight: 600,
            }}
          >
            Enjoy your dose of grapes and friends!
          </Typography>
        </Box>
        <Box>
          <img
            srcSet={`${imgBoutles} 1x, ${imgBoutles2X} 2x`}
            src={imgBoutles}
            alt="six-boutles"
          />
        </Box>
      </Box>
    </Box>
  );
}
