import Input from "@mui/material/Input";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

import searchIcon from "../../../assets/icons/search.svg";
import { common, success } from "../../../theme/palette";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { setSearchText } from "../../../store/serchSlice";

const StyledSearchBox = styled("div")(() => ({
  width: "100%",
  position: "relative",
  display: "flex",
  alignItems: "center",
  height: "40px",
  borderRadius: "8px",
  backgroundColor: common.white,
}));

export default function SearchBox() {
  const dispatch = useDispatch();
  const searchText = useSelector((state: RootState) => state.searchText.searchText);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchText(event.target.value));
    if (event.target.value === '') {
      dispatch(setSearchText(''));
    }
  }

  return (
    <StyledSearchBox>
      <Box
        sx={{
          paddingLeft: "16px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <img src={searchIcon} alt="" />
      </Box>
      <Input
        autoFocus
        fullWidth
        disableUnderline
        value={searchText}
        onChange={handleChange}
        placeholder="Search"
        sx={{
          color: success.contrastText,
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
