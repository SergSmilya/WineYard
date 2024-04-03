import { Box, Container } from "@mui/material";
import { info } from "../theme/palette";
// fetch
import { useGetWineByIdQuery } from "../RTK/wineApi";
// components
import DescriptionOneItemComp from "../components/DescriptionOneItemComp";
import CharacteristicsListComp from "../components/CharacteristicsListComp";

function ProductItem() {
  const { data } = useGetWineByIdQuery(7);

  return (
    <Box sx={{backgroundColor: info.main}}>
      <Container>
        {/* BreadCrums */}
        <Box sx={{
          paddingTop: '17px',
          marginBottom: '25px'
        }}>BreadCrums</Box>
        {data && <DescriptionOneItemComp data={data}/>}
        {/* CharacteristicsListComp */}
        {data && <CharacteristicsListComp data={data} />}
      </Container>
    </Box>
  )
}

export default ProductItem