import { Box, Container, Typography } from "@mui/material";

export default function SubscribeSect() {
    return (
        <Box sx={{
            padding:'100px 0'
        }}>
            <Container>
                <Box sx={{
                    maxWidth: '550px'
                }}>
                    <Typography sx={{
                        lineHeight: '59.4%',
                        color: '#101828',
                        marginBottom: '16px'
                    }} variant="h4">Let’s be friends!</Typography>

                    <Typography sx={{
                        maxWidth: '390px',
                        color: '#475467',
                        fontSize: '20px',
                        lineHeight: '150%'
                    }} variant="h4">Subscribe to our newsletters and get 10% discount on first three orders</Typography>
                </Box>

                <Box></Box>
            </Container>
        </Box>
    )
}