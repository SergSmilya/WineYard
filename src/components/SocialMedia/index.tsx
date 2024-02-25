import { List } from "@mui/material";
import SocialMediaItem from "../SocialMediaItem";

import instagramIcon from "../../assets/icons/Instagram.svg";
import twitterIcon from "../../assets/icons/Twitter.svg";
import facebookIcon from "../../assets/icons/Facebook.svg";
import linkedinIcon from "../../assets/icons/LinkedIn.svg";

export default function SocialMedia() {
  return (
    <List
      sx={{
        display: "flex",
        flexDirection: "row",
        gap: "16px",
      }}
    >
      <SocialMediaItem>
        <img src={facebookIcon} alt="Facebook" />
      </SocialMediaItem>
      <SocialMediaItem>
        <img src={twitterIcon} alt="Twitter" />
      </SocialMediaItem>
      <SocialMediaItem>
        <img src={instagramIcon} alt="Instagram" />
      </SocialMediaItem>
      <SocialMediaItem>
        <img src={linkedinIcon} alt="LinkedIn" />
      </SocialMediaItem>
    </List>
  );
}
