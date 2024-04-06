import { useEffect, useState } from "react";
import { useGetCountryQuery } from "../RTK/wineApi";

interface CountryListProps {
  id: number;
  name: string;
}

export function useCountryList() {
  const [countryList, setCountryList] = useState<string[]>([]);
  const { data, isLoading } = useGetCountryQuery(null);
  
  useEffect(() => {
    if (!isLoading && data) {
      const result = data.results;
      const names = result.map((item: CountryListProps) => item.name);
      const sortedNames = names.sort(); 
      setCountryList(sortedNames);
    }
  }, [data, isLoading]);

  return countryList;
}