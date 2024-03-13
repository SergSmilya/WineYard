import { useEffect, useState } from 'react';

import { getWinesForDish } from '../API/getWineForDish';
import { dishNames } from '../config/dishNames';

// Використовувати хук в компоненті можна ось так:
// const dishWines: DishWines = useDishSorting();
// console.log(dishWines["Red meat"]);
// DishWines - створенний тип в папці types 

export const useDishSorting = () => {
  const [dishWines, setDishWines] = useState({});

  useEffect(() => {
    const fetchWines = async () => {
      try {
        const winesPromises = dishNames.map(async (dishName) => {
          const wines = await getWinesForDish(dishName);
          return { [dishName]: wines };
        });

        const winesResults = await Promise.all(winesPromises);
        const mergedWines = Object.assign({}, ...winesResults);
        setDishWines(mergedWines);
      } catch (error) {
        console.error((error as Error).message);
      }
    };

    fetchWines();
  }, [dishNames]); 

  return dishWines;
};