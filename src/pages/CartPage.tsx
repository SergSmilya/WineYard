import { Box, Container, Link, List, ListItem, Typography } from "@mui/material";
import { info, secondary, success } from "../theme/palette";
import OrderItemComp from "../components/OrderItemComp";
import FormCartComp from "../components/FormCartComp";

export default function CartPage() {
    return (
        <Box sx={{
            paddingTop: '17px',
            paddingBottom: '104px',
            backgroundColor: info.main
        }}>
            <Container>
                <Box>
                    <Box sx={{
                    marginBottom: '66px'
                    }}>
                    <Typography sx={{
                        marginBottom: '27px',
                        letterSpacing: '0.48px'
                    }} variant="h6" color={success.dark}>BreadCrums</Typography>
                    <Typography sx={{
                        marginBottom: '16px',
                        lineHeight: '150%',
                        letterSpacing: '-1.28px',
                    }} variant="h4" color={secondary.light}>Your cart</Typography>
                    <Typography sx={{
                        fontSize: '18px',
                        lineHeight: '150%',
                        letterSpacing: '-0.36px',
                    }} variant="h6" color={success.dark}>Not ready to checkout? <Link sx={{
                        fontSize: '18px',
                        lineHeight: '150%',
                        letterSpacing: '-0.36px',
                        textDecoration: 'none'
                    }} variant="subtitle2" color={success.dark}>Continue Shopping</Link></Typography>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        }}>
                        <Box sx={{
                            flexBasis: '54%',
                            borderRight: '2px solid #D9D9D9',
                            paddingRight: '68px',
                        }}>
                            <FormCartComp/>
                        </Box>

                        <Box sx={{
                            paddingLeft: '66px'
                            }}>
                            <Typography sx={{
                                display: 'flex',
                                alignItems: ' center',
                                justifyContent: 'space-between',
                                marginBottom: '22px',
                                fontSize: '22px',
                                lineHeight: 'normal',
                                letterSpacing: '0.66px',
                            }} variant="subtitle2" color={secondary.textStyle}>Your order <Typography sx={{
                                letterSpacing: '0.4px'
                            }} color={secondary.textStyle}>6 items</Typography></Typography>
                            
                            {/* Order list map()... */}
                            <List sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                rowGap: '18px',
                                marginBottom: '45px'
                            }}>
                                <ListItem> <OrderItemComp /></ListItem>
                                <ListItem> <OrderItemComp /></ListItem>
                                <ListItem> <OrderItemComp /></ListItem>
                            </List>

                            <Typography sx={{
                                display: 'flex',
                                alignItems: ' center',
                                justifyContent: 'space-between',
                                marginBottom: '21px',
                                fontSize: '22px',
                                lineHeight: '72%',
                                letterSpacing: '0.4px',
                            }} variant="subtitle2" color={secondary.textStyle}>Subtotal: <Typography sx={{
                                fontSize: '22px',
                                lineHeight: '72%',
                                letterSpacing: '0.4px',
                            }} color={secondary.textStyle}>1345₴</Typography></Typography>
                            <Typography sx={{
                                display: 'flex',
                                alignItems: 'baseline',
                                justifyContent: 'space-between',
                                fontSize: '22px',
                                lineHeight: '72%',
                                letterSpacing: '0.4px',
                            }} variant="subtitle2" color={secondary.textStyle}>Delivery: <Typography sx={{
                                flexBasis: '60%',
                                textAlign: 'right',
                                fontSize: '20px',
                                lineHeight: 'normal',
                            }} color={secondary.textStyle}>According to the delivery service’s tariffs</Typography></Typography>
                        </Box>
                   </Box>
                </Box>
            </Container>
        </Box>
    )
}