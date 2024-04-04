import { Box, Stack } from "@mui/material";
import DishButtons from "../dishButtons";
import SearchBox from "../searchBox";
import SortDropdownList from "../sortDropdownList";

interface SortSectionProps {
  setDishName: React.Dispatch<React.SetStateAction<string>>;
  setOrdering: React.Dispatch<React.SetStateAction<string>>;
  setIsNewest: React.Dispatch<React.SetStateAction<boolean>>;
  clearAllFilters: boolean;
  isFilterCleared: boolean;
  setIsFilterCleared: React.Dispatch<React.SetStateAction<boolean>>;
}

function SortSection({ setDishName, setOrdering, setIsNewest, clearAllFilters, isFilterCleared, setIsFilterCleared }: SortSectionProps) {
  const handleDishChange = (name: string) => {
    setDishName(name);
    setIsFilterCleared(true);
  };

  const handleOrdering = (value: string) => {
    setOrdering(value);
  }

  const handleIsNewest = (value: boolean) => {
    setIsNewest(value);
  }

  return (
    <Box>
      <DishButtons handleDishChange={handleDishChange} />
      <Stack sx={{
        display: "flex",
        flexDirection: "row",
        gap: "9px",
        marginTop: "25px"
      }}>
        <SearchBox />
        <SortDropdownList handleOrdering={handleOrdering} handleIsNewest={handleIsNewest} clearAllFilters={clearAllFilters} isFilterCleared={isFilterCleared} />
      </Stack>
    </Box>
  );
}

export default SortSection;
