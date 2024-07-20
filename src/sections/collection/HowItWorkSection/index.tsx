import { Box, Stack, Typography } from "@mui/material";
import ImgHowItWork from "../../../assets/collection/collection_how_it_works.jpg";
import TitleComp from "../../../components/TitleComp";
import { primary } from "../../../theme/palette";

export default function HowItWorkSection() {
  return (
    <Box sx={{ padding: {lg: "60px 0 100px"} }}>
      <Stack
        sx={{
          display: "flex",
          flexDirection: { xs: "column-reverse", lg: "row" },
          alignItems: "center",
          gap: {xs: "30px", lg: "96px"},
        }}
      >
        <Box
          sx={{
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            maxHeight: "517px",
            maxWidth: "576px",
          }}
        >
          <img src={ImgHowItWork} alt="desc" loading="lazy" />
        </Box>
        <Box
          display={"flex"}
          flexDirection={"column"}
          gap={{ xs: "15px", lg: "50px" }}
          maxWidth={"500px"}
        >
          <TitleComp size="109%" position="left">
            How it works
          </TitleComp>
          <Box display={"flex"} flexDirection={"column"} gap={"30px"}>
            <Stack display={"flex"} direction={"column"} gap={"15px"}>
              <Typography
                sx={{
                  color: primary.main,
                  fontSize: { xs: "24px", lg: "36px" },
                  lineHeight: { xs: "28px", lg: "36px" },
                  fontWeight: 600,
                }}
              >
                1. Pick Your Wine Passport
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "16px", lg: "18px" },
                  lineHeight: { xs: "20px", lg: "28px" },
                }}
              >
                Imagine yourself strolling through Italian vineyards, exploring
                charming French villages, or feeling the cool air of a Georgian
                cellar. Choose the country that sparks your curiosity!
              </Typography>
            </Stack>
            <Stack display={"flex"} direction={"column"} gap={"15px"}>
              <Typography
                sx={{
                  color: primary.main,
                  fontSize: { xs: "24px", lg: "36px" },
                  lineHeight: { xs: "28px", lg: "36px" },
                  fontWeight: 600,
                }}
              >
                2. Order & Embark on Your Journey!
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "16px", lg: "18px" },
                  lineHeight: { xs: "20px", lg: "28px" },
                }}
              >
                Place your order and get ready to embark on a delicious
                adventure! Each box is packed with carefully chosen wines, ready
                to transport your taste buds to a new corner of the world.
              </Typography>
            </Stack>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
}
