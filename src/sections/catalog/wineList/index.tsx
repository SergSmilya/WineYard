import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { Stack } from "@mui/system";

import { useGetAllWineQuery } from "../../../RTK/wineApi";
import { Wine } from "../../../types/wine";
import CustomButton from "../../../components/button";

function WineList() {
  const [currentPage, setCurrentPage] = useState(1);
  const [wineList, setWineList] = useState<Wine[]>([]);
  const [nextPage, setNextPage] = useState<boolean>(false);
  const { data, isLoading } = useGetAllWineQuery(currentPage);

  useEffect(() => {
    if (!isLoading && data) {
      setWineList((prevWineList) => {
        const loadedWineIds = new Set(prevWineList.map(wine => wine.id));
        const filteredNewWines = data.results.filter(
          (newWine: Wine) => !loadedWineIds.has(newWine.id)
        );
        return [...prevWineList, ...filteredNewWines];
      });
      setNextPage(!!data.next);
    }
  }, [isLoading, data]);

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
      <Stack>
        {wineList.map((item: Wine) => (
          <div key={item.id}>{item.goods_name}</div>
        ))}
      </Stack>
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
