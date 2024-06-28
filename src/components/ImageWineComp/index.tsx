import { Box, Typography } from "@mui/material";
import { common } from "@mui/material/colors";
// component
import AdditionalnfoComp from "../AdditionalnfoComp";
// functions
import handleChooseColor from "../../helpers/chooseColorLabel";
import { info } from "../../theme/palette";
import { pxToRem, typography } from "../../theme/typography";
import WineById from "../../types/wineById";

export default function ImageWineComp({ data }: WineById) {
  const { goods_name, goods_color, goods_type, goods_img } = data;
  
  return (
    <Box
      sx={{
        width: {xs: '320px', lg: '592px'},
        height: "fit-content",
        position: "relative",
        padding: "34px 27px 26px",
        backgroundColor: common.white,
        borderRadius: "20px",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          display: "flex",
          flexDirection: "column",
          rowGap: "8px",
        }}
      >
        <AdditionalnfoComp
          bgdColor={handleChooseColor(goods_color)}
        >{`${goods_color} wine`}</AdditionalnfoComp>
        <AdditionalnfoComp bgdColor={handleChooseColor(goods_type)}>
          {goods_type}
        </AdditionalnfoComp>
      </Box>
      <img
        style={{ objectFit: "contain" }}
        src={goods_img}
        alt={`${goods_name}logo`}
        width={488}
        height={455}
      />
      <Box
        sx={{
          position: "absolute",
          right: 0,
          transform: "translate(-100%, -100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "14px 8px 7px",
          borderRadius: "40px 40px 0 0",
          backgroundColor: info.main,
        }}
      >
        <Typography
          sx={{
            fontWeight: typography.fontWeightRegular,
            fontSize: pxToRem(15),
          }}
          color="#7D0006"
        >
          18+
        </Typography>
      </Box>
    </Box>
  );
}
