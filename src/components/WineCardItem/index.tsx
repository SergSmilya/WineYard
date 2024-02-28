import { Box, ListItem, Typography } from "@mui/material";
import FilterButtonComp from "../FilterButtonComp";

export default function WineCardItem() {
    return (
        <ListItem sx={{
            width: '304px',
            height: '388px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'normal',
            borderRadius: '10px',
            backgroundColor: '#FFF',
            padding: '15px',
            
            }}>
                <Box sx={{
                    position: 'relative',
                    width: '100%',
                    marginBottom: '10px',
                    flex: '1 1 auto'
                    }}>
                    <Box sx={{
                        position: 'absolute',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'start',
                        gap: '5px'
                        }}>
                        <FilterButtonComp bgdColor="#FFA6D1">pink wine</FilterButtonComp>
                        <FilterButtonComp bgdColor="#A6EFFF">dry</FilterButtonComp>
                    </Box>
                    <img style={{backgroundColor: 'tomato'}} src="" alt="logoWine"  width='100%' height='100%' />
                </Box>   

                <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        color: '#1A202C',
                        gap: '8px'
                    }}>
                    <Typography sx={{
                        width: '233px',
                        lineHeight: 'normal'
                    }} variant="subtitle1">Chateau Saint Maur Cru Classe L`Excellence</Typography>
                            
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'end'
                        }}>
                                
                        <Box sx={{
                            display: 'flex',
                            gap: '5px'
                            }}>
                            <img style={{
                                backgroundColor: 'blue'
                            }} src="" alt="flag" width='22px' height='16px' />
                            <Typography sx={{
                                lineHeight: 'normal'
                            }} variant="h6">France</Typography>
                        </Box>
                                
                        <Typography sx={{
                            fontSize: '20px',
                            fontWeight: '600',
                            lineHeight: 'normal',
                                color: '#7D0006'
                            
                        }}>1250<span>&#8372;</span></Typography>
                    </Box>
                </Box>                     

        </ListItem>
    )
}