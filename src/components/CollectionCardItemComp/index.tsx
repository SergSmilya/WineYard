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
import { CASCADE, MAXQUANTITY, RASPBERRY, SPICY } from "../../CONST/baseConst";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCollection } from "../../store/cartOrderedSlice";
import RandomInteger from "../../helpers/RandomInteger";
import { RootState } from "../../store";

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
  border: {xs:`1px solid ${primary.main}`, md: `1px solid ${common.white}`},
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
  paddingBottom: { xs: "65px", md: '15px' },
}
const BoxButtonStyle = {
  width: '274px',
  position: 'absolute',
  bottom: {xs: '3%', md: '-50%'},
  transition: "all 250ms",
  display: "flex",
  gap: "5px",
}

export default function CollectionCardItemComp(item: ICollections) {
  const { id, box_img, box_price, box_name, pack_quantity } = item;
  const results = useSelector((state: RootState) => state.cartOrdered);
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentPrice, setCurrentPrice] = useState(Number(box_price));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const pathNavigate = 'collections';

  const condition = box_name === RASPBERRY || box_name === SPICY || box_name === CASCADE;
  const isBothQuantity = condition ? [6, 12] : false;
  
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
              onClick={() => {
              if (activeIndex) {
                 for (const item of results) {
                if (item.id > MAXQUANTITY && pack_quantity === 12 && item.box_name === box_name) {
                  dispatch(addCollection(item));
                  return;
                }
              }
                dispatch(addCollection({ ...item, pack_quantity: 12, box_price: currentPrice, id: RandomInteger(item.id) }));
                return;
              }
                dispatch(addCollection({...item, box_price: currentPrice}));
              }}
            />
            </RouterLink>
          <SecondaryButtonComp onClick={() => {
            if (activeIndex) {
              for (const item of results) {
                if (item.id > MAXQUANTITY && item.pack_quantity === 12 && item.box_name === box_name) {
                  dispatch(addCollection(item));
                  return;
                }
              }
              dispatch(addCollection({ ...item, pack_quantity: 12, box_price: currentPrice, id: RandomInteger(item.id) }));
              return;
            }
              dispatch(addCollection({...item, box_price: currentPrice}));
            }}>{trashIcon}</SecondaryButtonComp>
          <SecondaryButtonComp onClick={() => {
            if (activeIndex) {
              navigate(`/${pathNavigate}/${id}`, { state: { currentQuantityPack: activeIndex } });
              return
            }
              navigate(`/${pathNavigate}/${id}`)
            }}>{arrowRightIcon}</SecondaryButtonComp>
          </Box>
      </Box>
    </Stack>
  )
}