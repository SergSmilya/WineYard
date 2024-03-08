import { Box, IconButton, Typography } from "@mui/material";
import { error, primary, success } from '../../theme/palette';

import BasketIcon from "../BasketIcon";

// import BasketIcon from '../../assets/icons/basket.svg'

export default function OrderItemComp() {
    return (
        <Box sx={{
            outline: '1px solid red',
            display: 'flex',
            alignItems: 'baseline',
            justifyContent: 'center',
            columnGap: '20px',
            width: '100%',
            borderBottom: '1px solid #C1BABA'
        }}>
            <img src="" alt="" width='36%' height='100%' style={{
                flexBasis: '36%',
                backgroundColor: 'tomato'
            }} />
            
            <Box>
                <Typography sx={{
                    fontSize: '18px',
                    fontWeight: 600,
                    lineHeight: 'normal',
                    marginBottom: '8px'
                }} color={success.dark}>Chateau Saint Maur Cru Classe L`Excellence</Typography>

                <Typography sx={{
                    marginBottom: '40px'
                }} variant="h6" color={primary.main}>1250₴ / bottle</Typography>

                <Box sx={{
                    backgroundColor: `${error.contrastText}`,
                    display: 'flex',
                    columnGap: '8px'
                }}>
                    {/* Change on input with logic */}
                    <Typography>+</Typography>
                    <Typography>1</Typography>
                    <Typography>-</Typography>
                </Box>

                <Typography sx={{
                    fontSize: '18px',
                    fontWeight: 600,
                    lineHeight: 'normal',
                }} color={primary.main}>Total: 1250₴</Typography>
            </Box>

            <IconButton aria-label="delete" size="small">
                <BasketIcon />
            </IconButton>

            {/* <Button >
                <img src={`${basketIcon}`} alt="" />
            </Button> */}
        </Box>
    )
}