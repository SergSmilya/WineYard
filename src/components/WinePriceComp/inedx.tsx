import { Typography } from "@mui/material";
import { pxToRem, typography } from "../../theme/typography";
import { primary } from "../../theme/palette";

export default function WinePriceComp({ children }: { children: string | number }) {
    return (
        <Typography
            sx={{
            fontSize: pxToRem(20),
            fontWeight: typography.fontWeightSemiBold,
            lineHeight: "normal",
            }}
            color={primary.main}
            >
            {children}<span>&#8372;</span>
        </Typography>
    )
}