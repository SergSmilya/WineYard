import { Box, IconButton, Typography } from "@mui/material";
import { primary, success } from '../../theme/palette';
import CustomIconComp from "../CustomIconComp";

import basketIcon from '../../assets/icons/basket.svg'
import { useDispatch } from "react-redux";
import { deleteGiftBox } from "../../store/cartOrderedSlice";
import { common } from "@mui/material/colors";
import QuantityPanelComp from "../QuantityPanelComp";
import { IGiftCardItemComp } from "../GiftCardItemComp";
import mysteryBoxImg from '../../assets/collection/mystery-box.jpg';

export interface IOrderItemGiftBoxComp extends IGiftCardItemComp {
    giftBox_quantityOrder: number;
}

export default function OrderItemGiftBoxComp({ id, giftBox_name, giftBox_price, giftBox_quantityOrder }: IOrderItemGiftBoxComp) {
    const dispatch = useDispatch();

    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '20px',
            width: '100%',
            borderBottom: '1px solid #C1BABA',
            paddingBottom: '18px'
        }}>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: common.white,
                width: '176px',
                height: '164px',
                borderRadius: '10px',
                padding: '5px'
            }}>
                <img src={mysteryBoxImg} alt={`${giftBox_name}/logo`} width='176' height='164' style={{objectFit: 'contain'}} />
            </Box>
            
            <Box sx={{
                alignSelf: 'center'
            }}>
                <Typography sx={{
                    fontSize: '18px',
                    fontWeight: 600,
                    lineHeight: 'normal',
                    marginBottom: '8px',
                }} color={success.dark}>{giftBox_name}</Typography>

                <Typography sx={{
                    marginBottom: '40px'
                }} variant="h6" color={primary.main}>{giftBox_price} / bottle</Typography>

                <QuantityPanelComp id={id}>{giftBox_quantityOrder}</QuantityPanelComp>

                <Typography sx={{
                    fontSize: '18px',
                    fontWeight: 600,
                    lineHeight: 'normal',
                }} color={primary.main}>Total: {giftBox_price}₴</Typography>
            </Box>

            <IconButton sx={{ padding: 0, marginLeft: 'auto', marginRight: '40px' }} onClick={() => {
                dispatch(deleteGiftBox(id));
            }}>
                <CustomIconComp>{basketIcon}</CustomIconComp>
            </IconButton>
        </Box>
    )
}