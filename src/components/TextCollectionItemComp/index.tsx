import { Box, Typography } from "@mui/material";
import { ICollections } from "../../types/collections";
import { subTitleStyle, textStockStyles, titleStyle } from "../TextWineItemComp";
import { secondary, success } from "../../theme/palette";
import { useSelector } from "react-redux";
import { common } from "@mui/material/colors";
import { RootState } from "../../store";
import QuantityPanelComp from "../QuantityPanelComp";
import OrderOneCollectionComp from "../OrderOneCollectionComp";
import StaticQuantityCollectionComp from "../StaticQuantityCollectionComp";

export default function TextCollectionItemComp(data: ICollections) {
    const {id, box_name, box_small_description, pack_quantity } = data;

    const result = useSelector((state: RootState) => state.cartOrdered);
    const [quantityOrder] = result.filter(item => item.id === id && item.box_name === box_name);

    return (
        <Box sx={{maxWidth: '518px'}}>
            <Typography sx={textStockStyles} color={secondary.light}>In stock</Typography>
            <Typography sx={titleStyle} color={success.dark}>{box_name}</Typography>
            <Box sx={{ marginBottom: '20px'}}>
                <StaticQuantityCollectionComp>{pack_quantity}</StaticQuantityCollectionComp>
            </Box>
            <Typography sx={subTitleStyle} color={common.black}>{box_small_description}</Typography>
            {quantityOrder && <QuantityPanelComp id={id}>{quantityOrder.box_quantityOrder}</QuantityPanelComp>}
            <OrderOneCollectionComp {...data} />
        </Box>
    )
}