import { List } from "@mui/material";

import OptionItem from "../OptionItem";
import { useDispatch, useSelector } from "react-redux";
import { setActiveCategory } from "../../store/categoriesSlice";

interface PanelFilterDish {
  categories: Category[];
}

interface Category {
  id: number;
  name: string;
}

const panelListStyles = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  borderBottom: "1px solid #90A3BF",
  marginBottom: "48px",
};

export default function PanelFilterDishComp({ categories }: PanelFilterDish) {
  const activeCategory = useSelector(
    (state: any) => state.categories.activeCategory
  );
  const dispatch = useDispatch();

  function handleActive(categoryId: number) {
    dispatch(setActiveCategory(categoryId));
  }

  return (
    <List sx={panelListStyles} disablePadding={true} id="wine-with-dish">
      {categories.map(({ id, name }) => (
        <OptionItem
          active={id === activeCategory}
          onClick={() => handleActive(id)}
          key={id}
        >
          {name}
        </OptionItem>
      ))}
    </List>
  );
}
