import { useTheme } from "@mui/material/styles";
import { Link, ListItem } from "@mui/material";

interface SocialMediaItemProps {
  children: React.ReactNode;
  href: string;
}

export default function SocialMediaItem({
  children,
  href,
}: SocialMediaItemProps) {
  const theme = useTheme();
  return (
    <ListItem sx={{ padding: "0" }}>
      <Link
        href={href}
        sx={{
          backgroundColor: theme.palette.secondary.dark,
          width: "36px",
          height: "36px",
          padding: "0",
          borderRadius: "8px",
          textDecoration: "none",
          lineHeight: "18px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          transition: "background-color 0.3s",
          ":hover": {
            backgroundColor: theme.palette.secondary.main,
          },
        }}
        rel="noopener"
        target="_blank"
      >
        {children}
      </Link>
    </ListItem>
  );
}
