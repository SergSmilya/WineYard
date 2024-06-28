import { Box, Container, Link, Typography } from "@mui/material";
import { info, success } from "../theme/palette";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectorAuth } from "../store/selectors/verifyAuth";
import { addData } from "../store/authSlice";
// component
import TitleComp from "../components/TitleComp";
import CustomBreadcrumbsComp from "../components/CustomBreadcrumbsComp";
// service
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from 'jwt-decode';

import FormTitleComp from "../components/FormTitleComp";
import AuthCartComp from "../components/AuthCartComp";
import FormCartComp from "../components/FormCartComp";
// style
const linkTextStyle = {
    fontSize: {sx:'14px', lg: '18px'},
    lineHeight: '150%',
    letterSpacing: '-0.36px',
}
const text = {
    fontSize: '14px',
    fontWeight: 300,
    lineHeight: '170%',
}
// type
interface IJwtPayload {
    aud: string;
    azp: string;
    email: string;
    email_verified: boolean;
    exp: number;
    family_name: string;
    given_name: string;
    iat: number;
    iss: string;
    jti: string;
    name: string;
    nbf: number;
    picture: string;
    sub: string;
}

export default function CartPage() {
    const [activeField, setActiveField] = useState(true);
    const [hideCartOnMobile, setHideCartOnMobile] = useState(0);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);
    const verify = useSelector(selectorAuth); 
    const [userName, setUserName] = useState(verify ? verify : '');

    useEffect(() => {
        setHideCartOnMobile(window.innerWidth);
        window.addEventListener("resize", handleResize);
        // window.addEventListener("resize", throttle(300, handleResize));
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    function handleResize({ target: { window }}: any) {      
        const WIDTH = window.screen.width;
        setHideCartOnMobile(WIDTH);
    }
    
    return (
        <Box sx={{
            paddingTop: '20px',
            paddingBottom: {xs: '30px', lg:'100px'},
            backgroundColor: info.main,
        }}>
            <Container>
                <Box>
                    {/* Intro */}
                    <Box sx={{ marginBottom: {xs: '15px', lg: '60px'} }}>
                        <Box sx={{ marginBottom: '24px' }}>
                            <CustomBreadcrumbsComp pathnames={pathnames} />
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: {xs: '10px', lg: '16px'} }}>
                            <TitleComp size="150%" spacing="-1.28px" position="left">Your cart</TitleComp>
                            <Typography sx={linkTextStyle} variant="h6" color={success.dark}>Not ready to checkout? <Link sx={{
                            ...linkTextStyle,
                            textDecoration: 'none',
                            ':hover': {
                                cursor: 'pointer',
                            }
                            }} onClick={() => navigate('/catalog')} variant="subtitle2" color={success.dark}>Continue Shopping</Link></Typography>
                        </Box>
                    </Box>
                    {/* Auth */}
                    <Box sx={{ marginBottom: '38px' }}>
                        <Box sx={{marginBottom: {xs: '16px', lg: '24px'} }}>
                            {userName ? null : <FormTitleComp>Log in</FormTitleComp>}
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: {xs: 'column', lg: 'row'}, gap: {xs: '5px', lg: '24px'}, alignItems: 'center' }}>
                            {!userName ?
                            <>
                                {activeField && <GoogleLogin
                                        onSuccess={(credentialResponse: any) => {
                                            const userResult:IJwtPayload = jwtDecode(credentialResponse.credential);
                                            dispatch(addData(userResult));
                                            setUserName(userResult.name)
                                    }} />}
                                {activeField && <Typography sx={text} color={success.dark}>or</Typography>}
                                    <AuthCartComp setUserName={setUserName} setActiveField={setActiveField} />
                            </> :
                            <Typography sx={linkTextStyle}>{`${userName} Verified. Please, you can continue!`}</Typography>}
                        </Box>
                    </Box> 
                    {/* Main */}
                    { hideCartOnMobile >= 768 && !userName ? null : <Box sx={{
                        position: 'relative',
                        "&::before": {
                            display: !userName ? 'block' : 'none',
                            content: '""',
                            position: 'absolute',
                            inset: 0,
                            zIndex: 9999,
                            backdropFilter: 'blur(2px)',
                            backgroundColor: 'rgba(245, 235, 226, 0.4)',
                        }
                        }}>
                        <FormCartComp />
                   </Box>}
                </Box>
            </Container>
        </Box>
    )
}