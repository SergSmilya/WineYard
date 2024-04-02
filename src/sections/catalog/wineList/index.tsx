import React, { useEffect, useState } from "react";
import { Box, List, ListItem } from "@mui/material";

import { useGetAllWineQuery } from "../../../RTK/wineApi";
import { Wine } from "../../../types/wine";
import CustomButton from "../../../components/button";
import WineCardItem from "../../../components/WineCardItem";

interface WineListProps {
  filters: string;
  dishName: string;
  setWineCount: React.Dispatch<React.SetStateAction<number>>;
}

function WineList({ filters, dishName, setWineCount }: WineListProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [wineList, setWineList] = useState<Wine[]>([]);
  const [nextPage, setNextPage] = useState<boolean>(false);
  const [currentRequestParams, setCurrentRequestParams] = useState<{
    filters: string;
    dishName: string;
  }>({ filters: "", dishName: "" });

  const { data, isLoading } = useGetAllWineQuery({
    page: currentPage,
    filters: currentRequestParams.filters,
    dishName: currentRequestParams.dishName,
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
    setCurrentRequestParams({ filters, dishName });
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
              alignItems: "baseline"
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
