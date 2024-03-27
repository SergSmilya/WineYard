import React, { memo, useEffect } from "react";
import { Box, Slider, Typography, TextField } from "@mui/material";
import { useTheme } from "@mui/material/styles";

interface PriceRangeProps {
  setSelectedPrice: React.Dispatch<React.SetStateAction<string>>;
  resetFilters: boolean;
}

function valuetext(value: number) {
  return `${value}`;
}

function PriceRange({ setSelectedPrice, resetFilters }: PriceRangeProps) {
  const theme = useTheme();
  const primaryColor = theme.palette.primary.main;
  const maxPrice = 8000;
  const [value, setValue] = React.useState<number[]>([0, maxPrice]);

  useEffect(() => {
    if (resetFilters) {
      setValue([0, maxPrice]);
    }
  }, [resetFilters]);

  const handleChange = (_event: Event, newValue: number | number[]) => {
    if (Array.isArray(newValue)) {
      setValue(newValue as number[]);
      const priceFilter = `price_from=${newValue[0]}&price_to=${newValue[1]}`;
      setSelectedPrice(priceFilter);
    } else {
      // Обробка випадку, коли newValue є числом
      setValue([newValue, newValue as number]);
      const priceFilter = `price_from=${newValue}&price_to=${newValue}`;
      setSelectedPrice(priceFilter);
    }
  };

  const handleInputChange =
    (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = [...value];
      newValue[index] = Number(event.target.value);
      setValue(newValue);
      const priceFilter = `price_from=${newValue[0]}&price_to=${newValue[1]}`;
      setSelectedPrice(priceFilter);
    };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <Typography
        sx={{
          fontWeight: "500",
          fontSize: "22px",
          lineHeight: "33px",
        }}
      >
        Price
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <TextField
          value={value[0]}
          onChange={handleInputChange(0)}
          type="number"
          sx={{
            "& .MuiInputBase-input": {
              backgroundColor: theme.palette.common.white,
              borderRadius: "11px",
              height: "50px",
              width: "122px",
              padding: "0",
              textAlign: "center",
            },
            "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
          }}
        />
        <TextField
          value={value[1]}
          onChange={handleInputChange(1)}
          type="number"
          sx={{
            "& .MuiInputBase-input": {
              backgroundColor: theme.palette.common.white,
              borderRadius: "11px",
              height: "50px",
              width: "122px",
              padding: "0",
              textAlign: "center",
            },
            "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
          }}
        />
      </Box>

      <Slider
        getAriaLabel={() => "Price range"}
        value={value}
        min={0}
        max={maxPrice}
        onChange={handleChange}
        getAriaValueText={valuetext}
        sx={{
          "& .MuiSlider-thumb": {
            backgroundColor: theme.palette.common.white,
            width: "24px",
            height: "24px",
            border: `1px solid ${primaryColor}`,
          },
          "& .MuiSlider-rail": {
            backgroundColor: theme.palette.common.white,
            opacity: "1",
            height: "8px",
          },
          "& .MuiSlider-track ": {
            backgroundColor: primaryColor,
            opacity: "1",
            height: "8px",
          },
        }}
      />
    </Box>
  );
}

export default memo(PriceRange);
