import { Box, ListItem, Typography } from "@mui/material";

import AdditionalnfoComp from "../../../../components/AdditionalnfoComp";
import handleChooseColor from "../../../../helpers/chooseColorLabel";
import { typography } from "../../../../theme/typography";

interface CustomerItem {
  children: string;
  desc: string;
  goods_color: string;
  goods_type: string;
  goods_img: string;
}

export default function CustomerItem({
  children,
  desc,
  goods_color,
  goods_type,
  goods_img,
}: CustomerItem) {
  return (
    <ListItem
      sx={{
        flexBasis: "33%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "280px",
        backgroundColor: "#FFFFFF",
        borderRadius: "20px",
        padding: "22px 0",
      }}
    >
      <img
        style={{ objectFit: "contain" }}
        src={goods_img}
        alt={`${children} logo`}
        width="145px"
        height="238px"
      />
      <Box
        sx={{
          height: { xs: "238px", lg: "100%" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            color: "#1A202C",
            width: { xs: "180px", lg: "224px" },
          }}
        >
          <Typography
            sx={{
              marginBottom: "15px",
              fontSize: { xs: "20px", lg: "22px" },
              lineHeight: { xs: "20px", lg: "22px" },
              fontStyle: "normal",
              fontWeight: typography.fontWeightSemiBold,
            }}
          >
            {children}
          </Typography>
          <Typography
            sx={{
              fontWeight: typography.fontWeightRegular,
              fontSize: "14px",
              lineHeight: "130%",
            }}
          >
            {desc}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            gap: "5px",
          }}
        >
          <AdditionalnfoComp
            bgdColor={handleChooseColor(goods_color)}
          >{`${goods_color} wine`}</AdditionalnfoComp>
          <AdditionalnfoComp bgdColor={handleChooseColor(goods_type)}>
            {goods_type}
          </AdditionalnfoComp>
        </Box>
      </Box>
    </ListItem>
  );
}
