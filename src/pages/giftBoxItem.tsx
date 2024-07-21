import { useEffect } from "react";
import { Box, Container } from "@mui/material";
import { info } from "../theme/palette";
import { common } from "@mui/material/colors";
import TermsItemWineComp from "../components/TermsItemWineComp";
import WhatInsideSection from "../sections/giftBox/WhatInsideSection";
import { useDispatch } from "react-redux";
import { getGiftBoxItem } from "../store/giftBoxItemSlice";
import { useLocation, useParams } from "react-router-dom";
import CustomBreadcrumbsComp from "../components/CustomBreadcrumbsComp";
import ImgGiftBoxItem from "../components/ImgGiftBoxItem";
import GiftBoxDescItem from "../components/GiftBoxDescItem";
import giftBoxes from "../arrayForNeeds/giftBoxes.json";

export default function GiftBoxItem() {
  const dispatch = useDispatch();
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  const { id } = useParams();
  const numberId = Number(id);

  const [data] = giftBoxes.filter((item) => item.id === numberId);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getGiftBoxItem(Number(id)));
  }, [dispatch, id]);

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
            {data?.giftBox_name}
          </CustomBreadcrumbsComp>
        </Box>
        {/* Description */}
        <Box
          sx={{
            paddingBottom: "100px",
            display: "flex",
            flexDirection: { xs: "column", lg: "row" },
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <ImgGiftBoxItem />
          <GiftBoxDescItem {...data} />
        </Box>
      </Container>
      <Box
        sx={{
          paddingTop: "60px",
          paddingBottom: "100px",
          backgroundColor: common.white,
        }}
      >
        <Container>
          <WhatInsideSection />
        </Container>
      </Box>
      <Container>
        <Box
          sx={{
            width: { xs: "320px", lg: "656px" },
            paddingTop: "60px",
            paddingBottom: "100px",
            display: "flex",
            flexDirection: "column",
            gap: "60px",
          }}
        >
          <TermsItemWineComp title="Terms of delivery" nameIcon={"delivery"}>
            Wineyard is shipping wine all over the Europe. Ready to ship today,
            delivery time appr. 2-4 workdays. We will send you a tracking number
            so that you can track the order and know the day it will be
            delivered.
            <br />
            <br />
            We ship the wine in special boxes in order to protect them from any
            possible breakages.
            <br />
            <br />
            Shipping cost depends of weight and destination country.
          </TermsItemWineComp>

          <TermsItemWineComp title="Terms of payment" nameIcon={"card"}>
            Our manager will contact you after placing the order and will
            provide a settlement account number for payment on your email.
            <br />
            <br />
            The online store uses electronic document management, so a fiscal
            check will be sent electronically via SMS to all orders. If you need
            to receive a printed copy, please indicate this information in the
            comments to the order.
          </TermsItemWineComp>
        </Box>
      </Container>
    </Box>
  );
}
