import { paths } from "../../config/path";
import RouterLink from "../../routes/routerLink";

import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Drawer from "@mui/material/Drawer";
import Logo from "../../components/logo";

type PathKeys =
  | "HOME"
  | "ABOUT"
  | "CATALOG"
  | "COLLECTIONS"
  | "GIFTBOX"
  | "CONTACTS"
  | "NOT_FOUND";

interface DrawerMenuProps {
  window?: () => Window;
  mobileOpen: boolean;
  handleDrawerToggle: () => void;
}

const navItems = ["About", "Catalog", "Collections", "Gift Box", "Contacts"];

const drawerWidth = 240;

function DrawerMenu({
  window,
  mobileOpen,
  handleDrawerToggle,
}: DrawerMenuProps) {
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Drawer
      container={container}
      variant="temporary"
      open={mobileOpen}
      onClose={handleDrawerToggle}
      ModalProps={{
        keepMounted: true,
      }}
      sx={{
        display: { sm: "block", md: "none" },
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: drawerWidth,
        },
      }}
    >
      <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
        <Box sx={{ my: 2 }}>
          <Logo />
        </Box>

        <Divider />

        <List>
          {navItems.map((item) => (
            <ListItem key={item} disablePadding>
              <ListItemButton
                component={RouterLink}
                to={paths[item.toUpperCase().replace(/\s+/g, "") as PathKeys]}
                sx={{ textAlign: "center", fontWeight: 700 }}
              >
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}

export default DrawerMenu;
