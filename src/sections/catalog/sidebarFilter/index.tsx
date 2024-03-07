import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import FilterHeader from "./filterHeader";
import PriceRange from "./priceRange";

function SidebarFilter() {
  const theme = useTheme();

  return (
    <Box sx={{color: theme.palette.success.dark,}}>
      <FilterHeader />
      <PriceRange />
    </Box>
  );
}

export default SidebarFilter;
