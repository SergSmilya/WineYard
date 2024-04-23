import { Link, ListItem } from "@mui/material";
import { secondary } from "../../../theme/palette";

interface SocialMediaItemProps {
  children: React.ReactNode;
  href: string;
}

export default function SocialMediaItem({
  children,
  href,
}: SocialMediaItemProps) {
  return (
    <ListItem sx={{ padding: "0" }}>
      <Link
        href={href}
        sx={{
          backgroundColor: secondary.dark,
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
            backgroundColor: secondary.main,
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
