interface WineItem {
  id: number;
  goods_color: string;
  goods_type: string;
  goods_name: string;
  goods_img: string;
  goods_price: number;
  country_goods: {
    name: string;
  } 
}

export default interface WineCardItemProps {
  show?: boolean;
  el: WineItem;
}