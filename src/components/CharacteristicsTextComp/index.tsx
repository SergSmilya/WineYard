import { Box, Typography } from "@mui/material"
import { success } from "../../theme/palette"
import { primaryFont, pxToRem, typography } from "../../theme/typography"
// interface
interface CharacteristicsText {
    children: string;
    characteristic: string | number;
}
// styles
const baseStylesText = {
    fontFamily: primaryFont,
    fontWeight: typography.fontWeightSemiBold,
    fontSize: pxToRem(18),
    lineHeight: '89%',
    letterSpacing: '0.4px'
}

export default function CharacteristicsTextComp({ children, characteristic }: CharacteristicsText) { 
    return (
        <Box sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between'
        }}>
            <Typography sx={baseStylesText} color={success.dark}>{children}:</Typography>
            <Typography sx={{
                ...baseStylesText,
                fontWeight: typography.fontWeightRegular,
            }} color={success.dark}>{characteristic}</Typography>
        </Box>
    )
 }