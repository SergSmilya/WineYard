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
import { useLocation, useParams } from "react-router-dom";
import CustomBreadcrumbsComp from "../components/CustomBreadcrumbsComp";
import { addItem } from "../store/lastSeenSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";

function ProductItem() {
  const dispatch = useDispatch();
  const lastSeenList = useSelector((state: RootState) => state.lastSeen);
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  const { id } = useParams();

  const { data } = useGetWineByIdQuery(id);

  useEffect(() => {
    window.scrollTo(0, 0);
    data && dispatch(addItem(data));
  }, [data, dispatch]);

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
          <CustomBreadcrumbsComp pathnames={pathnames}>
            {data?.goods_name}
          </CustomBreadcrumbsComp>
        </Box>
        {data && <DescriptionOneItemComp data={data} />}
        {data && <CharacterDescrOneItemComp data={data} />}
        <Box
          sx={{
            maxWidth: "656px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "60px",
            margin: { xs: "120px 0 70px", lg: "100px 0 40px" },
          }}
        >
          <TermsItemWineComp title="Terms of delivery" nameIcon={"delivery"}>
                Wineyard is shipping wine all over the Europe. Ready to ship
                today, delivery time appr. 2-4 workdays. We will send you a
                tracking number so that you can track the order and know the day
                it will be delivered.
                <br /><br />
                We ship the wine in special boxes in order to protect them from
                any possible breakages.
                <br /><br />
                Shipping cost depends of weight and destination country.
          </TermsItemWineComp>

          <TermsItemWineComp title="Terms of payment" nameIcon={"card"}>
                Our manager will contact you after placing the order and will
                provide a settlement account number for payment on your email.
                <br /><br />
                The online store uses electronic document management, so a
                fiscal check will be sent electronically via SMS to all orders.
                If you need to receive a printed copy, please indicate this
                information in the comments to the order.

          </TermsItemWineComp>
        </Box>
        <CustomerSect />

        {lastSeenList.length > 1 && <LastSeenComp el={lastSeenList} />}
      </Container>
    </Box>
  );
}

export default ProductItem;
