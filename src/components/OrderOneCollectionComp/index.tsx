import { useDispatch } from "react-redux";
import { ICollections } from "../../types/collections";
import { Box } from "@mui/material";
import WinePriceComp from "../WinePriceComp/inedx";
import { paths } from "../../config/path";
import RouterLink from "../../routes/routerLink";
import CustomButton from "../button";
import SecondaryButtonComp from "../SecondaryButtonComp";
// svg
import trashIcon from '../../assets/icons/trash.svg';
import { addCollection } from "../../store/cartOrderedSlice";

export default function OrderOneCollectionComp(data: ICollections) {
    const dispatch = useDispatch();

    return (
        <Box>
            <Box sx={{marginBottom: '17px'}}>
                <WinePriceComp>{data.box_price}</WinePriceComp>
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
                <SecondaryButtonComp onClick={() => dispatch(addCollection(data))}>{trashIcon}</SecondaryButtonComp>
            </Box> 
        </Box>  
    )
}