import { Button, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import closeIcon from "../../../assets/icons/close.svg";

function FilterHeader({ onClick }: { onClick: () => void }) {
  const theme = useTheme();

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
            color: theme.palette.success.dark,
            backgroundColor: theme.palette.info.dark,
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
          color: theme.palette.success.dark,
        }}
      >
        Found 60 Wines
      </Typography>
    </Stack>
  );
}

export default FilterHeader;
