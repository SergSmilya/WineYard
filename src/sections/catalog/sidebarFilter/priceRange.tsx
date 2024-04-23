import React, { memo, useEffect } from "react";

import { Box, Slider, Typography, TextField } from "@mui/material";
import { primary, common } from "../../../theme/palette";

import { useMaxWinePrice } from "../../../hooks/useMaxWinePrice";

interface PriceRangeProps {
  setSelectedPrice: React.Dispatch<React.SetStateAction<string>>;
  resetFilters: boolean;
}

function valuetext(value: number) {
  return `${value}`;
}

function PriceRange({ setSelectedPrice, resetFilters }: PriceRangeProps) {
  const maxPrice = useMaxWinePrice();
  const primaryColor = primary.main;
  const [value, setValue] = React.useState<number[]>([0, maxPrice]);
  
  useEffect(() => {
    // Оновлення значення value, коли maxPrice змінюється
    setValue([0, maxPrice]);
  }, [maxPrice]);

  useEffect(() => {
    if (resetFilters) {
      setValue([0, maxPrice]);
    }
  }, [resetFilters, maxPrice]);

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
              backgroundColor: common.white,
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
              backgroundColor: common.white,
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
            backgroundColor: common.white,
            width: "24px",
            height: "24px",
            border: `1px solid ${primaryColor}`,
          },
          "& .MuiSlider-rail": {
            backgroundColor: common.white,
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
