import { Box, IconButton, Typography } from "@mui/material";
import { error, primary, success } from '../../theme/palette';
import CustomIconComp from "../CustomIconComp";

import basketIcon from '../../assets/icons/basket.svg'
import { useDispatch } from "react-redux";
import { deleteWine } from "../../store/cartOrderedSlice";
import { Wine } from "../../types/wine";
import { common } from "@mui/material/colors";

export default function OrderItemComp({id, goods_img, goods_name, goods_price}: Wine) {
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

                <Box sx={{
                    backgroundColor: `${error.contrastText}`,
                    display: 'flex',
                    columnGap: '8px',
                    marginBottom: '14px'
                }}>
                    {/* Change on input with logic */}
                    <Typography>+</Typography>
                    <Typography>1</Typography>
                    <Typography>-</Typography>
                </Box>

                <Typography sx={{
                    fontSize: '18px',
                    fontWeight: 600,
                    lineHeight: 'normal',
                }} color={primary.main}>Total: {goods_price}₴</Typography>
            </Box>

            <IconButton sx={{padding: 0, paddingRight: '30px', marginLeft: '10px'}} onClick={()=> dispatch(deleteWine(id))}>
                <CustomIconComp>{basketIcon}</CustomIconComp>
            </IconButton>
        </Box>
    )
}