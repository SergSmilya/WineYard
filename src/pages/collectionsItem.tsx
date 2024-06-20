import { useEffect } from "react";
import { Box, Container, Typography } from "@mui/material";
import { info, success } from "../theme/palette";
// fetch
import { useGetOneItemCollectionQuery } from "../RTK/wineApi";
// components
// import CharacterDescrOneItemComp from "../components/CharacterDescrOneItemComp";
import TermsItemWineComp from "../components/TermsItemWineComp";
// service
import { useParams } from "react-router-dom";
import MainCollectionItemComp from "../components/MainCollectionItemComp";
import FullDescrOneItemWineComp from "../components/FullDescrOneItemWineComp";
import { pxToRem } from "../theme/typography";
// style
const descStyle = {
  width: "320px",
  textAlign: "center",
  paddingBottom: '22px',
  fontSize: pxToRem(22),
  letterSpacing: '-0.44px',
  lineHeight: '150%',
  borderBottom: `4px solid ${success.dark}`,
  marginBottom: '50px'
}

export default function CollectionItem() {
  const { id } = useParams();
  const { data } = useGetOneItemCollectionQuery(Number(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box sx={{ backgroundColor: info.main }}>
      <Container>
        {/* BreadCrums */}
        <Box
          sx={{
            paddingTop: "17px",
            marginBottom: "25px",
          }}
        >
          BreadCrums
        </Box>
        {data && <MainCollectionItemComp {...data} />}
        <Box sx={{ width: "656px", paddingTop: '60px', paddingBottom: '100px' }}>
          <Typography sx={descStyle} variant="subtitle2" color={success.dark}>Description</Typography>
          {data && <FullDescrOneItemWineComp>{data.box_large_description}</FullDescrOneItemWineComp>}
        </Box>
        <Box
          sx={{
            width: "656px",
            display: "flex",
            flexDirection: "column",
            gap: "60px",
            paddingBottom: '100px'
          }}
        >
          <TermsItemWineComp
            text="Wineyard is shipping wine all over the Europe. Ready to ship today, delivery time appr. 2-4 workdays.  We will send you a tracking number so that you can track the order and know the day it will be delivered. We ship the wine in special boxes in order to protect them from any possible breakages. Shipping cost depends of weight and destination country."
            nameIcon={"delivery"}
          >
            Terms of delivery
          </TermsItemWineComp>

          <TermsItemWineComp
            text="Our manager will contact you after placing the order and will provide a settlement account number for payment on your email.
          The online store uses electronic document management, so a fiscal check will be sent electronically via SMS to all orders. If you need to receive a printed copy, please indicate this information in the comments to the order."
            nameIcon={"card"}
          >
            Terms of payment
          </TermsItemWineComp>
        </Box>        
      </Container>
    </Box>
  );
}