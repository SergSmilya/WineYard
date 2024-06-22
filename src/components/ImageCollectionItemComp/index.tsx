import { Box, Typography } from "@mui/material";
import { common } from "@mui/material/colors";
import { info, primary } from "../../theme/palette";
import { pxToRem, typography } from "../../theme/typography";
import { ICollections } from "../../types/collections";

export default function ImageCollectionItemComp(data: ICollections) {
    const { box_img, box_name, box_quatntity } = data;

    return (
    <Box sx={{
            position: "relative",
            width: "592px",
            height: "550px",
            display: 'flex',
            border: `1px solid ${common.white}`,
            backgroundColor: info.light,
            borderRadius: "20px",
        }}
        >
        <img
            style={{ objectFit: "contain" }}
            src={box_img}
            alt={`${box_name}logo`}
        />
        <Box
            sx={{
            position: "absolute",
            right: '28px',
            bottom: '82px',
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "14px 8px 7px",
            borderRadius: "40px 40px 0 0",
            backgroundColor: info.main,
            }}
        >
            <Typography
                sx={{
                    fontWeight: typography.fontWeightBold,
                    fontSize: pxToRem(15),
                }}
                color="#7D0006"
                >
                18+
            </Typography>
        </Box>
        {box_quatntity <= 5 && <Box sx={{
            position: 'absolute',
            bottom: '38%',
            right: '55%',
            display: "inline-flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "10px 15px",
            gap: "10px",
            borderRadius: "11px",
            backgroundColor: info.dark
        }}>
        <Typography sx={{fontSize: pxToRem(14)}} variant="h6" color={primary.main}>
            <Typography sx={{fontWeight: typography.fontWeightBold}}>Hurry up!</Typography>Less than 5 items!</Typography>
        </Box>}
    </Box>
    )
}