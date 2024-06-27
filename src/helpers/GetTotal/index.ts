export function getTotal(data: any) {
   return data.reduce((sum:number, item:any) => {
        if (item.goods_price) {
            return sum + Number(item.goods_price) * item.goods_quantityOrder
        }
        if (item.box_price) {
            return sum + Number(item.box_price) * item.box_quantityOrder
        }
        if (item.giftBox_price) {
            return sum + Number(item.giftBox_price) * item.giftBox_quantityOrder
        }
    }, 0)
}