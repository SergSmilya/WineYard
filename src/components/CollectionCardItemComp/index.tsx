import { Box, List, ListItem, Stack } from "@mui/material";
import { common } from "@mui/material/colors";
import { primary } from "../../theme/palette";
import AdaptiveNameWineComp from "../AdaptiveNameWineComp";
import NumberPackBtnComp from "../NumberPackBtnComp";
import WinePriceComp from "../WinePriceComp/inedx";
import RouterLink from "../../routes/routerLink";
import { paths } from "../../config/path";
import CustomButton from "../button";
import SecondaryButtonComp from "../SecondaryButtonComp";

import trashIcon from '../../assets/icons/trash.svg';
import arrowRightIcon from '../../assets/icons/arrow-right.svg';
import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
import { ICollections } from "../../types/collections";
import StaticQuantityCollectionComp from "../StaticQuantityCollectionComp";
import { CASCADE, RASPBERRY, SPICY } from "../../CONST/baseConst";
import { useState } from "react";

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

export default function CollectionCardItemComp({ id, box_img, box_price, box_name, pack_quantity }: ICollections) {
  const condition = box_name === RASPBERRY || box_name === SPICY || box_name === CASCADE;
  const isBothQuantity = condition ? [6, 12] : false;
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentPrice, setCurrentPrice] = useState(Number(box_price));
  
  const handleClick = (index: number) => {
    setActiveIndex(index);
    if (!index) {
      setCurrentPrice(Number(box_price));
      return;
    }
    if (currentPrice !== Number(box_price) * 2) {
      setCurrentPrice(prevState => prevState * 2);  
    }
  };

  const navigate = useNavigate();
  const pathNavigate = 'collections';

  return (
    <Stack sx={mainBoxStyle}>
      <Box>
        <img style={{ objectFit: 'contain'}} src={box_img} alt="giftBox" height={300}/>
      </Box>
      {/* Description */}
      <Box sx={BoxDescriptionStyle}>
        <Stack className="textBlock" spacing={1}>
          <AdaptiveNameWineComp>{box_name}</AdaptiveNameWineComp>
           <Stack sx={{justifyContent: 'space-between', alignItems: 'center'}} direction="row">
            {isBothQuantity ? <List sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '5px'
            }}>
              {isBothQuantity.map((item: number, i: number) => (
                <ListItem key={i} sx={{width: 'auto'}}>
                  <NumberPackBtnComp
                    isActiveButton={activeIndex === i}
                    onClick = {() => handleClick(i)}
                  >{item}</NumberPackBtnComp>
                </ListItem>
              ) )}
            </List> : <StaticQuantityCollectionComp>{pack_quantity}</StaticQuantityCollectionComp>}
            <WinePriceComp>{currentPrice}</WinePriceComp>
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
            />
            </RouterLink>
          <SecondaryButtonComp onClick={() => {
            // toast.info('pushed on button');
              // toast.success(`${goods_name} Wine added to cart`);
              // dispatch(addWine(el));
            }}>{trashIcon}</SecondaryButtonComp>
            <SecondaryButtonComp onClick={() => {
              navigate(`/${pathNavigate}/${id}`)
            }}>{arrowRightIcon}</SecondaryButtonComp>
          </Box>
      </Box>
    </Stack>
  )
}