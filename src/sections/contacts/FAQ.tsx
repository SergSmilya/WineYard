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
    <Box margin={"68px 0 137px"}>
      <Typography
        textAlign={"center"}
        variant="h4"
        sx={{ color: success.main, lineHeight: "44px", marginBottom: "41px" }}
      >
        FAQ
      </Typography>
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        gap={"24px"}
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
