import { Box, IconButton, Typography } from "@mui/material";
import { primary, success } from '../../theme/palette';
import CustomIconComp from "../CustomIconComp";

import basketIcon from '../../assets/icons/basket.svg'
import { useDispatch } from "react-redux";
import { deleteCollection } from "../../store/cartOrderedSlice";
import { common } from "@mui/material/colors";
import QuantityPanelComp from "../QuantityPanelComp";
import { ICollections } from "../../types/collections";

export interface IOrderItemCollectionComp extends ICollections {
    box_quantityOrder: number;
}

export default function OrderItemCollectionComp({ id, box_name, box_img, box_price, box_quantityOrder }: IOrderItemCollectionComp) {
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
                <img src={box_img} alt={`${box_name}/logo`} width='176' height='164' style={{objectFit: 'contain'}} />
            </Box>
            
            <Box sx={{
                alignSelf: 'center'
            }}>
                <Typography sx={{
                    fontSize: '18px',
                    fontWeight: 600,
                    lineHeight: 'normal',
                    marginBottom: '8px',
                }} color={success.dark}>{box_name}</Typography>

                <Typography sx={{
                    marginBottom: '40px'
                }} variant="h6" color={primary.main}>{box_price} / bottle</Typography>

                <QuantityPanelComp id={id}>{box_quantityOrder}</QuantityPanelComp>

                <Typography sx={{
                    fontSize: '18px',
                    fontWeight: 600,
                    lineHeight: 'normal',
                }} color={primary.main}>Total: {box_price}₴</Typography>
            </Box>

            <IconButton sx={{ padding: 0, paddingRight: '30px', marginLeft: '10px' }} onClick={() => {
                dispatch(deleteCollection({id, box_name, box_price}));
            }}>
                <CustomIconComp>{basketIcon}</CustomIconComp>
            </IconButton>
        </Box>
    )
}