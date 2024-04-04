import { Typography } from "@mui/material";
import { common } from "@mui/material/colors";
import { pxToRem } from "../../theme/typography";

export default function FullDescrOneItemWineComp({ children }: {children: string}) {
    return (
        <Typography sx={{
            fontSize: pxToRem(18),
            lineHeight: 'normal',
            letterSpacing: '0.54px'
        }} color={common.black}>{children}</Typography>
    )
}