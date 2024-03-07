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
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          height: "272px",
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
