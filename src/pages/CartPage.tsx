import { Box, Container, Link, List, ListItem, Typography } from "@mui/material";
import { info, secondary, success } from "../theme/palette";
import OrderItemComp from "../components/OrderItemComp";
// import FormCartComp from "../components/FormCartComp";
import CustomButton from "../components/button";
// component
import TitleComp from "../components/TitleComp";
import CustomBreadcrumbsComp from "../components/CustomBreadcrumbsComp";
// service
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
// type
import { RootState } from "../store";
import { Wine } from "../types/wine";
import AuthCartComp from "../components/AuthCartComp";
import FormCartComp from "../components/FormCartComp";
import { useState } from "react";
// style
const mixinFlexCenterSpBet = {
    display: 'flex',
    alignItems: ' center',
    justifyContent: 'space-between',
}
const linkTextStyle = {
    fontSize: '18px',
    lineHeight: '150%',
    letterSpacing: '-0.36px',
}

export default function CartPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);
    const result: Wine[] = useSelector((state: RootState) => state.cartOrdered);
    const [loginName, setLoginName] = useState('');

    return (
        <Box sx={{
            paddingTop: '17px',
            paddingBottom: '104px',
            backgroundColor: info.main
        }}>
            <Container>
                <Box>
                    <Box sx={{
                    marginBottom: '60px'
                    }}>
                    <CustomBreadcrumbsComp pathnames={pathnames} />
     
                    <TitleComp size="150%" spacing="-1.28px" position="left">Your cart</TitleComp>

                    <Typography sx={linkTextStyle} variant="h6" color={success.dark}>Not ready to checkout? <Link sx={{
                        ...linkTextStyle,
                        textDecoration: 'none',
                        ':hover': {
                            cursor: 'pointer',
                        }
                    }} onClick={() => navigate('/catalog')} variant="subtitle2" color={success.dark}>Continue Shopping</Link></Typography>
                    </Box>
                    <Box sx={{marginBottom: '38px'}}>
                        {!loginName ? <AuthCartComp setIsLogedIn={setLoginName} /> : <Typography sx={linkTextStyle}>{`${loginName} Verified. Please, you can continue!`}</Typography>}
                    </Box> 

                    <Box sx={{
                        position: 'relative',
                        display: 'grid',
                        gridTemplateColumns: '54% auto',
                        gridTemplateRows: '1fr',
                        "&::before": {
                            display: !loginName ? 'block' : 'none',
                            content: '""',
                            position: 'absolute',
                            inset: 0,
                            zIndex: 9999,
                            backdropFilter: 'blur(2px)',
                            backgroundColor: 'rgba(245, 235, 226, 0.4)',
                        }
                        }}>
                        <Box sx={{
                            borderRight: '2px solid #D9D9D9',
                            paddingRight: '68px',
                        }}>
                            <FormCartComp />
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