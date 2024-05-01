import { Box, Container, Typography } from "@mui/material";
import { info, secondary } from "../theme/palette";
import TermsItemWineComp from "../components/TermsItemWineComp";
import WhatInsideSection from "../sections/giftBox/WhatInsideSection";
import { common } from "@mui/material/colors";

export default function GiftBoxItem() {
    return (
        <Box sx={{ backgroundColor: info.main }}>
            <Container>
                {/* BreadCrums */}
                    <Box
                        sx={{
                            paddingTop: "17px",
                            marginBottom: "25px",
                        }}
                        >
                        BreadCrums
                    </Box>
                        <Typography sx={{ fontSize: '48px', textAlign: 'center'}} color={secondary.textStyle} >DESCRIBE GIFTBOXITEM</Typography>
                {/* {data && <CharacterDescrOneItemComp data={data} />} */}
            </Container>    
                    <Box sx={{ paddingTop: '60px', paddingBottom: "100px", backgroundColor: common.white }}>
                        <Container>
                            <WhatInsideSection />
                        </Container>
                    </Box>
            <Container>
                    <Box
                    sx={{
                        paddingTop: '60px',
                        paddingBottom: "100px",
                        width: "656px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "60px",
                    }}
                    >
                    <TermsItemWineComp
                        text="Wineyard is shipping wine all over the Europe. Ready to ship today, delivery time appr. 2-4 workdays.  We will send you a tracking number so that you can track the order and know the day it will be delivered. We ship the wine in special boxes in order to protect them from any possible breakages. Shipping cost depends of weight and destination country."
                        nameIcon={"delivery"}
                    >
                        Terms of delivery
                    </TermsItemWineComp>

                    <TermsItemWineComp
                        text="Our manager will contact you after placing the order and will provide a settlement account number for payment on your email.
                    The online store uses electronic document management, so a fiscal check will be sent electronically via SMS to all orders. If you need to receive a printed copy, please indicate this information in the comments to the order."
                        nameIcon={"card"}
                    >
                        Terms of payment
                    </TermsItemWineComp>
                    </Box>    
            </Container>
        </Box>
    )
}