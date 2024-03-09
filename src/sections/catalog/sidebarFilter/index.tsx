import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import FilterHeader from "./filterHeader";
import PriceRange from "./priceRange";
import WineCheckbox from "./wineCheckbox";
import { wineColor, wineCountry, wineType } from "../../../config/wineFilters";
import FilterSubmitButton from "./filterSubmitButton";

function SidebarFilter() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        color: theme.palette.success.dark,
        display: "flex",
        flexDirection: "column",
        gap: "40px",
      }}
    >
      <FilterHeader />
      <PriceRange />
      <WineCheckbox title="Wine color" items={wineColor} />
      <WineCheckbox title="Wine type" items={wineType} />
      <WineCheckbox title="Wine country" items={wineCountry} />
      <FilterSubmitButton />
    </Box>
  );
}

export default SidebarFilter;
