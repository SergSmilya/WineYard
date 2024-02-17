import { Link, List, ListItem } from "@mui/material";

export default function PrivacyComp() {
    return (
        <List sx={{display:'flex', justifyContent:'space-between', alignItems:'center', columnGap:'60px'}}>
            <ListItem>
              <Link>Privacy &#38; Policy</Link>
            </ListItem>
            <ListItem>
              <Link>Terms &#38; Condition</Link>
            </ListItem>
        </List>
    )
}