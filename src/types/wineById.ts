export default interface WineById {
    data: {
        id: number;
        goods_name: string;
        goods_price: string;
        goods_color: string; 
        goods_type: string; 
        goods_quantity: number; 
        goods_year: number; 
        goods_strength: string;
        goods_small_description: string;
        goods_detailed_description: string;
        goods_favorites: number;
        goods_img: string;
        country_goods: string;
    }
}