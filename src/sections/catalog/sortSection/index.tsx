import { Box, Stack } from "@mui/material";
// import { useTheme } from "@mui/material/styles";
import DishButtons from "../dishButtons";
import SearchBox from "../searchBox";
import SortDropdownList from "../sortDropdownList";

function SortSection() {
  // const theme = useTheme();

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
