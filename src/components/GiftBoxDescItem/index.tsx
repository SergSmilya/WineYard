import { Box, Typography } from "@mui/material";
import { secondary, success } from "../../theme/palette";
import { common } from "@mui/material/colors";
import { pxToRem, typography } from "../../theme/typography";
import FlagCountryComp from "../FlagCountryComp";
import { IGiftCardItemComp } from "../GiftCardItemComp";
import GiftBoxActionsComp from "../GiftBoxActionsComp";
import QuantityPanelComp from "../QuantityPanelComp";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

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

export default function GiftBoxDescItem(data: IGiftCardItemComp) {
    const { id, giftBox_name, giftBox_country, giftBox_desc } = data;

    const result = useSelector((state: RootState) => state.cartOrdered);
    const [giftBoxItem] = result.filter(item => item.id === id);

    return (
        <Box sx={{maxWidth: '518px'}}>
            <Typography sx={textStockStyles} color={secondary.light}>In stock</Typography>
            <Typography sx={titleStyle} color={success.dark}>{giftBox_name}</Typography>
            <Box sx={{marginBottom: '20px'}}>
                <FlagCountryComp country_goods={giftBox_country} doubleGap/>
            </Box>
            <Typography sx={subTitleStyle} color={common.black}>{giftBox_desc}</Typography>
            {giftBoxItem && <QuantityPanelComp id={id}>{giftBoxItem.giftBox_quantityOrder}</QuantityPanelComp>}
            <GiftBoxActionsComp data={giftBoxItem ? giftBoxItem : data} />
        </Box>
    )
}