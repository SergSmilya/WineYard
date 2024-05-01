import { Typography } from "@mui/material";
import { secondary } from "../../theme/palette";
// type
interface Title {
    children: string;
    size?: string;
    spacing?: string;
    position?: 'center' | 'left';
}

export default function TitleComp({ children, size = '71.88%', spacing, position = 'center' }: Title) {
    // size = '71.88%' for LastSeenComponent & Let customer ...
    return (
        <Typography sx={{
            lineHeight: size,
            letterSpacing: spacing ? spacing : null
        }} variant="h4"
            color={secondary.light}
            align={position}>{children}</Typography>
    )
}