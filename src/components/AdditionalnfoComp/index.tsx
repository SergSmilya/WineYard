import { Box, Typography } from "@mui/material";

interface FilterButton {
    children: string,
    bgdColor: string,
}

export default function AdditionalnfoComp({children, bgdColor='#A6EFFF'}:FilterButton) {
    return (
        <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '6px 10px',
                backgroundColor: bgdColor,
                borderRadius:'11px'
            }}
            >
            <Typography sx={{
                textTransform: 'lowercase',
                lineHeight: 'normal',
                fontSize: '14px',
                color: '#1A202C'
            }}>{children}</Typography>
        </Box>
    )
}