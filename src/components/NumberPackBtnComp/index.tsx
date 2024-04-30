import { Box, Typography } from "@mui/material"
import { info, success } from "../../theme/palette"
import { pxToRem, typography } from "../../theme/typography"

const btnStyle = {
    display: "inline-flex",
    padding: "6px 10px",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    border: `1px solid ${info.dark}`,
    borderRadius: "11px",
}

export default function NumberPackBtnComp({second = true}) {
    const bgdColor = second ? info.dark : 'transparent';

    return (
        <Box sx={{
            ...btnStyle,
            backgroundColor: bgdColor
        }}>
            <Typography sx={{
                fontSize: pxToRem(14),
                fontWeight: typography.fontWeightRegular
            }} color={success.dark}>6-pack</Typography>
        </Box>
    )
}