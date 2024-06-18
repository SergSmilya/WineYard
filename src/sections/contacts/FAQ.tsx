import { useState } from "react";

import { Box, Typography } from "@mui/material";
import { success } from "../../theme/palette";

import AccordionItem from "../../components/AccordionItem";
import data from "../../arrayForNeeds/faq.json";

export default function FAQ() {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (_: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Box sx={{ margin: { xs: "50px 16px 70px", lg: "68px 0 105px" } }}>
      <Typography
        textAlign={"center"}
        variant="h4"
        sx={{
          color: success.main,
          lineHeight: "44px",
          marginBottom: { xs: "50px", lg: "41px" },
        }}
      >
        FAQ
      </Typography>
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        sx={{ gap: { xs: "15px", lg: "24px" } }}
      >
        {data.map((item, index) => (
          <AccordionItem
            key={index}
            title={item.title}
            text={item.text}
            expanded={expanded === `panel${index}`}
            handleChange={handleChange(`panel${index}`)}
          />
        ))}
      </Box>
    </Box>
  );
}
