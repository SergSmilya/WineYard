import { Box, List, ListItem, Stack } from "@mui/material";
import { common } from "@mui/material/colors";
import { primary } from "../../theme/palette";
import AdaptiveNameWineComp from "../AdaptiveNameWineComp";
import NumberPackBtnComp from "../NumberPackBtnComp";
import WinePriceComp from "../WinePriceComp/inedx";
import RouterLink from "../../routes/routerLink";
import { paths } from "../../config/path";
import CustomButton from "../button";
import SecondaryButtonComp from "../SecondaryButtonComp";

import trashIcon from '../../assets/icons/trash.svg';
import arrowRightIcon from '../../assets/icons/arrow-right.svg';

export default function GiftCardItemComp() {
    return (
        <Stack sx={{
            width: '304px',
            display: 'flex',
            border: `1px solid ${common.white}`,
            borderRadius: "10px",
            overflow: 'hidden',
            transition: "all 250ms",
            position: 'relative',
            '&:hover': {
              borderColor: primary.main,
              '.textBlock': {
                marginBottom: '65px'
              },
              ".buttonHide": {
                bottom: '10%',
                }
            }
          }}>
            {/* IMG */}
            <Box>
              <img src="" alt="giftBox" />
            </Box>
            {/* Description */}
            <Box sx={{
              padding: '10px 15px 15px',
              backgroundColor: common.white,
              display: 'flex',
              flexDirection: 'column',
              gap: '21px',
              lineHeight: 'normal',
            borderRadius: "10px",

            }}>
              <Stack className="textBlock" spacing={1}>
                <AdaptiveNameWineComp>Raspberry Rosé 6-pack</AdaptiveNameWineComp>
                <Stack sx={{justifyContent: 'space-between', alignItems: 'center'}} direction="row">
                  <List sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px'
                  }}>
                    <ListItem sx={{width: 'auto'}}>
                      <NumberPackBtnComp />
                    </ListItem>
                    <ListItem sx={{width: 'auto'}}>
                      <NumberPackBtnComp second={false} />
                    </ListItem>
                  </List>
                  <WinePriceComp>1755</WinePriceComp>
                </Stack>
              </Stack>
                <Box
                  className="buttonHide"
                sx={{
                    width: '274px',
                    position: 'absolute',
                    bottom: '-50%',
                    transition: "all 250ms",
                    display: "flex",
                    gap: "5px",
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
    )
}