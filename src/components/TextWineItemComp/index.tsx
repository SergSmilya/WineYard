import { Box, Typography } from "@mui/material";
import { secondary, success } from "../../theme/palette";
import { pxToRem, typography } from "../../theme/typography";
import { common } from "@mui/material/colors";
// components
import FlagCountryComp from "../FlagCountryComp";
import OrderOneWineComp from "../OrderOneWineComp";
import QuantityPanelComp from "../QuantityPanelComp";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import WineById from "../../types/wineById";

// styles
const textStockStyles = {
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center',
    columnGap: '10px',
    fontSize: pxToRem(18),
    lineHeight: '150%',
    letterSpacing: '-0.36px',
    marginBottom: '18px',
    "&::before": {
        content: "''",
        width: '12px',
        height: '12px',
        borderRadius: '50%',
        backgroundColor: secondary.light
    }
};
const titleStyle = {
    fontSize: pxToRem(36),
    fontWeight: typography.fontWeightSemiBold,
    lineHeight: 'normal',   
    marginBottom: '12px'
};
const subTitleStyle = {
    fontSize: pxToRem(18),
    lineHeight: 'normal',
    marginBottom: '65px'
};

export default function TextWineItemComp({ data }: WineById) {
    const {id, goods_name, goods_small_description, country_goods } = data;

    const result = useSelector((state: RootState) => state.cartOrdered);
    const [quantityOrder] = result.filter(item => item.id === id);

    return (
        <Box sx={{maxWidth: '518px'}}>
            <Typography sx={textStockStyles} color={secondary.light}>In stock</Typography>
            <Typography sx={titleStyle} color={success.dark}>{goods_name}</Typography>
            <Box sx={{marginBottom: '20px'}}>
                <FlagCountryComp country_goods={country_goods} doubleGap/>
            </Box>
            <Typography sx={subTitleStyle} color={common.black}>{goods_small_description}</Typography>
            {quantityOrder && <QuantityPanelComp id={id}>{quantityOrder.goods_quantityOrder}</QuantityPanelComp>}
            <OrderOneWineComp data={data} />
        </Box>
    )
}