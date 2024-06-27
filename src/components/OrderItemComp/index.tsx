import { Box, IconButton, Typography } from "@mui/material";
import { primary, success } from '../../theme/palette';
import CustomIconComp from "../CustomIconComp";

import basketIcon from '../../assets/icons/basket.svg'
import { useDispatch } from "react-redux";
import { deleteWine } from "../../store/cartOrderedSlice";
import { Wine } from "../../types/wine";
import { common } from "@mui/material/colors";
import QuantityPanelComp from "../QuantityPanelComp";

export interface IOrderItemComp extends Wine {
    goods_quantityOrder: number;
}

export default function OrderItemComp({ id, goods_img, goods_name, goods_price, goods_quantityOrder }: IOrderItemComp) {
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
                <img src={goods_img} alt={`${goods_name}/logo`} width='176' height='164' style={{objectFit: 'contain'}} />
            </Box>
            
            <Box sx={{
                alignSelf: 'center'
            }}>
                <Typography sx={{
                    fontSize: '18px',
                    fontWeight: 600,
                    lineHeight: 'normal',
                    marginBottom: '8px',
                }} color={success.dark}>{goods_name}</Typography>

                <Typography sx={{
                    marginBottom: '40px'
                }} variant="h6" color={primary.main}>{goods_price} / bottle</Typography>

                <QuantityPanelComp id={id}>{goods_quantityOrder}</QuantityPanelComp>

                <Typography sx={{
                    fontSize: '18px',
                    fontWeight: 600,
                    lineHeight: 'normal',
                }} color={primary.main}>Total: {goods_price}₴</Typography>
            </Box>

            <IconButton sx={{ padding: 0, marginLeft: 'auto', marginRight: '40px' }} onClick={() => {
                dispatch(deleteWine(id));
            }}>
                <CustomIconComp>{basketIcon}</CustomIconComp>
            </IconButton>
        </Box>
    )
}