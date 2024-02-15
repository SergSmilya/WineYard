import { List } from "@mui/material";
import SocialMediaItem from "../SocialMediaItem";

import Instagram from '../../icon-sprite.svg#Instagram'

export default function SocialMedia() {
    return (
        <List>
            <SocialMediaItem>{Instagram}</SocialMediaItem>
            {/* <SocialMediaItem>{ }</SocialMediaItem>
            <SocialMediaItem>{ }</SocialMediaItem>
            <SocialMediaItem>{}</SocialMediaItem> */}
        </List>
    )
}

{/* <svg class="icon Instagram"><use href="#Instagram"></use></svg> */}