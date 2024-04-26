import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { primary, success } from "../../theme/palette";
import arrow from "../../assets/contacts/arrow-down.svg";

interface AccordionItemProps {
  title: string;
  text: string;
  expanded: boolean;
  handleChange: (
    event: React.SyntheticEvent<Element, Event>,
    isExpanded: boolean
  ) => void;
}

function AccordionItem({
  title,
  text,
  expanded,
  handleChange,
}: AccordionItemProps) {
  return (
    <Accordion
      expanded={expanded}
      onChange={handleChange}
      sx={{
        width: "898px",
        border: `2px solid ${primary.main}`,
        borderRadius: "14px!important",
        padding: "40px",
        boxShadow: "none",
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
          sx={{ lineHeight: "28px", fontSize: "22px", color: success.darker }}
        >
          {title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <div className="faqList">
          <Typography
            sx={{
              color: success.lighter,
              fontSize: "18px",
              lineHeight: "30px",
            }}
            dangerouslySetInnerHTML={{ __html: text }}
          />
        </div>
      </AccordionDetails>
    </Accordion>
  );
}

export default AccordionItem;
