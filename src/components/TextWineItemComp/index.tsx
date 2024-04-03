import { Box, Typography } from "@mui/material";
import { secondary, success } from "../../theme/palette";
import { pxToRem, typography } from "../../theme/typography";
// components
import FlagCountryComp from "../FlagCountryComp";
import { common } from "@mui/material/colors";
// interface
interface TextWineItem {
    goods_name: string;
    goods_detailed_description: string;
    country_goods: string;
}
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
    marginBottom: '5px'
};
const subTitleStyle = {
    fontSize: pxToRem(18),
    lineHeight: 'normal',
    marginBottom: '65px'
};

export default function TextWineItemComp({goods_name, goods_detailed_description, country_goods}: TextWineItem) {
    return (
        <Box sx={{maxWidth: '518px'}}>
            <Typography sx={textStockStyles} color={secondary.light}>In stock</Typography>
            <Typography sx={titleStyle} color={success.dark}>{goods_name}</Typography>
            <Box sx={{marginBottom: '12px'}}>
                <FlagCountryComp country_goods={country_goods} doubleGap/>
            </Box>
            <Typography sx={subTitleStyle} color={common.black}>{goods_detailed_description}</Typography>
        </Box>
    )
}