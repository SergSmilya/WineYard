import { Box, Container, List, ListItem, Typography } from "@mui/material";
import CustomButton from "../../../components/button";
import WineCardItem from "../../../components/WineCardItem";
import OptionItem from "../../../components/OptionItem";

export default function SecWineDish() {
    return (
        <Box sx={{
            padding: '60px 0 100px',
            backgroundColor: '#F5EBE2'
            }}>
            <Container maxWidth={false}>
                <Box sx={{display: 'flex', flexDirection:'column', alignItems: 'center'}}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        marginBottom: '80px'
                        }}>
                        <Typography sx={{
                            lineHeight: '150%',
                            letterSpacing: '-1.28px', 
                            color: '#2C3812'
                        }} variant="h4">Perfect match of wine and dish!</Typography>

                        <Typography sx={{
                            width: '530px',
                            lineHeight: '150%',
                            fontSize: '18px',
                            fontWeight: '500',
                            textAlign: 'center',
                        }} variant="h6">Timeless food and wine pairings that never go wrong. Find the ideal wine to complement your favorite dishes.</Typography>
                    </Box>

                    <List sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        width: '100%',
                        borderBottom: '1px solid #90A3BF',
                        paddingBottom: '32px',
                        marginBottom: '48px'
                    }} disablePadding={true}>
                        {/* map(()=>{}) */}
                        <ListItem sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            height: '33px',
                            '&.Mui-selected': {
                                borderBottom: '4px solid #1A202C',
                                backgroundColor: 'transparent'
                            }
                        }}
                            selected={true}
                            disableGutters={true}
                            disablePadding={true}>
                            <OptionItem>Best with red meat</OptionItem>
                        </ListItem>
                        <ListItem sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            height: '33px',
                        }}
                            disableGutters={true}
                            disablePadding={true}>
                            <OptionItem>Best with red meat</OptionItem>
                        </ListItem>
                        <ListItem sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            height: '33px',
                        }}
                            disableGutters={true}
                            disablePadding={true}>
                            <OptionItem>Best with red meat</OptionItem>
                        </ListItem>
                        <ListItem sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            height: '33px',
                        }}
                            disableGutters={true}
                            disablePadding={true}>
                            <OptionItem>Best with red meat</OptionItem>
                        </ListItem>
                    </List>

                    <List className='cardList' sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        flexWrap: 'wrap',
                        rowGap: '24px',
                        columnGap: '21px',
                        marginBottom: '60px'
                    }} disablePadding>
                        <ListItem sx={{
                            width: '304px',
                            display: 'flex',
                            justifyContent: 'center',
                        }} disableGutters={true} disablePadding={true}>
                            <WineCardItem />
                        </ListItem>
                        <ListItem sx={{
                            width: '304px',
                            display: 'flex',
                            justifyContent: 'center',

                        }} disableGutters={true} disablePadding={true}>
                            <WineCardItem />
                        </ListItem>
                        <ListItem sx={{
                            width: '304px',
                            display: 'flex',
                            justifyContent: 'center',

                        }} disableGutters={true} disablePadding={true}>
                            <WineCardItem />
                        </ListItem>
                        <ListItem sx={{
                            width: '304px',
                            display: 'flex',
                            justifyContent: 'center',
                        }} disableGutters={true} disablePadding={true}>
                            <WineCardItem />
                        </ListItem>
                        <ListItem sx={{
                            width: '304px',
                            display: 'flex',
                            justifyContent: 'center',

                        }} disableGutters={true} disablePadding={true}>
                            <WineCardItem />
                        </ListItem>
                        <ListItem sx={{
                            width: '304px',
                            display: 'flex',
                            justifyContent: 'center',

                        }} disableGutters={true} disablePadding={true}>
                            <WineCardItem />
                        </ListItem>
                        <ListItem sx={{
                            width: '304px',
                            display: 'flex',
                            justifyContent: 'center',

                        }} disableGutters={true} disablePadding={true}>
                            <WineCardItem />
                        </ListItem>
                        <ListItem sx={{
                            width: '304px',
                            display: 'flex',
                            justifyContent: 'center',

                        }} disableGutters={true} disablePadding={true}>
                            <WineCardItem />
                        </ListItem>
                    </List>

                    <CustomButton color="primary" height="44px" text="Show more" fontsize="16px" borderRadius="4px"/>

                </Box>
            </Container>
        </Box>
    )
}