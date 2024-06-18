import { Box, Container, List, ListItem } from "@mui/material";
import bgd from '../assets/giftBox/curated-flight-collections.jpg';
import HeroSectionComp from "../components/HeroSectionComp";

import { useGetAllCollectionsQuery } from "../RTK/wineApi";
import CollectionCardItemComp from "../components/CollectionCardItemComp";
import { ICollections } from "../types/collections";
// import { useEffect } from "react";

const itemStyle = {
  width: '304px',
  display: 'flex',
  justifyContent: 'center',
}

export default function Collections() {

  const { data } = useGetAllCollectionsQuery(null);
  
  // useEffect(() => {
  //   if (data) {
  //     const result = data.results.reduce((acc, item, index, arr) => {
  //       // acc[item.box_name] = item.box_name;
  //       acc.push(item.box_name);
  //       return acc;
  //     }, [])

  //     const double = result.filter((item, index, arr) => {
  //      return arr.indexOf(item) !== index;
  //     }).join()
  //     console.log(double)

  //     data.results.forEach((item) => {
  //       if (double.includes(item.box_name)) {
  //         console.log(item)
  //       }
  //     })
      
  //   } 
  // }, [data])
  
  
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
            {data && <List sx={{ display: 'flex', flexWrap: 'wrap', gap: '21px' }}>
              {data.results.map((item: ICollections) => (
                <ListItem key={item.id} sx={itemStyle}><CollectionCardItemComp {...item} /></ListItem>
              ))}
            </List>}              
        </Container>
      </Box>
    </Box>
  )
}