import { Box, Stack, Typography } from "@mui/material";
import { secondary, success } from "../../theme/palette";

import elizabethImg from "../../assets/about/elizabeth.svg";
import olhaImg from "../../assets/about/olha.svg";
import artemImg from "../../assets/about/artem.svg";
import innaImg from "../../assets/about/inna.svg";
import sergiyImg from "../../assets/about/sergiy.svg";
import romanImg from "../../assets/about/roman.svg";

interface PersonProps {
  image: string;
  name: string;
  position: string;
}

function TeamMembers() {
  const Person = ({ image, name, position }: PersonProps) => (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "0 auto",
        width: { xs: "140px", lg: "384px" },
      }}
    >
      <Stack sx={{ width: "60px", height: "70px" }}>
        <img src={image} alt="avatar" />
      </Stack>
      <Typography
        variant="h3"
        sx={{
          lineHeight: "30px",
          color: secondary.light,
          margin: "20px 0 8px",
        }}
      >
        {name}
      </Typography>
      <Typography
        variant="h6"
        sx={{ lineHeight: "24px", color: success.light }}
      >
        {position}
      </Typography>
    </Box>
  );

  return (
    <Box
      sx={{
        textAlign: "center",
        margin: { xs: "50px 16px 70px", lg: "120px 0 100px" },
      }}
    >
      <Typography
        variant="h4"
        sx={{
          lineHeight: { xs: "55px", lg: "70px" },
          color: secondary.light,
          marginBottom: { xs: "15px", lg: "26px" },
        }}
      >
        Not a real Business
      </Typography>
      <Typography
        variant="body2"
        sx={{
          lineHeight: "24px",
          color: secondary.light,
          maxWidth: { xs: "329px", lg: "569px" },
          margin: "0 auto",
          paddingBottom: "40px",
        }}
      >
        A student project driven by a willingness to switch career and a love
        for wine
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          margin: "0 auto",
          rowGap: "64px",
          maxWidth: "1300px"
        }}
      >
        <Person
          image={elizabethImg}
          name="Elizabeth"
          position="Project manager"
        />

        <Person image={olhaImg} name="Olha" position="UX/UI designer" />

        <Person image={artemImg} name="Artem" position="QA Engineer" />

        <Person image={innaImg} name="Inna" position="Front-end Engineer" />

        <Person image={sergiyImg} name="Sergiy" position="Front-end Engineer" />

        <Person image={romanImg} name="Roman" position="Back-end Engineer" />
      </Box>
    </Box>
  );
}

export default TeamMembers;
