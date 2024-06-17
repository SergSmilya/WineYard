import { useEffect } from "react";
import { Box, Container } from "@mui/material";
import { info } from "../theme/palette";
// fetch
import { useGetOneItemCollectionQuery } from "../RTK/wineApi";
// components
// import CharacterDescrOneItemComp from "../components/CharacterDescrOneItemComp";
import TermsItemWineComp from "../components/TermsItemWineComp";
import WhatInsideSection from "../sections/giftBox/WhatInsideSection";
import { common } from "@mui/material/colors";
// service
import { useParams } from "react-router-dom";
import MainCollectionItemComp from "../components/MainCollectionItemComp";

export default function CollectionItem() {
  const { id } = useParams();
  const { data } = useGetOneItemCollectionQuery(id);

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
        <MainCollectionItemComp {...data} />
        {/* {data && <CharacterDescrOneItemComp data={data} />} */}
    </Container>
        <Box sx={{ paddingTop: '30px', paddingBottom: "100px", backgroundColor: common.white }}>
          <WhatInsideSection />
        </Box>
    <Container>
        <Box
          sx={{
            width: "656px",
            display: "flex",
            flexDirection: "column",
            gap: "60px",
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