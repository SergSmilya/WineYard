import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import RouterLink from "../../routes/routerLink";
import { PathKeys, navItems, paths } from "../../config/path";

interface NavbarProps {
  isFooterPart?: boolean;
}
function Navbar({ isFooterPart }: NavbarProps) {
  const filteredNavItems = navItems.filter((item) => item);

  return (
    <Box
      sx={{
        display: { xs: isFooterPart ? "flex" : "none", lg: "flex" },
        flexDirection: { xs: isFooterPart ? "column" : "row", lg: "row" },
        gap: { xs: "40px", lg: "25px" },
      }}
    >
      {filteredNavItems.map((item) => (
        <RouterLink
          key={item}
          to={paths[item.toUpperCase().replace(/\s+/g, "") as PathKeys]}
          style={{ textDecoration: "none" }}
        >
          <Typography
            color="secondary"
            variant="h5"
            sx={{
              "&:hover": { opacity: 0.8 },
              transition: "opacity 0.2s ease-in-out",
            }}
          >
            {item}
          </Typography>
        </RouterLink>
      ))}
    </Box>
  );
}

export default Navbar;
