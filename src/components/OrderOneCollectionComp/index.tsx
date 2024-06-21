import { useDispatch } from "react-redux";
import { ICollections } from "../../types/collections";
import { Box } from "@mui/material";
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
            onClick={() => dispatch(addCollection({...data, box_price: Number(data.box_price)}))}
            />
                </RouterLink>
                <SecondaryButtonComp onClick={() => dispatch(addCollection({...data, box_price: Number(data.box_price)}))}>{trashIcon}</SecondaryButtonComp>
            </Box> 
        </Box>  
    )
}