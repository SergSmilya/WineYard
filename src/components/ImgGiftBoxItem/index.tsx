import { Box, Typography } from '@mui/material';
import mysteryBoxImg from '../../assets/collection/mystery-box.jpg';
import { common } from '@mui/material/colors';
import { info } from '../../theme/palette';
import { pxToRem, typography } from '../../theme/typography';

export default function ImgGiftBoxItem() {
    return (
        <Box
            sx={{
                width: "592px",
                height: "fit-content",
                position: "relative",
                padding: "34px 27px 26px",
                backgroundColor: common.white,
                borderRadius: "20px",
            }}
    >
      <img
        style={{ objectFit: "contain" }}
        src={mysteryBoxImg}
        alt={`${mysteryBoxImg}logo`}
        width={488}
        height={455}
      />
      <Box
        sx={{
          position: "absolute",
          right: 0,
          transform: "translate(-100%, -100%)",
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
            fontWeight: typography.fontWeightRegular,
            fontSize: pxToRem(15),
          }}
          color="#7D0006"
        >
          18+
        </Typography>
      </Box>
    </Box>
    )
}