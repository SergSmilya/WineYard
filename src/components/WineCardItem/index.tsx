import { Box, Typography } from "@mui/material";
import AdditionalnfoComp from "../AdditionalnfoComp";
import CustomButton from "../button";
import { primary } from "../../theme/palette";
import SecondaryButtonComp from "../SecondaryButtonComp";
import RouterLink from "../../routes/routerLink";
import { paths } from "../../config/path";

import trashIcon from '../../assets/icons/trash.svg';
import arrowRightIcon from '../../assets/icons/arrow-right.svg';
import { Wine } from "../../types/wine";

// ! will devide into several small parts
export default function WineCardItem({ show = true, el }: { show?: boolean; el: Wine }) {
  
  const { goods_color, goods_type, goods_name, goods_img, goods_price, country_goods} = el;

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
          flex: "1 1 auto",
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
          <AdditionalnfoComp bgdColor="#FFA6D1">{`${goods_color} wine`}</AdditionalnfoComp>
          <AdditionalnfoComp bgdColor="#A6EFFF">{goods_type}</AdditionalnfoComp>
        </Box>
        <img
          src={goods_img}
          alt="logoWine"
          width="100%"
          height="283px"
          style={{objectFit: "contain"}}
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
          {goods_name}
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
            <img
              style={{
                backgroundColor: "blue",
              }}
              src=""
              alt="flag"
              width="22px"
              height="16px"
            />
            <Typography
              sx={{
                lineHeight: "normal",
              }}
              variant="h6"
            >
              {country_goods?.name}
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
