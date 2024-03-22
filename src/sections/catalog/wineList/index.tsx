import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { Stack } from "@mui/system";

import { useGetAllWineQuery } from "../../../RTK/wineApi";
import { Wine } from "../../../types/wine";
import CustomButton from "../../../components/button";

function WineList() {
  const [currentPage, setCurrentPage] = useState(1);
  const [wineList, setWineList] = useState([]);
  const [nextPage, setNextPage] = useState(false);

  const { data, isLoading } = useGetAllWineQuery(currentPage);

  useEffect(() => {
    if (!isLoading && data) {
      setWineList(data.results);
      setNextPage(data.next);
    }
  }, [isLoading, data]);

  const handleLoadMore = () => {
    setCurrentPage(currentPage + 1);
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
