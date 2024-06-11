export interface ICollections {
    id: number;
    box_name: string;
    box_small_description: string;
    box_large_description: string;
    box_img: string;
    box_country: number;
    box_price: string;
    box_quatntity: number; 
    pack_quantity: number;
}

export interface ICollectionsApiResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: ICollections[];
}