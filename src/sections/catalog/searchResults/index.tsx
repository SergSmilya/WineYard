import React, { useEffect, useState } from "react";
import { Box, List, ListItem } from "@mui/material";

import { Wine } from "../../../types/wine";
import CustomButton from "../../../components/button";
import WineCardItem from "../../../components/WineCardItem";
import { useSearchWines } from "../../../hooks/useSearchWine";
import OutOfWine from "../../../components/OutOfWine/OutOfWine";

interface SearchResultsProps {
  setWineCount: React.Dispatch<React.SetStateAction<number>>;
}

function SearchResults({ setWineCount }: SearchResultsProps) {
  const [displayedWineCount, setDisplayedWineCount] = useState(15);
  const [wineList, setWineList] = useState<Wine[]>([]);

  const { winesForSearch, isLoading } = useSearchWines();

  useEffect(() => {
    if (!isLoading && winesForSearch) {
      const winesToShow = winesForSearch.slice(0, displayedWineCount);
      setWineList(winesToShow);
      setWineCount(winesForSearch.length);
    }
  }, [isLoading, winesForSearch, displayedWineCount, setWineCount]);

  const handleLoadMore = () => {
    setDisplayedWineCount((prevCount) =>
      Math.min(prevCount + 15, winesForSearch.length)
    );
  };

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (winesForSearch.length === 0) {
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
      {displayedWineCount < winesForSearch.length && (
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

export default SearchResults;
