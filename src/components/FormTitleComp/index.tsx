import { Typography } from "@mui/material";
import { success } from "../../theme/palette";

export default function FormTitleComp({ children }: { children: string }) {
    return (
        <Typography sx={{
            lineHeight: 'normal',
            letterSpacing: '-0.66px'
        }} variant="subtitle2" color={success.dark}>{children}</Typography>
    )
}