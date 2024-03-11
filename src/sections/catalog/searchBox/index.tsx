import Input from "@mui/material/Input";
import { styled } from "@mui/material/styles";
import { IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import searchIcon from "../../../assets/icons/search.svg";

const StyledSearchBox = styled("div")(({ theme }) => ({
  width: "100%",
  position: "relative",
  display: "flex",
  alignItems: "center",
  height: "40px",
  borderRadius: "8px",
  backgroundColor: theme.palette.common.white,
}));

export default function SearchBox() {
  const theme = useTheme();
  
  return (
    <StyledSearchBox>
      <IconButton
        sx={{
          position: "absolute",
          left: "8px",
        }}
      >
        <img src={searchIcon} alt="" />
      </IconButton>
      <Input
        autoFocus
        fullWidth
        disableUnderline
        placeholder="Search"
        sx={{
          color: theme.palette.success.contrastText,
          lineHeight: "24px",
          fontSize: "16px",
          position: "absolute",
          left: "42px",
          top: "7px",
        }}
      />
    </StyledSearchBox>
  );
}
