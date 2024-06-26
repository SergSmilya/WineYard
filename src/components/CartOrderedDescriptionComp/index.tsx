import { Box, List, ListItem, Typography } from "@mui/material";
import { secondary, success } from "../../theme/palette";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import OrderItemComp from "../OrderItemComp";
import OrderItemGiftBoxComp from "../OrderItemGiftBoxComp";
import OrderItemCollectionComp from "../OrderItemCollectionComp";
import { getTotal } from "../../helpers/GetTotal";
import { typography } from "../../theme/typography";
// style
const mixinFlexCenterSpBet = {
    display: 'flex',
    alignItems: ' center',
    justifyContent: 'space-between',
}
export default function CartOrderedDescriptionComp() {
    const result = useSelector((state: RootState) => state.cartOrdered); 
    return (
        <Box>
            <Typography sx={{
                ...mixinFlexCenterSpBet,
                marginBottom: '22px',
                fontSize: '22px',
                lineHeight: 'normal',
                letterSpacing: '0.66px',
            }} variant="subtitle2" color={success.dark}>Your order <Typography sx={{
                letterSpacing: '0.4px'
            }} color={secondary.textStyle}>{result.length} items</Typography></Typography>
            
            <List sx={{
                maxHeight: '580px',
                overflowY: 'scroll',
                display: 'flex',
                flexDirection: 'column',
                rowGap: '18px',
                marginBottom: '45px'
            }}>
                {result.length && result.map((item: any) => {
                    if (item.goods_name) {
                        return <ListItem key={item.id}> <OrderItemComp {...item} /></ListItem>
                    }
                    if (item.giftBox_name) {
                        return <ListItem key={item.id}> <OrderItemGiftBoxComp {...item} /></ListItem>
                    }
                    if (item.box_name) {
                        return <ListItem key={item.id}> <OrderItemCollectionComp {...item} /></ListItem>
                    }
                })}
            </List>

            <Typography sx={{
                ...mixinFlexCenterSpBet,
                marginBottom: '21px',
                fontSize: '22px',
                lineHeight: '72%',
                letterSpacing: '0.4px',
            }} variant="subtitle2" color={success.dark}>Subtotal: <Typography sx={{
                fontSize: '22px',
                fontWeight: typography.fontWeightBold,
                lineHeight: '72%',
                letterSpacing: '0.4px',
                }} color={success.dark}>{result.length && getTotal(result)}₴</Typography></Typography>
            <Typography sx={{
                ...mixinFlexCenterSpBet,
                alignItems: 'baseline',
                fontSize: '22px',
                lineHeight: '72%',
                letterSpacing: '0.4px',
                marginBottom: '30px'
            }} variant="subtitle2" color={success.dark}>Delivery: <Typography sx={{
                flexBasis: '60%',
                textAlign: 'right',
                fontSize: '20px',
                lineHeight: 'normal',
                }} color={success.dark}>According to the delivery service’s tariffs</Typography></Typography>
        </Box>
    )
}