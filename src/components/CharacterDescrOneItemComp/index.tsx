import { useState } from "react";
import { Box, List, ListItemButton } from "@mui/material";
import { success } from "../../theme/palette";
import { pxToRem, typography } from "../../theme/typography";
// components
import CharacteristicsListComp from "../CharacteristicsListComp";
import FullDescrOneItemWineComp from "../FullDescrOneItemWineComp";
// types
import WineById from "../../types/wineById";
// styles
const itemButtonStyle = {
    display: 'flex',
    justifyContent: 'center',
    padding: 0,
    paddingBottom: '22px',
    opacity: '0.6',
    fontSize: pxToRem(22),
    letterSpacing: '-0.44px',
    lineHeight: '150%',
    '&.Mui-selected': {
        backgroundColor: 'transparent',
        borderBottom: `4px solid ${success.dark}`,
        color: success.dark,
        opacity: 1,
        fontWeight: typography.fontWeightSemiBold
    }
}

export default function CharacterDescrOneItemComp({ data }: WineById) {
    const [isShowCharacteristic, setIsShowCharacteristic] = useState(true);

    function handleSwitch() {
        if (isShowCharacteristic) {
            setIsShowCharacteristic(false);
            return;
        }
        setIsShowCharacteristic(true)
    }
    return (
        <Box sx={{maxWidth: '640px', marginBottom: '100px' }}>
            <List sx={{
                display: 'flex',
                borderBottom: '1px solid #90A3BF',
                marginBottom: '50px',
                color: success.dark,
            }}>
                <ListItemButton sx={itemButtonStyle} onClick={handleSwitch} selected={isShowCharacteristic} disableGutters dense>Characteristics</ListItemButton>    
                <ListItemButton sx={itemButtonStyle} onClick={handleSwitch} selected={!isShowCharacteristic} disableGutters dense>Description</ListItemButton>     
            </List>
            <Box>
                {isShowCharacteristic && data ? <CharacteristicsListComp data={data} /> : <FullDescrOneItemWineComp>{data.goods_detailed_description}</FullDescrOneItemWineComp> }
            </Box>
        </Box>
    )
}