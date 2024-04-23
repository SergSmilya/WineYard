import React, { useEffect, useState } from "react";
import { Box, List, ListItem } from "@mui/material";

import { useGetAllWineQuery } from "../../../RTK/wineApi";
import { Wine } from "../../../types/wine";
import CustomButton from "../../../components/button";
import WineCardItem from "../../../components/WineCardItem";
import OutOfWine from "../../../components/OutOfWine/OutOfWine";

interface WineListProps {
  filters: string;
  dishName: string;
  ordering: string;
  setWineCount: React.Dispatch<React.SetStateAction<number>>;
}

function WineList({
  filters,
  dishName,
  ordering,
  setWineCount,
}: WineListProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [wineList, setWineList] = useState<Wine[]>([]);
  const [nextPage, setNextPage] = useState<boolean>(false);
  const [currentRequestParams, setCurrentRequestParams] = useState<{
    filters: string;
    dishName: string;
    ordering: string;
  }>({ filters: "", dishName: "", ordering: "" });

  const { data, isLoading } = useGetAllWineQuery({
    page: currentPage,
    filters: currentRequestParams.filters,
    dishName: currentRequestParams.dishName,
    ordering: currentRequestParams.ordering,
  });

  useEffect(() => {
    if (!isLoading && data) {
      if (currentPage === 1) {
        setWineList(data.results);
      } else {
        setWineList((prevWineList) => [
          ...prevWineList,
          ...data.results.filter(
            (newWine: Wine) =>
              !prevWineList.some((wine) => wine.id === newWine.id)
          ),
        ]);
      }
      setNextPage(!!data.next);
      setWineCount(data.count);
    }
  }, [isLoading, data, currentPage]);

  useEffect(() => {
    setCurrentPage(1);
    setCurrentRequestParams({ filters, dishName, ordering });
  }, [filters, dishName, ordering]);

  const handleLoadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (data.count === 0) {
    return <OutOfWine />;
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
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
              alignItems: "baseline",
            }}
            disableGutters={true}
            disablePadding={true}
          >
            <WineCardItem el={el} />
          </ListItem>
        ))}
      </List>
      {nextPage && (
        <Box sx={{ margin: "0 auto" }}>
          <CustomButton
            color="primary"
            text="SHOW MORE"
            height="44px"
            fontsize="16px"
            borderRadius="4px"
            onClick={handleLoadMore}
            customWhite
          />
        </Box>
      )}
    </Box>
  );
}

export default WineList;
