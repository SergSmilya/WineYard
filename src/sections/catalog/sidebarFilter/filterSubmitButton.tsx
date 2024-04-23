import { Button, Typography } from "@mui/material";
import { info, secondary } from "../../../theme/palette";

function FilterSubmitButton({ onClick }: { onClick: () => void }) {
  return (
    <Button
      sx={{
        backgroundColor: info.dark,
        color: secondary.light,
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
