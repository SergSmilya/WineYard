import { Box, Typography } from "@mui/material";
import { info, success } from "../../theme/palette";
import { pxToRem, typography } from "../../theme/typography";
import { btnStyle } from '../../reusableStyles';

export default function StaticQuantityCollectionComp({ children = 6 }) {
    return (
        <Box sx={{
            ...btnStyle,
            backgroundColor: info.dark
        }}>
            <Typography sx={{
                fontSize: pxToRem(14),
                fontWeight: typography.fontWeightRegular
            }} color={success.dark}>{`${children}-pack`}</Typography>
        </Box>
    )
}