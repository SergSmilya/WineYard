import { Box, Stack } from "@mui/material";
import { common } from "@mui/material/colors";
import { primary } from "../../theme/palette";
import AdaptiveNameWineComp from "../AdaptiveNameWineComp";
import WinePriceComp from "../WinePriceComp/inedx";
import RouterLink from "../../routes/routerLink";
import { paths } from "../../config/path";
import CustomButton from "../button";
import SecondaryButtonComp from "../SecondaryButtonComp";

import trashIcon from '../../assets/icons/trash.svg';
import arrowRightIcon from '../../assets/icons/arrow-right.svg';
import { useNavigate } from "react-router-dom";
import FlagCountryComp from "../FlagCountryComp";

import mysteryBoxImg from '../../assets/collection/mystery-box.jpg';
import { useDispatch } from "react-redux";
import { addGiftBox } from "../../store/cartOrderedSlice";

export interface IGiftCardItemComp {
  id: number;
  giftBox_name: string;
  giftBox_desc: string;
  giftBox_country: string;
  giftBox_price: number;
}

const mainBoxHover = {
  position: 'absolute',
  top: 0,
  zIndex: 2,
  borderColor: primary.main,
  '.textBlock': {
    marginBottom: '65px'
  },
  ".buttonHide": {
    bottom: '5%',
  }
}
const mainBoxStyle = {
  width: '304px',
  display: 'flex',
  border: `1px solid ${common.white}`,
  borderRadius: "10px",
  overflow: 'hidden',
  transition: "all 250ms",
  position: 'relative',
'&:hover': mainBoxHover
}
const BoxDescriptionStyle = {
  padding: '10px 15px 15px',
  backgroundColor: common.white,
  display: 'flex',
  flexDirection: 'column',
  gap: '21px',
  lineHeight: 'normal',
  borderRadius: "10px",
}
const BoxButtonStyle = {
  width: '274px',
  position: 'absolute',
  bottom: '-50%',
  transition: "all 250ms",
  display: "flex",
  gap: "5px",
}

export default function GiftCardItemComp({id, giftBox_name, giftBox_country, giftBox_price }: IGiftCardItemComp) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Stack sx={mainBoxStyle}>
      <Box>
        <img src={mysteryBoxImg} alt={giftBox_name} />
      </Box>
      {/* Description */}
      <Box sx={BoxDescriptionStyle}>
        <Stack className="textBlock" spacing={1}>
          <AdaptiveNameWineComp>{giftBox_name}</AdaptiveNameWineComp>
           <Stack sx={{justifyContent: 'space-between', alignItems: 'center'}} direction="row">
            <FlagCountryComp country_goods={giftBox_country} />
            <WinePriceComp>{giftBox_price}</WinePriceComp>
          </Stack>
        </Stack>
          <Box className="buttonHide" sx={BoxButtonStyle}>
            <RouterLink to={paths.CARTPAGE} >
              <CustomButton
              color="primary"
              text="Buy"
              width="140px"
              height="44px"
              borderRadius="4px"
              onClick={() => dispatch(addGiftBox(id))}
            />
            </RouterLink>
          <SecondaryButtonComp onClick={() => {
              dispatch(addGiftBox(id));
            }}>{trashIcon}</SecondaryButtonComp>
            <SecondaryButtonComp onClick={() => {
                navigate(`/giftBox/${id}`)
            }}>{arrowRightIcon}</SecondaryButtonComp>
          </Box>
      </Box>
    </Stack>
  )
}