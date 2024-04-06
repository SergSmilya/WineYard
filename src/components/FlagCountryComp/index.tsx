import { Box, Typography } from "@mui/material";
// svg
import countries from '../../../src/assets/icons/countries.svg';
// interface
interface CountryGoods {
  name: string;
}
interface FlagCountryCompProps {
    country_goods: CountryGoods | string;
    doubleGap?: boolean
}

export default function FlagCountryComp({ country_goods, doubleGap }: FlagCountryCompProps) {
    const countryName = typeof country_goods === 'string' ? country_goods : country_goods.name;
    const gap = doubleGap ? '10px' : '5px';

    return (
        <Box
            sx={{
              display: "flex",
              gap,
            }}
          >
            {/* svg flag */}
            <svg width="22px" height="16px">
              <use href={`${countries}#${countryName}`} />
            </svg>
            <Typography
              sx={{
                lineHeight: "normal",
              }}
              variant="h6"
            >
              {countryName}
            </Typography>
        </Box>
    )
}