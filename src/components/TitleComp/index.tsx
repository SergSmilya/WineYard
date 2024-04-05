import { Typography } from "@mui/material";
import { secondary } from "../../theme/palette";
// type
interface Title {
    children: string;
    size?: string;
    spacing?: string
}

export default function TitleComp({ children, size = '71.88%', spacing }: Title) {
    // size = '71.88%' for LastSeenComponent & Let customer ...
    return (
        <Typography sx={{
            lineHeight: size,
            letterSpacing: spacing ? spacing : ''
        }} variant="h4"
            color={secondary.light}
            textAlign={'center'}>{children}</Typography>
    )
}