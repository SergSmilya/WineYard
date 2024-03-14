import { useEffect, useState } from 'react';
import { getWineList } from '../API/getWineList';
import { useDispatch, useSelector } from "react-redux";
import { addNewWines, selectWineCount, selectWineNextPage, selectWines, setNextPage, setWineCount, setWines } from '../store/winesSlice';
import { Wine } from '../types/wine';

export const useWineList = (page: number) => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const wineCount = useSelector(selectWineCount); // Вибірка кількості вин зі стейту
  const nextPage = useSelector(selectWineNextPage); // Вибірка наступної сторінки зі стейту
  const wines = useSelector(selectWines); // Вибірка списку вин зі стейту

  useEffect(() => {
    const fetchWines = async () => {
      try {
        const data = await getWineList(page);
        const newWines = data.results;

        dispatch(setWineCount(data.count));
        dispatch(setNextPage(data.next));

        if (page === 1) {
          dispatch(setWines(newWines));
        } else {
          // Фільтруємо нові вина, щоб виключити ті, які вже є на сторінці
          const filteredNewWines = newWines.filter((newWine: Wine) => !wines.some((loadedWine: Wine) => loadedWine.id === newWine.id));
          dispatch(addNewWines(filteredNewWines));
        }
        setLoading(false);
      } catch (error) {
        console.error((error as Error).message);
      }
    };
    fetchWines();
  }, [dispatch, page]);
  return { loading, wines, wineCount, nextPage };
};