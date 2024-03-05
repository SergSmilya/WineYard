import { useTheme } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import RouterLink from "../../../routes/routerLink";

interface SlideItemProps {
  text: string;
  link: string;
  sx: {
    radius: string;
    justifyContent: string;
    imageUrl: string;
  };
}

function SlideCard({ text, link, sx }: SlideItemProps) {
  const theme = useTheme();
  return (
    <RouterLink to={link} style={{ textDecoration: "none" }}>
      <Box
        sx={{
          backgroundImage: `linear-gradient(65.34deg, rgba(0, 0, 0, 0.6) 14.1%, rgba(0, 0, 0, 0) 38.32%), url(${sx.imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: sx.radius,
          height: "296px",
          width: "440px",
          display: "flex",
          alignItems: "end",
          justifyContent: sx.justifyContent,
        }}
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
    </RouterLink>
  );
}

export default SlideCard;
