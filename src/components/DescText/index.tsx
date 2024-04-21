import { Typography } from "@mui/material";
import { primary, secondary } from "../../theme/palette";

interface IDescText {
    children: string
    beforeTitle: string
}

export default function DescText({ children, beforeTitle }: IDescText) {
    return (
        <>
            <Typography variant="h5" sx={{ marginBottom: "5px" }} color={primary.main}>
                {beforeTitle}
            </Typography>
            <Typography
            variant="h4"
            sx={{ lineHeight: "60px", marginBottom: "50px" }} color={secondary.light}
            >
                {children}
            </Typography>
        </>
    )
}