import { Button, Stack, Typography } from "@mui/material";

import closeIcon from "../../../assets/icons/close.svg";
import { info, success } from "../../../theme/palette";

function FilterHeader({
  onClick,
  wineCount,
}: {
  onClick: () => void;
  wineCount: number;
}) {
  return (
    <Stack>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontWeight: "600",
            fontSize: "32px",
            lineHeight: "48px",
          }}
        >
          Filters
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
              fontWeight: "400",
              fontSize: "14px",
              lineHeight: "414px",
              textTransform: "lowercase",
              marginRight: "3px",
            }}
          >
            clear
          </Typography>
          <img src={closeIcon} alt="" />
        </Button>
      </Stack>
      <Typography
        sx={{
          fontWeight: "400",
          fontSize: "14px",
          lineHeight: "21px",
          color: success.dark,
        }}
      >
        Found {wineCount} {wineCount === 1 ? "Wine" : "Wines"}
      </Typography>
    </Stack>
  );
}

export default FilterHeader;
