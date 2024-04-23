import { ListItem, Typography } from "@mui/material";
import { success } from "../../theme/palette";

const styleText = {
  textAlign: "center",
  fontSize: "22px",
  fontWeight: 500,
  lineHeight: "150%",
  letterSpacing: "-0.44px",
};

const styleItem = {
  display: "flex",
  justifyContent: "center",
  paddingBottom: "32px",
  cursor: "pointer",
  transition: "transform 250ms",
  "&:hover": {
    transform: "scale(1.1)",
  },
  "&.Mui-selected": {
    borderBottom: "4px solid #1A202C",
    backgroundColor: "transparent",
  },
};

export default function OptionItem({
  children,
  active,
  onClick,
}: {
  children: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <ListItem
      sx={styleItem}
      onClick={onClick}
      selected={active}
      disableGutters={true}
      disablePadding={true}
    >
      <Typography sx={styleText} color={success.dark}>
        Best with {children}
      </Typography>
    </ListItem>
  );
}
