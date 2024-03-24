import { Button, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

function FilterSubmitButton({ onClick }: { onClick: () => void }) {
  const theme = useTheme();

  return (
    <Button
      sx={{
        backgroundColor: theme.palette.info.dark,
        color: theme.palette.secondary.light,
        width: "140px",
        height: "44px",
        borderRadius: "4px",
      }}
      onClick={onClick}
    >
      <Typography
        variant="button"
        sx={{ fontSize: "16px", lineHeight: "24px" }}
      >
        Submit
      </Typography>
    </Button>
  );
}

export default FilterSubmitButton;
