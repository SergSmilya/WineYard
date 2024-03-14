import { PathKeys, navItems, paths } from "../../config/path";
import RouterLink from "../../routes/routerLink";

import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Drawer from "@mui/material/Drawer";
import Logo from "../../components/logo";
import CustomButton from "../../components/button";

interface DrawerMenuProps {
  window?: () => Window;
  mobileOpen: boolean;
  handleDrawerToggle: () => void;
}

const drawerWidth = {
  xs: 240,
  sm: 440,
};

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
          width: { xs: drawerWidth.xs, sm: drawerWidth.sm },
        },
      }}
    >
      <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
        <Box sx={{ my: 3 }}>
          <Logo width="176px" height="25px"/>
        </Box>

        <Divider />

        <List>
          {navItems.map((item) => (
            <ListItem key={item} disablePadding>
              <ListItemButton
                component={RouterLink}
                to={paths[item.toUpperCase().replace(/\s+/g, "") as PathKeys]}
                sx={{
                  "&:hover": { backgroundColor: "#f5ebe263" },
                  textAlign: "center",
                }}
              >
                <ListItemText
                  primary={item}
                  primaryTypographyProps={{
                    sx: {
                      fontSize: { xs: "20px", sm: "22px" },
                      lineHeight: { xs: "50px", sm: "70px" },
                      fontWeight: 500,
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <Box sx={{ my: 3 }}>
          <RouterLink to={paths.CATALOG}>
            <CustomButton
              color="primary"
              text="catalog"
              width="150px"
              height="45px"
              fontsize="16px"
            />
          </RouterLink>
        </Box>
      </Box>
    </Drawer>
  );
}

export default DrawerMenu;
