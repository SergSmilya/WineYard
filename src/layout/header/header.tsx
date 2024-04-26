import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Container, Stack } from "@mui/material";
import Navbar from "./navbar";
import DrawerMenu from "./drawerMenu";
import Logo from "../../components/logo";
import shoppingCart from "../../assets/icons/shoppingCart.svg";
import CustomButton from "../../components/button";
import RouterLink from "../../routes/routerLink";
import { paths } from "../../config/path";
import { Wine } from "../../types/wine";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

export default function Header() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const result: Wine[] = useSelector((state: RootState) => state.cartOrdered);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <Box sx={{ display: "flex", height: "91px" }}>
      <AppBar
        component="nav"
        position="static"
        color="info"
        sx={{ boxShadow: "none" }}
      >
        <Container sx={{ padding: "0!important" }}>
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
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
                <Logo width="137px" height="20px" />
              </Box>
              <Navbar />
            </Stack>

            <Stack
              sx={{ flexDirection: "row", gap: "14px", alignItems: "center" }}
            >
              <RouterLink
                to={paths.CARTPAGE}
                style={{ textDecoration: "none" }}
              >
                <IconButton color="secondary" sx={{ gap: "2px" }}>
                  <img src={shoppingCart} alt="Shopping cart icon" />
                  <Typography variant="h6">
                    {result.length === 0 ? "" : result.length}
                  </Typography>
                </IconButton>
              </RouterLink>
              <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
                <RouterLink
                  to={paths.CATALOG}
                  style={{ textDecoration: "none" }}
                >
                  <CustomButton
                    color="primary"
                    text="catalog"
                    width="150px"
                    height="45px"
                    fontsize="16px"
                  />
                </RouterLink>
              </Box>
            </Stack>
          </Toolbar>
        </Container>
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
