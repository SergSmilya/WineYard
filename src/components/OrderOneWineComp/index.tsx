import { Box, Typography } from "@mui/material";
// components
import CustomButton from "../button";
import SecondaryButtonComp from "../SecondaryButtonComp";
// svg
import trashIcon from '../../assets/icons/trash.svg';
// services
import RouterLink from "../../routes/routerLink";
import { paths } from "../../config/path";

export default function OrderOneWineComp() {
    return (
        <Box>
            <Typography>1250</Typography>
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
            T</Box> 
        </Box>  
    )
}