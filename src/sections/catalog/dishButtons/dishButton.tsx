import { Box, Button, Typography } from "@mui/material";
import { info } from "../../../theme/palette";

interface SlideItemProps {
  text: string;
  sx: {
    radius: string;
    justifyContent: string;
    imageUrl: string;
  };
  onClick: () => void;
}

function DishButton({ text, sx, onClick }: SlideItemProps) {
  return (
    <Box
      sx={{
        backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.6) 14.1%, rgba(0, 0, 0, 0) 38.32%), url(${sx.imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: sx.radius,
        height: "110px",
        width: "235px",
      }}
    >
      <Button
        color="info"
        sx={{
          borderRadius: sx.radius,
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "end",
          justifyContent: sx.justifyContent,
        }}
        onClick={onClick}
      >
        <Typography
          sx={{
            color: info.main,
            fontSize: "16px",
            lineHeight: "16px",
            fontWeight: "700",
            margin: "0px 2px",
            textTransform: "capitalize",
          }}
        >
          {text}
        </Typography>
      </Button>
    </Box>
  );
}

export default DishButton;
