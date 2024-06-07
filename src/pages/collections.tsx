import { Box, Container, List, ListItem, Stack } from "@mui/material";
import bgd from '../assets/giftBox/curated-flight-collections.jpg';
import HeroSectionComp from "../components/HeroSectionComp";
import GiftCardItemComp from "../components/GiftCardItemComp";

import { useGetAllCollectionsQuery } from "../RTK/wineApi";
import { ICollections, ICollectionsApiResponse } from "../types/collections";
import CustomButton from "../components/button";
import { useEffect, useState } from "react";

const itemStyle = {
  width: '304px',
  display: 'flex',
  justifyContent: 'center',
}

export default function Collections() {
  const [perPage, setPerPage] = useState(1);
  const [collections, setCollections] = useState<ICollections[]>([]);

  const { data } = useGetAllCollectionsQuery(perPage);
  const collectionsData: ICollectionsApiResponse | undefined = data;

  useEffect(() => {
    setCollections([]);
  }, [])
  
  useEffect(() => {
    if (collectionsData?.results) {      
      setCollections(prevState => prevState.length ? [...prevState, ...collectionsData.results] : collectionsData.results)
    }
  }, [collectionsData])
  
  return (
    <Box>
      <HeroSectionComp
        descOne="In Wineyard, we believe in exploring and understanding the world of quality wine."
        descTwo="Our 187ml mini bottles offer curated wine flights and fridge packs, perfect for tasting a variety of small-batch wines."
        bgd={bgd}
      >Curated Flights Collections!</HeroSectionComp>
        <Box sx={{
          paddingTop: '60px',
          paddingBottom: '100px',
          backgroundColor: '#F8EDE1'
      }}>
        <Container>
          <Stack gap={3}>
            <List sx={{ display: 'flex', flexWrap: 'wrap', gap: '21px' }}>
              {collections.length > 1 && collections.map(item => (
                <ListItem key={item.id} sx={itemStyle}><GiftCardItemComp itemData={item} /></ListItem>
              ))}
            </List>
            {collectionsData?.count !== collections.length && <Box sx={{width: 'auto', margin: '0 auto'}}>
              <CustomButton
                  color="primary"
                  text="SHOW MORE"
                  height="44px"
                  fontsize="16px"
                  borderRadius="4px"
                  onClick={() => {
                    setPerPage((prevPage) => prevPage + 1);
                  }}
                  customWhite
                />
              </Box>}
            </Stack>
        </Container>
      </Box>
    </Box>
  )
}