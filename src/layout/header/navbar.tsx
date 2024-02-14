import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import RouterLink from "../../routes/routerLink";
import { paths } from "../../config/path";

type PathKeys =
  | "HOME"
  | "ABOUT"
  | "CATALOG"
  | "COLLECTIONS"
  | "GIFTBOX"
  | "CONTACTS"
  | "NOT_FOUND";

const navItems = ["About", "Catalog", "Collections", "Gift Box", "Contacts"];

function Navbar() {
  return (
    <Box sx={{ display: { xs: "none",sm: "none", md: "flex" }, gap: "25px" }}>
      {navItems.map((item) => (
        <RouterLink
          key={item}
          to={paths[item.toUpperCase().replace(/\s+/g, "") as PathKeys]}
          style={{ textDecoration: "none" }}
        >
          <Typography color="secondary" variant="h5">
            {item}
          </Typography>
        </RouterLink>
      ))}
    </Box>
  );
}

export default Navbar;
