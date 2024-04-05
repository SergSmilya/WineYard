import { Box, Container, List } from "@mui/material";
import CustomerItem from "./CustomerItem";

import customers from '../../../arrayForNeeds/customers.json';
import TitleComp from "../../../components/TitleComp";

export default function CustomerSect() {
    return (
        <Box sx={{
            padding: '60px 0',
            backgroundColor: '#F5EBE2'
        }}>
            <Container>
                <Box sx={{marginBottom: '45px'}}>
                    <TitleComp>Let customers speak for us</TitleComp>
                </Box>
                <List sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    {customers.map((item, i) => <CustomerItem {...item} key={i}>{item.goods_name}</CustomerItem>)}
                </List>
             </Container>
        </Box>
    )
}