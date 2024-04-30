import { Box, Container, List, ListItem, Stack, Typography } from "@mui/material";
import bgd from '../assets/giftBox/curated-flight-collections.jpg';
import HeroSectionComp from "../components/HeroSectionComp";
import { common } from "@mui/material/colors";
import AdaptiveNameWineComp from "../components/AdaptiveNameWineComp";
import { info, primary, success } from "../theme/palette";
import WinePriceComp from "../components/WinePriceComp/inedx";
import { pxToRem, typography } from "../theme/typography";
import RouterLink from "../routes/routerLink";
import { paths } from "../config/path";
import CustomButton from "../components/button";
import SecondaryButtonComp from "../components/SecondaryButtonComp";
import trashIcon from '../assets/icons/trash.svg';
import arrowRightIcon from '../assets/icons/arrow-right.svg';

function GiftBox() {
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
          <Stack sx={{
            border: `1px solid ${common.white}`,
            borderRadius: "10px",
            '&:hover': {
              borderColor: primary.main
            }
          }}>
            {/* IMG */}
            <Box>
              <img src="" alt="giftBox" />
            </Box>
            {/* Description */}
            <Box sx={{
              padding: '10px 15px 15px',
              backgroundColor: common.white
            }}>
              <Stack>
                {/* Name Wine */}
                <AdaptiveNameWineComp>Raspberry Rosé 6-pack</AdaptiveNameWineComp>
                {/* Quantity */}
                <Stack direction="row">
                  <List sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px'
                  }}>
                    <ListItem>
                      {/* One Item */}
                      <Box sx={{
                        display: "inline-flex",
                        padding: "6px 10px",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "10px",
                        border: `1px solid ${info.dark}`,
                        borderRadius: "11px",
                        // backgroundColor will change
                        backgroundColor: info.dark
                        // text
                      }}>
                        <Typography sx={{
                          fontSize: pxToRem(14),
                          fontWeight: typography.fontWeightRegular
                        }} color={success.dark}> 6-pack</Typography></Box>
                    </ListItem>
                    <ListItem>
                      {/* One Item */}
                      <Box sx={{
                        display: "inline-flex",
                        padding: "6px 10px",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "10px",
                        border: `1px solid ${info.dark}`,
                        borderRadius: "11px",
                        // backgroundColor will change
                        backgroundColor: 'transparent'
                        // text
                      }}>
                        <Typography sx={{
                          fontSize: pxToRem(14),
                          fontWeight: typography.fontWeightRegular
                        }} color={success.dark}>12-pack</Typography></Box>
                    </ListItem>
                  </List>
                  {/* Price */}
                  <WinePriceComp>1755</WinePriceComp>
                </Stack>
              </Stack>
               {/* Block button */}
                <Box
                  className="buttonHide"
                  sx={{
                    position: "absolute",
                    width: "274px",
                    display: "flex",
                    justifyContent: 'space-between',
                    gap: "5px",
                    bottom: 0,
                    transform: "translate(110%, -15px)",
                  }}
                >
                  <RouterLink to={paths.CARTPAGE} >
                    <CustomButton
                    color="primary"
                    text="Buy"
                    width="140px"
                    height="44px"
                    borderRadius="4px"
                  />
                  </RouterLink>

                  <SecondaryButtonComp onClick={() => {
                    // toast.success(`${goods_name} Wine added to cart`);
                    // dispatch(addWine(el));
                  }}>{trashIcon}</SecondaryButtonComp>
                  
                  <SecondaryButtonComp onClick={() => {
                      // navigate(`/product/${id}`)
                    }}>{arrowRightIcon}</SecondaryButtonComp>

                </Box>
            </Box>
          </Stack>
        </Container>
      </Box>
      
    </Box>
  )
}

export default GiftBox