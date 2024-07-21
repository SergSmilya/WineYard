import { Box, List } from "@mui/material";
import CustomerItem from "./CustomerItem";

import customers from "../../../arrayForNeeds/customers.json";
import TitleComp from "../../../components/TitleComp";

export default function CustomerSect() {
  return (
    <Box
      sx={{
        padding: { xs: "50px 0 70px", lg: "60px 0 100px" },
        backgroundColor: "#F5EBE2",
      }}
    >
      <Box
        sx={{
          maxWidth: { xs: "300px", lg: "auto" },
          margin: "0 auto"
        }}
      >
        <TitleComp>Let customers speak for us</TitleComp>
      </Box>
      <List
        sx={{
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          gap: "24px",
          marginTop: { xs: "30px", lg: "45px" },
        }}
      >
        {customers.map((item, i) => (
          <CustomerItem {...item} key={i}>
            {item.goods_name}
          </CustomerItem>
        ))}
      </List>
    </Box>
  );
}
