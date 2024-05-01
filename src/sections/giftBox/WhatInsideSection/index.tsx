import { Box, List, ListItem, Typography } from "@mui/material";
import TitleComp from "../../../components/TitleComp";
import { success } from "../../../theme/palette";
import { pxToRem, typography } from "../../../theme/typography";

import imgBoutles from '../../../assets/collection/six-boutles/six-boutles.jpg';
import imgBoutles2X from '../../../assets/collection/six-boutles/six-boutles@2x.jpg';

const commonTextStyle = { fontSize: pxToRem(18), fontWeight: typography.fontWeightBold, lineHeight: '28px' };
const BoxDescriptionStyle = {
    width: '570px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '26px',
};

export default function WhatInsideSection() {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between'}}>
            {/* Description */}
            <Box sx={BoxDescriptionStyle}>
                <TitleComp size="109%" position="left">What’s inside?</TitleComp>
                <List>
                    <ListItem>
                        <Typography sx={commonTextStyle} color={success.main}>Each box contains 6 bottles</Typography>
                    </ListItem>
                    <ListItem>
                        <Typography sx={commonTextStyle} color={success.main}>The wines in the box are all wrapped</Typography>
                    </ListItem>
                    <ListItem>
                        <Typography sx={commonTextStyle} color={success.main}>Each bottle contains a unique code and card with all information about the wine and winemaker</Typography>
                    </ListItem>
                    <ListItem>
                        <Typography sx={commonTextStyle} color={success.main}>Delivered to your home in a nice sturdy box</Typography>
                    </ListItem>
                    <ListItem>
                        <Typography sx={commonTextStyle} color={success.main}>Made with the expertise of sommeliers</Typography>
                    </ListItem>
                </List>
                <Typography sx={commonTextStyle} color={success.main}>Enjoy your dose of grapes and friends!</Typography>
            </Box>
            <Box>
                <img srcSet={`${imgBoutles} 1x, ${imgBoutles2X} 2x`}
                src={imgBoutles} alt="six-boutles" />
            </Box>
        </Box>
    )
}