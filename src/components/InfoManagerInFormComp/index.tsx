import { Box, Typography } from "@mui/material";
import { success } from "../../theme/palette";
import CustomIconComp from "../CustomIconComp";
import infoIcon from '../../assets/icons/information-variant-circle-outline.svg';

export default function InfoManagerInFormComp() {
    return (
        <Box sx={{ display: 'flex', columnGap: '12px' }}>
            <Box sx={{ width: '24px', height: '24px'}}>
            <CustomIconComp>{infoIcon}</CustomIconComp>
            </Box>
            <Typography sx={{
            maxWidth: '542px',
            fontWeight: '500',
            letterSpacing: '0.48px',
            lineHeight: 'normal',
            }} color={success.dark}>Our manager will contact you after placing the order and will provide a settlement account number for
            payment on your email.</Typography>
        </Box>
    )
}