import { useTheme } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import { useScrollToSection } from "../../../../hooks/useScrollToSection";

interface SlideItemProps {
  text: string;
  sx: {
    radius: string;
    justifyContent: string;
    imageUrl: string;
  };
}

function SlideCard({ text, sx }: SlideItemProps) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.6) 14.1%, rgba(0, 0, 0, 0) 38.32%), url(${sx.imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: sx.radius,
        height: "296px",
        width: "440px",
        display: "flex",
        alignItems: "end",
        justifyContent: sx.justifyContent,
        cursor: "pointer"
      }}
      onClick={() => useScrollToSection("wine-with-dish")}
    >
        <Typography
          sx={{
            color: theme.palette.info.main,
            fontSize: "32px",
            lineHeight: "30px",
            fontWeight: "700",
            margin: "13px",
          }}
        >
          {text}
        </Typography>
    </Box>
  );
}

export default SlideCard;
