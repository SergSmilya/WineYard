import { Box, Typography } from "@mui/material";
import { success } from "../../theme/palette";
import { pxToRem, typography } from "../../theme/typography";

// type
interface TermsItemWine {
    children: string;
    text: string;
}

export default function TermsItemWineComp({ children, text }: TermsItemWine) {
    return (
        <Box>
            <Box sx={{marginBottom: '30px'}}>
                <Typography sx={{
                fontSize: pxToRem(22),
                fontWeight: typography.fontWeightSemiBold,
                lineHeight: '136%'
            }} color={success.main}>{children}</Typography>
            </Box>
            <Typography sx={{
                fontSize: pxToRem(18),
                fontWeight: typography.fontWeightRegular,
                lineHeight: 'normal',
                letterSpacing: '0.4px'
            }} color={success.dark}>{text}</Typography>
        </Box>
    )
}