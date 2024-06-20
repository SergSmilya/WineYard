import { Box, List, ListItem, Typography } from "@mui/material";
import { ICollections } from "../../types/collections";
import { subTitleStyle, textStockStyles, titleStyle } from "../TextWineItemComp";
import { secondary, success } from "../../theme/palette";
import { useDispatch, useSelector } from "react-redux";
import { common } from "@mui/material/colors";
import { RootState } from "../../store";
import QuantityPanelComp from "../QuantityPanelComp";
import StaticQuantityCollectionComp from "../StaticQuantityCollectionComp";
import NumberPackBtnComp from "../NumberPackBtnComp";
import { useState } from "react";
import { CASCADE, MAXQUANTITY, RASPBERRY, SPICY } from "../../CONST/baseConst";
import WinePriceComp from "../WinePriceComp/inedx";
import RouterLink from "../../routes/routerLink";
import { paths } from "../../config/path";
import CustomButton from "../button";
import SecondaryButtonComp from "../SecondaryButtonComp";
import trashIcon from '../../assets/icons/trash.svg';
import { addCollection } from "../../store/cartOrderedSlice";
import RandomInteger from "../../helpers/RandomInteger";

export default function TextCollectionItemComp(data: ICollections) {
    const dispatch = useDispatch();
    const { id, box_name, box_small_description, pack_quantity, box_price } = data;

    const result = useSelector((state: RootState) => state.cartOrdered);
    const [quantityOrder] = result.filter(item => item.id === id && item.box_name === box_name);

    const [activeIndex, setActiveIndex] = useState(0);
    const [currentPrice, setCurrentPrice] = useState(Number(box_price));

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
        <Box sx={{maxWidth: '518px'}}>
            <Typography sx={textStockStyles} color={secondary.light}>In stock</Typography>
            <Typography sx={titleStyle} color={success.dark}>{box_name}</Typography>
            <Box sx={{ marginBottom: '20px'}}>
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
            </Box>
            <Typography sx={subTitleStyle} color={common.black}>{box_small_description}</Typography>
            {quantityOrder && <QuantityPanelComp id={id}>{quantityOrder.box_quantityOrder}</QuantityPanelComp>}
            <Box sx={{marginBottom: '17px'}}>
                <WinePriceComp>{currentPrice}</WinePriceComp>
            </Box>
             <Box>
            <Box sx={{
            display: 'flex',
            gap: '5px'
            }}>
            <RouterLink to={paths.CARTPAGE} >
              <CustomButton
              color="primary"
              text="Buy"
              width="140px"
              height="44px"
              borderRadius="4px"
              onClick={() => {
              if (activeIndex) {
                for (const item of result) {
                if (item.id > MAXQUANTITY && pack_quantity === 12 && item.box_name === box_name) {
                  dispatch(addCollection(item));
                  return;
                }
              }
                dispatch(addCollection({ ...data, pack_quantity: 12, box_price: currentPrice, id: RandomInteger(data.id) }));
                return;
              }
                dispatch(addCollection({...data, box_price: Number(box_price)}));
              }}
            />
            </RouterLink>
          <SecondaryButtonComp onClick={() => {
            if (activeIndex) {
              for (const item of result) {
                if (item.id > MAXQUANTITY && item.pack_quantity === 12 && item.box_name === box_name) {
                  dispatch(addCollection(item));
                  return;
                }
              }
              dispatch(addCollection({ ...data, pack_quantity: 12, box_price: currentPrice, id: RandomInteger(data.id) }));
              return;
            }
              dispatch(addCollection({...data, box_price: Number(box_price)}));
            }}>{trashIcon}</SecondaryButtonComp>
                </Box> 
             </Box> 
        </Box>
    )
}