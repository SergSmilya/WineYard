import WineList from "../sections/catalog/wineList";
import { useWineList } from "../hooks/useWineList";
import { useState } from "react";
import { Wine } from "../types/wine";

function WineListContainer() {
  const [currentPage, setCurrentPage] = useState(1);
  const { loading, wines, wineCount, nextPage } = useWineList(currentPage);

  const handleLoadMore = () => {
    setCurrentPage(currentPage + 1); // Збільшуємо значення сторінки
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {wineCount && <div>{wineCount}</div>}
      {wines.map((item: Wine) => (
        <WineList key={item.id} name={item.goods_name} />
      ))}
      {nextPage && <button onClick={handleLoadMore}>Більше</button>}
    </>
  );
}

export default WineListContainer;
