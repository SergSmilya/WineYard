import { Box, Typography } from "@mui/material";
import AdditionalnfoComp from "../AdditionalnfoComp";
import CustomButton from "../button";
import { primary } from "../../theme/palette";
import SecondaryButtonComp from "../SecondaryButtonComp";

import trashIcon from '../../assets/icons/trash.svg';
import arrowRightIcon from '../../assets/icons/arrow-right.svg';

export default function WineCardItem({show = true}: {show?: boolean}) {
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
          <AdditionalnfoComp bgdColor="#FFA6D1">pink wine</AdditionalnfoComp>
          <AdditionalnfoComp bgdColor="#A6EFFF">dry</AdditionalnfoComp>
        </Box>
        <img
          style={{ backgroundColor: "tomato" }}
          src=""
          alt="logoWine"
          width="100%"
          height="283px"
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
          Chateau Saint Maur Cru Classe L`Excellence
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
              France
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
            1250<span>&#8372;</span>
          </Typography>
        </Box>
      </Box>

      <Box
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
        <CustomButton
          color="primary"
          text="Buy"
          width="140px"
          height="44px"
          borderRadius="4px"
        />
        <SecondaryButtonComp>{trashIcon}</SecondaryButtonComp>
        <SecondaryButtonComp>{arrowRightIcon}</SecondaryButtonComp>
      </Box>
    </Box>
  );
}
