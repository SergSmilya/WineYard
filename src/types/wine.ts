export interface Wine {
  id: number;
  goods_name: string;
  goods_price: number;
  goods_color: string;
  goods_type: string;
  goods_strength: string;
  goods_year: number;
  country_goods: {
    name: string;
  };
  goods_small_description: string;
  goods_detailed_description: string;
  goods_quantity: number;
  goods_favorites: number;
  goods_img: string;
  goods_dishes: string;
}
