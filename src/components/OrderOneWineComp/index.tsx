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

export default function OrderOneWineComp({goods_price}: {goods_price: string | number}) {
    return (
        <Box>
            <Box sx={{marginBottom: '17px'}}>
                <WinePriceComp>{goods_price}</WinePriceComp>
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
                <SecondaryButtonComp onClick={() => alert("+1 icon trash")}>{trashIcon}</SecondaryButtonComp>
            </Box> 
        </Box>  
    )
}