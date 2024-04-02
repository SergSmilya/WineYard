import { useState } from "react";
import { List } from "@mui/material";

import OptionItem from "../OptionItem";

import listTextButton from '../../arrayForNeeds/listNamesButtonsForSectionDishes.json';

interface PanelFilterDish {
    category: string;
    setCategory: (name: string) => void;
    resetPerPage: (page: number) => void;
    resetWineList: (list: []) => void;
}

const panelListStyles = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  borderBottom: "1px solid #90A3BF",
  marginBottom: "48px",
};

export default function PanelFilterDishComp({
  category,
  setCategory,
}: {
  category: string;
  setCategory: (name: string) => void;
}) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  function handleActive(index: number) {
    setActiveIndex(index === activeIndex ? null : index);
  }

  return (
    <List sx={panelListStyles} disablePadding={true} id="wine-with-dish">
      {listTextButton.map(({ id, name }) => (
        <OptionItem
          active={id === activeIndex}
          onClick={() => {
            handleActive(id);
            
            if (name === category) {
              setCategory("");
              return;
            }
            setCategory(name);
          }}
          key={id}
        >
          {name}
        </OptionItem>
      ))}
    </List>
  );
}

export default function PanelFilterDishComp({
    category,
    setCategory,
    resetWineList,
    resetPerPage }: PanelFilterDish) {
    
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    function handleActive(index: number) {
        setActiveIndex(index === activeIndex ? null : index);
    }

    return (<List sx={panelListStyles} disablePadding={true}>
        {listTextButton.map(({ id, name }) => (<OptionItem
            active={id === activeIndex}
            onClick={() => {
                handleActive(id);
                resetPerPage(1);
                resetWineList([]);
                if (name === category) {
                    setCategory('');
                    return;
                }
                setCategory(name);
            }}
            key={id} >{name}</OptionItem>))}
    </List>)
}
