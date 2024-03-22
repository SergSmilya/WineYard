import { Box, Container, List, ListItem, Typography } from "@mui/material";
import CustomButton from "../../../components/button";
import WineCardItem from "../../../components/WineCardItem";
import OptionItem from "../../../components/OptionItem";
// import { useGetAllWineQuery } from "../../../RTK/wineApi";

import listTextButton from '../../../arrayForNeeds/listNamesButtonsForSectionDishes.json'
import { useState } from "react";

export default function SecWineDish() {
    const [selected, setSelected] = useState(false);

    // const { data = [] } = useGetAllWineQuery();
    // console.log(data);

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
                        width: '100%',
                        borderBottom: '1px solid #90A3BF',
                        marginBottom: '48px'
                    }} disablePadding={true}>
                        {listTextButton.map((el) => (
                            <OptionItem setSelected={setSelected} selected={selected} key={el.id} >{el.name}</OptionItem>
                        ))}
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

                    <CustomButton
                    color="primary"
                    text="SHOW MORE"
                    height="44px"
                    fontsize="16px"
                    borderRadius="4px"
                    onClick={() => alert("pagination")}
                    customWhite
                    />

                </Box>
            </Container>
        </Box>
    )
}