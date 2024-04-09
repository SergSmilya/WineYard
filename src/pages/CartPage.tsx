import { Box, Container, Link, List, ListItem, Typography } from "@mui/material";
import { info, secondary, success } from "../theme/palette";
import OrderItemComp from "../components/OrderItemComp";
import FormCartComp from "../components/FormCartComp";
import CustomButton from "../components/button";
// component
import TitleComp from "../components/TitleComp";
// service
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
// type
import { RootState } from "../store";
import { Wine } from "../types/wine";
// style
const mixinFlexCenterSpBet = {
    display: 'flex',
    alignItems: ' center',
    justifyContent: 'space-between',
}

export default function CartPage() {
    const navigate = useNavigate();
    const result: Wine[] = useSelector((state: RootState) => state.cartOrdered);

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
     
                    <TitleComp size="150%" spacing="-1.28px" position="left">Your cart</TitleComp>

                    <Typography sx={{
                        fontSize: '18px',
                        lineHeight: '150%',
                        letterSpacing: '-0.36px',
                    }} variant="h6" color={success.dark}>Not ready to checkout? <Link sx={{
                        fontSize: '18px',
                        lineHeight: '150%',
                        letterSpacing: '-0.36px',
                        textDecoration: 'none',
                        ':hover': {
                            cursor: 'pointer',
                        }
                    }} onClick={() => navigate('/catalog')} variant="subtitle2" color={success.dark}>Continue Shopping</Link></Typography>
                    </Box>
                    <Box sx={{
                        display: 'grid',
                        gridTemplateColumns: '54% auto',
                        gridTemplateRows: '1fr'
                        }}>
                        <Box sx={{
                            borderRight: '2px solid #D9D9D9',
                            paddingRight: '68px',
                        }}>
                            <FormCartComp/>
                        </Box>

                        <Box sx={{
                            paddingLeft: '66px'
                            }}>
                            <Typography sx={{
                                ...mixinFlexCenterSpBet,
                                marginBottom: '22px',
                                fontSize: '22px',
                                lineHeight: 'normal',
                                letterSpacing: '0.66px',
                            }} variant="subtitle2" color={secondary.textStyle}>Your order <Typography sx={{
                                letterSpacing: '0.4px'
                            }} color={secondary.textStyle}>{result.length} items</Typography></Typography>
                            
                            {/* Order list map()... */}
                            <List sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                rowGap: '18px',
                                marginBottom: '45px'
                            }}>
                                {result.length > 0 && result.map((item: Wine) =>
                                    <ListItem key={item.id}> <OrderItemComp {...item} /></ListItem>)}
                            </List>

                            <Typography sx={{
                                ...mixinFlexCenterSpBet,
                                marginBottom: '21px',
                                fontSize: '22px',
                                lineHeight: '72%',
                                letterSpacing: '0.4px',
                            }} variant="subtitle2" color={secondary.textStyle}>Subtotal: <Typography sx={{
                                fontSize: '22px',
                                lineHeight: '72%',
                                letterSpacing: '0.4px',
                                }} color={secondary.textStyle}>{result.length > 0 && 
                                        result.reduce((sum: number, item: Wine) => sum + Number(item.goods_price), 0)
                                }₴</Typography></Typography>
                            <Typography sx={{
                                ...mixinFlexCenterSpBet,
                                alignItems: 'baseline',
                                fontSize: '22px',
                                lineHeight: '72%',
                                letterSpacing: '0.4px',
                                marginBottom: '30px'
                            }} variant="subtitle2" color={secondary.textStyle}>Delivery: <Typography sx={{
                                flexBasis: '60%',
                                textAlign: 'right',
                                fontSize: '20px',
                                lineHeight: 'normal',
                                }} color={secondary.textStyle}>According to the delivery service’s tariffs</Typography></Typography>
                            
                             <Box sx={{}}>
                                <CustomButton color="primary" width="100%" height="54px" text="PLACE ORDER" />
                            </Box>
                        </Box>

                   </Box>
                </Box>
            </Container>
        </Box>
    )
}