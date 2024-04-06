import { useEffect, useState } from "react";
import { useGetAllWineQuery } from "../RTK/wineApi";

export function useMaxWinePrice() {
  const [maxPrice, setMaxPrice] = useState(0);
  const fromHighToLow = "-goods_price";
  const { data, isLoading } = useGetAllWineQuery({ ordering: fromHighToLow })
  useEffect(() => {
    if (!isLoading && data) {
      const results = data.results;
      const highestPrice = Math.floor(results[0].goods_price);
      setMaxPrice(highestPrice+1);
    }
  }, [data, isLoading]);
  return maxPrice;
}