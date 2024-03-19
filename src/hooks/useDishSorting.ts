import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { getWinesForDish } from '../API/getWineForDish';
import { dishNames } from '../config/dishNames';
import { selectCheeseWines, selectFishAndSeafoodWines, selectPoultryMeatWines, selectRedMeatWines, setCheeseWines, setFishAndSeafoodWines, setPoultryMeatWines, setRedMeatWines } from '../store/dishWinesSlice';


export const useDishSorting = (page: number) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const redMeatWines = useSelector(selectRedMeatWines); 
  const cheeseWines = useSelector(selectCheeseWines);
  const fishWines = useSelector(selectFishAndSeafoodWines);
  const poultryWines = useSelector(selectPoultryMeatWines);
  
  useEffect(() => {
    const fetchWines = async () => {
      try {
        const winesPromises = dishNames.map(async (dishName) => {
          const data = await getWinesForDish(dishName, page);
          const wines = data.results;

          switch (dishName) {
            case 'Red meat':
              dispatch(setRedMeatWines(wines));
              break;
            case 'Cheese':
              dispatch(setCheeseWines(wines));
              break;
            case 'Fish and seafood':
              dispatch(setFishAndSeafoodWines(wines));
              break;
            case 'Poultry meat':
              dispatch(setPoultryMeatWines(wines));
              break;
            default:
              break;
          }
        });

        await Promise.all(winesPromises);
      } catch (error) {
        console.error((error as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchWines();
  }, [dishNames, dispatch]);

  return { loading, redMeatWines, cheeseWines, fishWines, poultryWines };
};