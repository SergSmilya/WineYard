import { Box, Typography } from "@mui/material";
import AdditionalnfoComp from "../AdditionalnfoComp";
import CustomButton from "../button";
import { primary } from "../../theme/palette";
import SecondaryButtonComp from "../SecondaryButtonComp";
import RouterLink from "../../routes/routerLink";
import { paths } from "../../config/path";

import trashIcon from '../../assets/icons/trash.svg';
import arrowRightIcon from '../../assets/icons/arrow-right.svg';
import handleChooseColor from "../../helpers/chooseColorLabel";
import countries from '../../../src/assets/icons/countries.svg';
import handleCutString from "../../helpers/cutNameWine";

interface WineItem {
  goods_color: string;
  goods_type: string;
  goods_name: string;
  goods_img: string;
  goods_price: number;
  country_goods: {
    name: string;
  } 
}

interface WineCardItemProps {
  show?: boolean;
  el: WineItem;
}

export default function WineCardItem({ show = true, el }: WineCardItemProps) {

  const { goods_color, goods_type, goods_name, goods_img, goods_price, country_goods } = el;

  const hover = {
    position: 'absolute',
    top: 0,
    zIndex: 2,
    border: `1px solid ${primary.main}`,
    borderRadius: '10px',

    "& .boxMargin": {
      marginBottom: "70px",
    },
    "& .buttonHide": {
      transform: "translate(0, -15px)",
    },
  };

  const isHover = show ? hover : null;

  return (
    <Box
      sx={{
        position: "relative",
        width: "304px",
        display: "flex",
        flexDirection: "column",
        alignItems: "normal",
        borderRadius: "10px",
        backgroundColor: "#FFF",
        padding: "15px",
        overflow: "hidden",
        transition: "all 250ms",
        "&:hover": isHover
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "100%",
          marginBottom: "10px",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            gap: "5px",
          }}
        >
          <AdditionalnfoComp bgdColor={handleChooseColor(goods_color)}>{`${goods_color} wine`}</AdditionalnfoComp>
          <AdditionalnfoComp bgdColor={handleChooseColor(goods_type)}>{goods_type}</AdditionalnfoComp>
        </Box>
        <img
          style={{objectFit:'contain'}}
          src={goods_img}
          alt={`${goods_name} logo`}
          width="100%"
          height="283"
        />
      </Box>
      
      <Box
        className="boxMargin"
        sx={{
          display: "flex",
          flexDirection: "column",
          color: "#1A202C",
          gap: "8px",
        }}
      >
        <Typography 
          sx={{
            width: "233px",
            lineHeight: "normal",
          }}
          variant="subtitle1"
        >
          {handleCutString(goods_name)}
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "end",
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: "5px",
            }}
          >
            {/* svg flag */}
            <svg width="22px" height="16px">
              <use href={`${countries}#${country_goods.name}`} />
            </svg>
            <Typography
              sx={{
                lineHeight: "normal",
              }}
              variant="h6"
            >
              {country_goods.name}
            </Typography>
          </Box>

          <Typography
            sx={{
              fontSize: "20px",
              fontWeight: "600",
              lineHeight: "normal",
              color: "#7D0006",
            }}
          >
            {goods_price}<span>&#8372;</span>
          </Typography>
        </Box>
      </Box>

      {isHover && <Box
        className="buttonHide"
        sx={{
          position: "absolute",
          width: "274px",
          display: "flex",
          justifyContent: 'space-between',
          gap: "5px",
          bottom: 0,
          transform: "translate(110%, -15px)",
        }}
      >
        <RouterLink to={paths.CARTPAGE} >
          <CustomButton
          color="primary"
          text="Buy"
          width="140px"
          height="44px"
          borderRadius="4px"
        />
        </RouterLink>

        <SecondaryButtonComp onClick={() => alert("+1 icon trash")}>{trashIcon}</SecondaryButtonComp>

        <SecondaryButtonComp onClick={() => alert("detail wine-page")}>{arrowRightIcon}</SecondaryButtonComp>
      </Box>}

    </Box>
  );
}
