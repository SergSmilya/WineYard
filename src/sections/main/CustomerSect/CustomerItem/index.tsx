import { Box, ListItem, Typography } from "@mui/material";

import AdditionalnfoComp from "../../../../components/AdditionalnfoComp";
import handleChooseColor from "../../../../helpers/chooseColorLabel";

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
        alignItems: "end",
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
      <Box>
        <Box
          sx={{
            color: "#1A202C",
            width: "224px",
          }}
        >
          <Typography
            sx={{
              width: "127px",
              lineHeight: "normal",
              marginBottom: "15px",
            }}
            variant="subtitle1"
          >
            {children}
          </Typography>
          <Typography
            sx={{
              width: "209px",
              fontWeight: "400",
              fontSize: "14px",
              lineHeight: "130%",
              marginBottom: "30px",
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
