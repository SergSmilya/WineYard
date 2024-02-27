import { Box, Container, List, ListItem, Typography } from "@mui/material";
import CustomButton from "../button";
import WineCardItem from "../WineCardItem";
import OptionItem from "../OptionItem";

export default function SecWineDish() {
    return (
        <Box sx={{
            padding: '60px 0 100px',
            backgroundColor: '#F5EBE2'
            }}>
            <Container>
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
                        padding: 0,
                        width: '100%',
                        borderBottom: '1px solid #90A3BF'
                    }}>
                        <ListItem sx={{
                            padding:0,
                        }}>
                            <OptionItem>Best with red meat</OptionItem>
                        </ListItem>
                        <ListItem sx={{
                            padding:0,
                        }}>
                            <OptionItem>Best with red meat</OptionItem>
                        </ListItem>
                        <ListItem sx={{
                            padding:0,
                        }}>
                            <OptionItem>Best with red meat</OptionItem>
                        </ListItem>
                        <ListItem sx={{
                            padding:0,
                        }}>
                            <OptionItem>Best with red meat</OptionItem>
                        </ListItem>
                        <ListItem sx={{
                            padding:0,
                        }}>
                            <OptionItem>Best with red meat</OptionItem>
                        </ListItem>
                    </List>

                    <List sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: '21px',
                        
                        width: '100%',
                        marginBottom: '60px'
                    }}>
                        <ListItem sx={{padding:0, paddingTop: '48px'}}>
                        <WineCardItem />
                        </ListItem>
                        <ListItem sx={{padding:0, paddingTop: '48px'}}>
                        <WineCardItem />
                        </ListItem>
                        <ListItem sx={{padding:0, paddingTop: '48px'}}>
                        <WineCardItem />
                        </ListItem>
                        <ListItem sx={{padding:0, paddingTop: '48px'}}>
                        <WineCardItem />
                        </ListItem>
                        <ListItem sx={{padding:0, paddingTop: '48px'}}>
                        <WineCardItem />
                        </ListItem>
                        <ListItem sx={{padding:0, paddingTop: '48px'}}>
                        <WineCardItem />
                        </ListItem>
                    </List>

                    <CustomButton color="primary" width="156px" height="44px" text="Show more"/>

                </Box>
            </Container>
        </Box>
    )
}