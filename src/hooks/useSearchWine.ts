import { useEffect, useState } from "react";
import { useGetSearchQuery } from "../RTK/wineApi";
import { Wine } from "../types/wine";
import { useSelector } from "react-redux";
import { RootState } from "../store";

export function useSearchWines() {
  const [winesForSearch, setWinesForSearch ] = useState<Wine[]>([]);
  const { data, isLoading } = useGetSearchQuery(null);
  
  const searchText = useSelector((state: RootState) => state.searchText.searchText);

  useEffect(() => {
    if (!isLoading && data && searchText) {
      const filteredWines = data.filter((wine: Wine) =>
        wine.goods_name.toLowerCase().includes(searchText.toLowerCase())
      );
      setWinesForSearch(filteredWines);
    }
  }, [data, isLoading, searchText]);

  return {winesForSearch, isLoading} ;
}