import { useDispatch } from "react-redux";

import { Box, Typography } from "@mui/material";
import { info } from "../../../../theme/palette";

import { useScrollToSection } from "../../../../hooks/useScrollToSection";
import { setActiveCategory } from "../../../../store/categoriesSlice";

interface SlideItemProps {
  text: string;
  sx: {
    radius: string;
    justifyContent: string;
    imageUrl: string;
  };
  categoryId: number;
}

function SlideCard({ text, sx, categoryId }: SlideItemProps) {
  const dispatch = useDispatch();

  const handleClick = () => {
    useScrollToSection("wine-with-dish");
    dispatch(setActiveCategory(categoryId));
  };

  return (
    <Box
      sx={{
        backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.6) 14.1%, rgba(0, 0, 0, 0) 38.32%), url(${sx.imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: sx.radius,
        height: { xs: "110px", lg: "296px" },
        width: { xs: "160px", lg: "440px" },
        display: "flex",
        alignItems: "end",
        justifyContent: sx.justifyContent,
        cursor: "pointer",
      }}
      onClick={handleClick}
    >
      <Typography
        sx={{
          color: info.main,
          fontSize: { xs: "14px", lg: "32px" },
          lineHeight: "30px",
          fontWeight: "700",
          margin: { xs: "0 5px", lg: "13px" },
        }}
      >
        {text}
      </Typography>
    </Box>
  );
}

export default SlideCard;
