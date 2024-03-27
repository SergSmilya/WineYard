import { useEffect, useState } from "react";
import { Box, List, ListItem } from "@mui/material";

import { useGetAllWineQuery } from "../../../RTK/wineApi";
import { Wine } from "../../../types/wine";
import CustomButton from "../../../components/button";
import WineCardItem from "../../../components/WineCardItem";

interface WineListProps {
  filters: string;
  dishName: string;
}

function WineList({ filters, dishName }: WineListProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [wineList, setWineList] = useState<Wine[]>([]);
  const [nextPage, setNextPage] = useState<boolean>(false);
  const { data, isLoading } = useGetAllWineQuery({
    page: currentPage,
    filters: filters,
    dishName: dishName,
  });

  useEffect(() => {
    if (!isLoading && data) {
      // Очищення списку wineList перед додаванням нових елементів
      if (currentPage === 1) setWineList([]);

      setWineList((prevWineList) => {
        const loadedWineIds = new Set(prevWineList.map((wine) => wine.id));
        const filteredNewWines = data.results.filter(
          (newWine: Wine) => !loadedWineIds.has(newWine.id)
        );
        return [...prevWineList, ...filteredNewWines];
      });
      setNextPage(!!data.next);
    }
  }, [isLoading, data]);

  useEffect(() => {
    setCurrentPage(1); // Обнулення поточної сторінки при зміні фільтрів або сортування
  }, [filters, dishName]);

  const handleLoadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  if (isLoading) {
    return <div>Loading</div>;
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "60px",
      }}
    >
      <List
        sx={{
          display: "flex",
          flexWrap: "wrap",
          rowGap: "24px",
          columnGap: "22px",
        }}
      >
        {wineList.map((el, index) => (
          <ListItem
            key={index}
            sx={{
              width: "304px",
              display: "flex",
              justifyContent: "center",
            }}
            disableGutters={true}
            disablePadding={true}
          >
            <WineCardItem el={el} />
          </ListItem>
        ))}
      </List>
      {nextPage && (
        <CustomButton
          color="primary"
          text="SHOW MORE"
          height="44px"
          fontsize="16px"
          borderRadius="4px"
          onClick={handleLoadMore}
          customWhite
        />
      )}
    </Box>
  );
}

export default WineList;
