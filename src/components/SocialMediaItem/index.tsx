import { Link, ListItem } from "@mui/material";

export default function SocialMediaItem({ children }: {children:React.ReactNode}) {
    return (
        <ListItem>
            <Link href="#">
            {children}
            </Link>
        </ListItem>
    )
}