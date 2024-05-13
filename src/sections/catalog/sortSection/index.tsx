import { Box, Button, Hidden, Stack, Typography } from "@mui/material";
import DishButtons from "../dishButtons";
import SearchBox from "../searchBox";
import SortDropdownList from "../sortDropdownList";

import { common, info, success } from "../../../theme/palette";

import closeIcon from "../../../assets/icons/close.svg";
import filterIcon from "../../../assets/icons/filter.svg";

interface SortSectionProps {
  setDishName: React.Dispatch<React.SetStateAction<string>>;
  setOrdering: React.Dispatch<React.SetStateAction<string>>;
  clearAllFilters: boolean;
  isFilterCleared: boolean;
  setIsFilterCleared: React.Dispatch<React.SetStateAction<boolean>>;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  onClick: () => void;
  wineCount: number;
}

function SortSection({
  setDishName,
  setOrdering,
  clearAllFilters,
  isFilterCleared,
  setIsFilterCleared,
  setShowModal,
  onClick,
  wineCount,
}: SortSectionProps) {
  const handleDishChange = (name: string) => {
    setDishName(name);
    setIsFilterCleared(true);
  };

  const handleOrdering = (value: string) => {
    setOrdering(value);
  };

  return (
    <Box maxWidth="970px">
      <DishButtons handleDishChange={handleDishChange} />
      <Stack
        sx={{
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          gap: { xs: "10px", lg: "9px" },
          marginTop: { xs: "20px", lg: "25px" },
        }}
      >
        <SearchBox />
        <Stack
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Hidden lgUp>
            <Button
              onClick={() => setShowModal(true)}
              sx={{
                width: "86px",
                height: "40px",
                padding: "10px 14px",
                marginRight: "10px",
                borderRadius: "8px",
                color: success.contrastText,
                backgroundColor: common.white,
                transition: "opacity 200ms ease-out",
                "&:hover": {
                  backgroundColor: common.white,
                  opacity: 0.8,
                },
              }}
            >
              <img src={filterIcon} alt="" />
              <Typography
                sx={{
                  fontSize: "14px",
                  lineHeight: "12px",
                  textTransform: "capitalize",
                  margin: "3px 0 0 8px",
                }}
              >
                Filter
              </Typography>
            </Button>
          </Hidden>
          <SortDropdownList
            handleOrdering={handleOrdering}
            clearAllFilters={clearAllFilters}
            isFilterCleared={isFilterCleared}
          />
        </Stack>
      </Stack>
      <Hidden lgUp>
        <Stack
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          mt="10px"
        >
          <Typography
            sx={{
              fontSize: "14px",
              lineHeight: "21px",
              color: success.dark,
            }}
          >
            Found {wineCount} {wineCount === 1 ? "Wine" : "Wines"}
          </Typography>
          <Button
            sx={{
              width: "72px",
              height: "27px",
              padding: "6px 10px",
              borderRadius: "4px",
              color: success.dark,
              backgroundColor: info.dark,
            }}
            onClick={onClick}
          >
            <Typography
              sx={{
                fontSize: "14px",
                textTransform: "lowercase",
                marginRight: "3px",
              }}
            >
              clear
            </Typography>
            <img src={closeIcon} alt="" />
          </Button>
        </Stack>
      </Hidden>
    </Box>
  );
}

export default SortSection;
