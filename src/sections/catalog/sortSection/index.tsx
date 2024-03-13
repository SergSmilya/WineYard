import { Box, Stack } from "@mui/material";
import DishButtons from "../dishButtons";
import SearchBox from "../searchBox";
import SortDropdownList from "../sortDropdownList";
import { useDishSorting } from "../../../hooks/useDishSorting";

function SortSection() {
  useDishSorting();

  return (
    <Box>
      <DishButtons />
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
