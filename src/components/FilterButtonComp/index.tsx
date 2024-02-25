import { Button, Typography } from "@mui/material";

interface FilterButton {
    children: string,
    bgdColor: string,
    onClick?: () => void
}

export default function FilterButtonComp({children, bgdColor='#A6EFFF', onClick}:FilterButton) {
    return (
        <Button sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '6px 10px',
                backgroundColor: bgdColor,
                borderRadius:'11px'
            }}
            onClick={onClick}
            >
            <Typography sx={{
                textTransform: 'lowercase',
                lineHeight: 'normal',
                fontSize: '14px',
                color: '#1A202C'
            }}>{children}</Typography>
        </Button>
    )
}