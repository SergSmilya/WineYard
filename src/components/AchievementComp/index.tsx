import { List, ListItem, Typography } from "@mui/material";
import { primary, success } from "../../theme/palette";

import figures from "./figers.json";

export default function AchievementComp() {
  return (
    <List
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(2,1fr)",
        gridTemplateRows: "repeat(2,1fr)",
        alignItems: "start",
        columnGap: { xs: "18px", lg: "32px" },
        rowGap: "48px",
      }}
    >
      {figures.map((item) => (
        <ListItem
          sx={{
            maxWidth: "264px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
          key={item.id}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: "48px",
              lineHeight: "72px",
              marginBottom: "5px",
            }}
            color={primary.main}
          >
            {item.digit}
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontSize: { xs: "18px", lg: "22px" },
              lineHeight: { xs: "22px", lg: "28px" },
            }}
            color={success.main}
          >
            {item.desc}
          </Typography>
        </ListItem>
      ))}
    </List>
  );
}
