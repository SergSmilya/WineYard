import { Typography } from "@mui/material";

export default function OptionItem({children}: {children: string}) {
    return (
        <Typography sx={{
            textAlign: 'center',
            fontSize: '22px',
            fontWeight: 500,
            lineHeight: '150px',
            letterSpacing: '-0.44px'
        }}>{children}</Typography>
    )
}