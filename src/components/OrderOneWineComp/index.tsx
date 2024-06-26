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
import { addWine } from "../../store/cartOrderedSlice";
import WineById from "../../types/wineById";

export default function OrderOneWineComp({data}: WineById) {
    const dispatch = useDispatch();

    return (
        <Box>
            <Box sx={{marginBottom: '17px'}}>
                <WinePriceComp>{data.goods_price}</WinePriceComp>
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
            />
                </RouterLink>
                <SecondaryButtonComp onClick={() => dispatch(addWine(data))}>{trashIcon}</SecondaryButtonComp>
            </Box> 
        </Box>  
    )
}