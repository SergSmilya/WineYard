import { useTheme } from "@mui/material/styles";
import { Link, ListItem } from "@mui/material";

export default function SocialMediaItem({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = useTheme();
  return (
    <ListItem
      sx={{
        backgroundColor: theme.palette.secondary.dark,
        width: "36px",
        height: "36px",
        padding: "0",
        borderRadius: "8px",
        justifyContent: "center",
      }}
    >
      <Link href="#" sx={{ textDecoration: "none", lineHeight: "18px" }}>
        {children}
      </Link>
    </ListItem>
  );
}
