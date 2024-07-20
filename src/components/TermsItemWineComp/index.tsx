import { Box, Typography } from "@mui/material";
import { info, success } from "../../theme/palette";
import { pxToRem, typography } from "../../theme/typography";
// svg
import icon from "../../../src/assets/icons/sprites_for_item_wine.svg";
import React from "react";
// type
interface TermsItemWine {
  children: React.ReactNode;
  title: string;
  nameIcon: string;
}
// styles
const wrapStyle = {
  display: "flex",
  alignItems: "center",
  gap: "20px",
  marginBottom: "30px",
};
const iconContainerStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "60px",
  height: "70px",
  borderRadius: "40px 40px 0 0",
  backgroundColor: info.dark,
  paddingTop: "23px",
};
const titleStyle = {
  fontSize: pxToRem(22),
  fontWeight: typography.fontWeightSemiBold,
  lineHeight: "136%",
};
const subTitleStyle = {
  fontSize: pxToRem(18),
  fontWeight: typography.fontWeightRegular,
  lineHeight: { xs: "18px", lg: "20px" },
  letterSpacing: "0.4px",
};

export default function TermsItemWineComp({
  children,
  title,
  nameIcon,
}: TermsItemWine) {
  return (
    <Box>
      <Box sx={wrapStyle}>
        <Box sx={iconContainerStyle}>
          <svg width="37px" height="35px">
            <use href={`${icon}#${nameIcon}`} />
          </svg>
        </Box>
        <Typography sx={titleStyle} color={success.main}>
          {title}
        </Typography>
      </Box>
      <Typography sx={subTitleStyle} color={success.dark}>
        {children}
      </Typography>
    </Box>
  );
}
