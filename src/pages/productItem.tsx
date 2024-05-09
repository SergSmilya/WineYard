import { useEffect } from "react";

import { Box, Container } from "@mui/material";
import { info } from "../theme/palette";
// fetch
import { useGetWineByIdQuery } from "../RTK/wineApi";
// components
import DescriptionOneItemComp from "../components/DescriptionOneItemComp";
import CharacterDescrOneItemComp from "../components/CharacterDescrOneItemComp";
import CustomerSect from "../sections/main/CustomerSect";
import TermsItemWineComp from "../components/TermsItemWineComp";
import LastSeenComp from "../components/LastSeenComp";
// service
import { useParams } from "react-router-dom";

function ProductItem() {
  const { id } = useParams();

  const { data } = useGetWineByIdQuery(id);

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
        {data && <DescriptionOneItemComp data={data} />}
        {data && <CharacterDescrOneItemComp data={data} />}
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
        <CustomerSect />
        {/* !refactoring LastSeenComp*/}
        <LastSeenComp />
      </Container>
    </Box>
  );
}

export default ProductItem;
