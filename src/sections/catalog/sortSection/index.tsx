import { Box, Stack } from "@mui/material";
import DishButtons from "../dishButtons";
import SearchBox from "../searchBox";
import SortDropdownList from "../sortDropdownList";

interface SortSectionProps {
  setDishName: React.Dispatch<React.SetStateAction<string>>;
}

function SortSection({ setDishName }: SortSectionProps) {
  const handleDishChange = (name: string) => {
    setDishName(name);
  };


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
        <SortDropdownList />
      </Stack>
    </Box>
  );
}

export default SortSection;
