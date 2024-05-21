import { PathKeys, navItems, paths } from "../../config/path";
import RouterLink from "../../routes/routerLink";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import CustomButton from "../../components/button";
import { info } from "../../theme/palette";
import closeIcon from "../../assets/icons/close.svg";
import { IconButton } from "@mui/material";

interface DrawerMenuProps {
  window?: () => Window;
  mobileOpen: boolean;
  handleDrawerToggle: () => void;
}

function DrawerMenu({
  window,
  mobileOpen,
  handleDrawerToggle,
}: DrawerMenuProps) {
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <SwipeableDrawer
      container={container}
      variant="persistent"
      anchor="right"
      open={mobileOpen}
      onClose={handleDrawerToggle}
      onOpen={handleDrawerToggle}
      ModalProps={{
        keepMounted: true,
      }}
      sx={{
        display: { xs: "block", lg: "none" },
        zIndex: 2000,
        overflow: "hidden",
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: "100vw",
          height: "100%",
          top: "45px",
          left: "0",
          backgroundColor: info.main,
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        },
      }}
    >
      <IconButton
        onClick={handleDrawerToggle}
        sx={{ position: "absolute", top: "15px", right: "0", padding: "0 14px 0 0" }}
      >
        <img src={closeIcon} alt="" width="24px" height="24px" />
      </IconButton>
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              component={RouterLink}
              to={paths[item.toUpperCase().replace(/\s+/g, "") as PathKeys]}
              sx={{
                textAlign: "center",
              }}
            >
              <ListItemText
                primary={item}
                primaryTypographyProps={{
                  sx: {
                    fontSize: "24px",
                    lineHeight: "24px",
                    fontWeight: 700,
                    marginBottom: "70px",
                  },
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <RouterLink to={paths.CATALOG}>
        <CustomButton
          color="primary"
          text="catalog"
          width="150px"
          height="45px"
          fontsize="16px"
        />
      </RouterLink>
    </SwipeableDrawer>
  );
}

export default DrawerMenu;
