import { Box, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import DishButtons from "../dishButtons";
import SearchBox from "../searchBox";
import SortDropdownList from "../sortDropdownList";

function SortSection() {
  const theme = useTheme();

  return (
    <Box>
      <DishButtons />
      <Stack>
        <SearchBox />
        <SortDropdownList />
      </Stack>
    </Box>
  );
}

export default SortSection;
