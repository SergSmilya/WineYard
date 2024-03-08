import { Box, ListItem, Typography } from "@mui/material";

import FilterButtonComp from "../../../../components/AdditionalnfoComp";
import FilterButtonComp from "../../../../components/FilterButtonComp";


interface CustomerItem {
    children: string;
    desc: string;
}

export default function CustomerItem({children, desc} : CustomerItem) {
    return (
        <ListItem sx={{
            flexBasis: '33%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '280px',
            backgroundColor: '#FFFFFF',
            borderRadius: '20px',
            padding: '22px 0'
        }}>
            <img style={{backgroundColor: 'pink'}} src="" alt="fotoWine" width='145px' height='238px' />
            <Box>
                <Box sx={{
                    color: '#1A202C',
                    width: '224px'
                }}>
                    <Typography sx={{
                        width: '127px',
                        lineHeight: 'normal',
                        marginBottom:'15px'
                    }} variant="subtitle1">{children}</Typography>
                    <Typography sx={{
                        width: '209px',
                        fontWeight: '400',
                        fontSize: '14px',
                        lineHeight: '130%',
                        marginBottom:'30px'
                    }}>{desc}</Typography>
                </Box>

                <Box sx={{
                    display: 'flex',
                    gap: '5px',
                }}>
                    {/* required bgdColor */}
                    <FilterButtonComp bgdColor="#A6EFFF">dry</FilterButtonComp>
                    <FilterButtonComp bgdColor="#FFA6A6;">red wine</FilterButtonComp>
                </Box>
            </Box>
        </ListItem>
    )
}