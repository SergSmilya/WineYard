import { List } from "@mui/material";
import SocialMediaItem from "./SocialMediaItem/index";

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
      <SocialMediaItem href="https://www.facebook.com/">
        <img src={facebookIcon} alt="Facebook" />
      </SocialMediaItem>
      <SocialMediaItem href="https://www.twitter.com">
        <img src={twitterIcon} alt="Twitter" />
      </SocialMediaItem>
      <SocialMediaItem href="https://www.instagram.com">
        <img src={instagramIcon} alt="Instagram" />
      </SocialMediaItem>
      <SocialMediaItem href="https://www.linkedin.com/">
        <img src={linkedinIcon} alt="LinkedIn" />
      </SocialMediaItem>
    </List>
  );
}
