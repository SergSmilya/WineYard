import { Box, Container, List, ListItem } from "@mui/material";
import bgd from "../assets/giftBox/curated-flight-collections.jpg";
import HeroSectionComp from "../components/HeroSectionComp";
import { useGetAllCollectionsQuery } from "../RTK/wineApi";
import CollectionCardItemComp from "../components/CollectionCardItemComp";
import { ICollections } from "../types/collections";
import { useEffect, useState } from "react";

const itemStyle = {
  width: "304px",
  display: "flex",
  justifyContent: "center",
};

export default function Collections() {
  const { data } = useGetAllCollectionsQuery(null);
  const [list, setList] = useState<ICollections[]>([]);

  useEffect(() => {
    if (data && data.results) {
      const uniqueBoxNames = new Set<string>();
      const uniqueResults = data.results.filter((item: ICollections) => {
        if (!uniqueBoxNames.has(item.box_name)) {
          uniqueBoxNames.add(item.box_name);
          return true;
        }
        return false;
      });

      setList(uniqueResults);
    }
  }, [data]);

  return (
    <Box>
      <HeroSectionComp
        descOne="In Wineyard, we believe in exploring and understanding the world of quality wine."
        descTwo="Our 187ml mini bottles offer curated wine flights and fridge packs, perfect for tasting a variety of small-batch wines."
        bgd={bgd}
      >
        Curated Flights Collections!
      </HeroSectionComp>
      <Box
        sx={{
          paddingTop: {xs: "50px",lg: "60px"},
          paddingBottom: {xs: "70px", lg: "100px"},
          backgroundColor: "#F8EDE1",
        }}
      >
        <Container>
          {list.length > 0 && (
            <List
              sx={{
                display: "flex",
                justifyContent: { xs: "center", lg: "flex-start" },
                flexWrap: "wrap",
                gap: "21px",
              }}
            >
              {list.map((item: ICollections) => (
                <ListItem key={item.id} sx={itemStyle}>
                  <CollectionCardItemComp {...item} />
                </ListItem>
              ))}
            </List>
          )}
        </Container>
      </Box>
    </Box>
  );
}
