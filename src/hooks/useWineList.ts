import { useEffect, useState } from 'react';
import { getWineList } from '../API/getWineList';

export const useWineList = () => {
  const [wineList, setWineList] = useState([]);

  useEffect(() => {
    const fetchWines = async () => {
      try {
        const wines = await getWineList();
        setWineList(wines);
      } catch (error) {
        console.error((error as Error).message);
      }
    };
    fetchWines();
  }, []);

  return wineList;
};