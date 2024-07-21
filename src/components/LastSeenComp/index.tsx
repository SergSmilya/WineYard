import { Box, List, ListItem } from "@mui/material";
// components
import TitleComp from "../TitleComp";
import WineCardItem from "../WineCardItem";
import { WineItem } from "../WineCardItem/types";

// style
const cardStyle = {
  width: "304px",
  display: "flex",
  justifyContent: "center",
  minHeight: { xs: "450px", lg: "378px" },
};

export default function LastSeenComp({ el }: any) {
  return (
    <Box sx={{ padding: { xs: "50px 0 70px", lg: "60px 0 100px" } }}>
      <Box sx={{ marginBottom: { xs: "30px", lg: "44px" } }}>
        <TitleComp>Last seen</TitleComp>
      </Box>
      <ListItem
        sx={{
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          gap: "21.8px",
        }}
      >
        {el.map((item: WineItem) => (
          <List key={item.id} sx={cardStyle}>
            <WineCardItem el={item} />
          </List>
        ))}
      </ListItem>
    </Box>
  );
}
