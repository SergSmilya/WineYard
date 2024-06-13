import { Box } from "@mui/material";
// components
import WinePriceComp from "../WinePriceComp/inedx";
import CustomButton from "../button";
import SecondaryButtonComp from "../SecondaryButtonComp";
// svg
import trashIcon from '../../assets/icons/trash.svg';
// services
import RouterLink from "../../routes/routerLink";
import { paths } from "../../config/path";
import { useDispatch } from "react-redux";
import { addGiftBox } from "../../store/cartOrderedSlice";
import { IGiftCardItemComp } from "../GiftCardItemComp";

export default function GiftBoxActionsComp({ data }: { data: IGiftCardItemComp }) {
    const dispatch = useDispatch();
    const { giftBox_price } = data;

    return (
        <Box>
            <Box sx={{marginBottom: '17px'}}>
                <WinePriceComp>{giftBox_price}</WinePriceComp>
            </Box>
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
            onClick={() => dispatch(addGiftBox(data))}
            />
                </RouterLink>
                <SecondaryButtonComp onClick={() => dispatch(addGiftBox(data))}>{trashIcon}</SecondaryButtonComp>
            </Box> 
        </Box>  
    )
}