import { Box } from "@mui/material";

import ContactsHero from "../sections/contacts/contactsHero";
import ContactUs from "../sections/contacts/contactUs";
import SocialNetwork from "../sections/contacts/socialNetwork";
import FAQ from "../sections/contacts/FAQ";

function Contacts() {
  return (
    <Box>
      <ContactsHero />
      <ContactUs />
      <SocialNetwork />
      <FAQ />
    </Box>
  );
}

export default Contacts;
