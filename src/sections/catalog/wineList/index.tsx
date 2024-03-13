import { Box, List, ListItem, ListItemText } from "@mui/material";
import { useWineList } from "../../../hooks/useWineList";
import { Wines } from "../../../types/wines";

function WineList() {
  const wineData: Wines = useWineList();
  const wines = wineData.results;

  return (
    <Box>
      <List>
        {wines && wines.map((wine: any) => (
          <ListItem key={wine.id} sx={{dispaly: "flex", flexDirection: "column", alignItems: "start"}}>
            <ListItemText primary={wine.goods_name} />
            <ListItemText primary={wine.goods_price} />
            <ListItemText primary={wine.country_goods.name} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default WineList;
