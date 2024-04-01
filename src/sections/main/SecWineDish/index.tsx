import { useEffect, useState } from "react";
import { Box, Container, Typography } from "@mui/material";

import { useGetWineByDishesQuery } from "../../../RTK/wineApi";

import CustomButton from "../../../components/button";
import PanelFilterDishComp from "../../../components/PanelFilterDishComp";
import ListCardWineComp from "../../../components/ListCardWineComp";

export default function SecWineDish() {
    const [category, setCategory] = useState('');
    const [perPage, setPerPage] = useState(1);
    const [wineList, setWineList] = useState([]);

    const capitalizeCategory = category !== "fish & seafood" ? category.charAt(0).toUpperCase() + category.slice(1) : 'Fish and seafood';

    const { data, isLoading } = useGetWineByDishesQuery({ page: perPage, category: capitalizeCategory });

    useEffect(() => {
        // if (category) {
        //     setWineList([]);
        // }
        if (category && perPage !== 1 && wineList.length === 0) {
            setPerPage(1);
        }
        if (data && wineList.length === 0 && perPage === 1) {
            setWineList(data.results);
        }

    }, [category, data, data?.results, perPage, wineList.length])

    console.log(wineList)

    if (isLoading) return (<Typography>...Loading</Typography>)

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

                    <PanelFilterDishComp setCategory={setCategory} category={category} />

                    {wineList && <ListCardWineComp data={wineList} />}

                    {!isLoading && data.count >= wineList.length && <CustomButton
                    color="primary"
                    text="SHOW MORE"
                    height="44px"
                    fontsize="16px"
                    borderRadius="4px"
                    onClick={() => {
                        setPerPage((prevPage) => prevPage + 1);
                        if (data.results) {
                            setWineList((prevState) => [...prevState, ...data.results])
                        }
                    }}
                    customWhite
                    />}
                </Box>
            </Container>
        </Box>
    )
}