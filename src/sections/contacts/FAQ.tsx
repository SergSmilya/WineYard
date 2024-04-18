import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { primary } from "../../theme/palette";
import arrow from "../../assets/contacts/arrow-down.svg";

export default function FAQ() {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      console.log(event);
      
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        sx={{
          width: "898px",
          border: `1px solid ${primary.main}`,
          borderRadius: "14px!important",
          padding: "40px",
        }}
      >
        <AccordionSummary
          expandIcon={
            <IconButton
              sx={{
                backgroundColor: primary.main,
                color: "white",
                width: "50px",
                height: "50px",
                "&:hover": { backgroundColor: primary.main },
              }}
            >
              <img src={arrow} alt="" />
            </IconButton>
          }
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          sx={{}}
        >
          <Typography
            variant="body2"
            sx={{ lineHeight: "28px", fontSize: "22px" }}
          >
            Do you deliver across Europe?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Absolutely! We deliver delicious wines directly to your doorstep in
            48 European countries.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            Can I return a bottle of wine if I don't like it?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Unfortunately, we cannot accept returns for bottles of wine simply
            because you don't prefer the taste. Wine is a subjective product,
            and what one person enjoys another might not. <br /> However, we can
            accept returns for: Faulty or corked wines: If the wine is spoiled
            or exhibits signs of a cork taint (wet cardboard or moldy aromas),
            please contact us within 14 days of receiving your order. We'll
            happily arrange a replacement or full refund. Damaged bottles: If
            your wine bottle arrives damaged during shipping, please contact us
            immediately. We will arrange for a replacement or refund depending
            on your preference.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            Do you offer gift wrapping or gift messages?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Absolutely! We understand the importance of a special touch when
            sending a gift. You can choose beautiful gift wrapping for your wine
            selections during checkout. We also offer the option to include a
            personalized gift message at no additional cost. Just write about
            that in the comment section while placing an order
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            Are there any age restrictions for ordering alcohol?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            By law, we can only ship alcoholic beverages to customers who are 18
            years of old or above. You may be required to provide proof of age
            during checkout or upon delivery.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
