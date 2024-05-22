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

  React.useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <Box sx={{ display: "flex", height: { xs: "45px", lg: "91px" } }}>
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
              alignItems: { xs: "baseline", lg: "center" },
              height: { xs: "45px", lg: "91px" },
            }}
          >
            <Stack sx={{ flexDirection: "row", gap: "70px" }}>
              <Logo width="137px" height="20px" />
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

              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={() => setMobileOpen(true)}
                sx={{ display: { md: "none" }, padding: "0 0 0 14px" }}
              >
                <MenuIcon />
              </IconButton>

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
    </Box>
  );
}
