import { Container, List } from "@mui/material";
import BenefitsListItem from "./benefitsListItem";

import freeShippingIcon from "../../../assets/icons/free-shipping.svg";
import expressDeliveryIcon from "../../../assets/icons/express-delivery.svg";
import priceTagIcon from "../../../assets/icons/pricetag.svg";

function BenefitsSec() {
  return (
    <Container>
      <List
        sx={{
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          height: { xs: "720px", lg: "272px" },
          padding: { xs: "50px 0 70px" },
        }}
      >
        <BenefitsListItem
          icon={freeShippingIcon}
          name="Free Shipping"
          text="For an over 1000₴"
        />
        <BenefitsListItem
          icon={expressDeliveryIcon}
          name="Express Home Delivery"
          text="Within 2-3 working days"
        />
        <BenefitsListItem
          icon={priceTagIcon}
          name="Best Prices & Offers"
          text="Orders 500₴ or more"
        />
      </List>
    </Container>
  );
}

export default BenefitsSec;
