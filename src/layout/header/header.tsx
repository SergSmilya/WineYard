import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Stack } from "@mui/material";
import Navbar from "./navbar";
import DrawerMenu from "./drawerMenu";
import Logo from "../../components/logo";
import shoppingCart from "../../assets/icons/shoppingCart.svg";
import CustomButton from "../../components/button";

export default function Header() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav" color="info" sx={{ boxShadow: "none" }}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-around",
            height: "91px",
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Stack sx={{ flexDirection: "row", gap: "70px" }}>
            <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
              <Logo />
            </Box>

            <Navbar />
          </Stack>

          <Stack sx={{ flexDirection: "row", gap: "14px" }}>
            <IconButton color="secondary" sx={{ gap: "2px" }}>
              <img src={shoppingCart} alt="Shopping cart icon" />
              <Typography variant="h6">1</Typography>
            </IconButton>
          </Stack>
        </Toolbar>
      </AppBar>

      <nav>
        <DrawerMenu
          mobileOpen={mobileOpen}
          handleDrawerToggle={handleDrawerToggle}
        />
      </nav>

      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}
