import { Box, Container, List, Typography } from "@mui/material";
import CustomerItem from "./CustomerItem";

import customers from '../../../arrayForNeeds/customers.json';

export default function CustomerSect() {
    return (
        <Box sx={{
            padding: '60px 0',
            backgroundColor: '#F5EBE2'
        }}>
             <Container>
                <Typography sx={{
                    color: '#2C3812',
                    lineHeight: '71.9%',
                    textAlign: 'center',
                    marginBottom: '45px'
                }} variant="h4">Let customers speak for us</Typography>
                <List sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    {customers.map((item, i) => <CustomerItem {...item} key={i}>{item.title}</CustomerItem>)}
                </List>
             </Container>
        </Box>
    )
}