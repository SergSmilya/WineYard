import { Box, Link, List, ListItem, Stack, Typography } from "@mui/material";
import { success } from "../theme/palette";

function PrivacyPolicy() {
  return (
    <Box
      sx={{ color: success.dark, maxWidth: "936px", margin: "60px 80px 100px" }}
    >
      <Stack marginBottom={"60px"}>
        <Typography variant="h4" sx={{ lineHeight: "96px" }}>
          Privacy&Policy
        </Typography>
        <Typography variant="subtitle1" fontSize={"14px"}>
          *This document does not hold any legal value.
        </Typography>
      </Stack>
      <Stack display={"flex"} flexDirection={"column"} gap={"40px"}>
        <Typography>Last updated [Date]</Typography>
        <Typography>
          Wineyard ("we," "us," or "our") is committed to protecting your
          privacy and the security of your personal information. This Privacy
          Policy explains how we collect, use, disclose, and store your
          information when you visit our website ([your website URL])
          ("Website") and use our services.
        </Typography>

        <Typography>
          <strong>Information We Collect:</strong>
          <br />
          Information you provide:
          <List>
            <ListItem>
              Contact information (name, email address, phone number, shipping
              address)
            </ListItem>
            <ListItem>Account login information (username, password)</ListItem>
            <ListItem>
              Payment information (credit card details - we do not store this
              information ourselves)
            </ListItem>
            <ListItem>
              Preferences (wine selections, dietary restrictions)
            </ListItem>
            <ListItem>Reviews and comments</ListItem>
          </List>
          Information collected automatically:
          <List>
            <ListItem>
              Device information (IP address, browser type, operating system)
            </ListItem>
            <ListItem>
              Browsing activity (pages visited, search terms used)
            </ListItem>
            <ListItem>
              Information collected through cookies and similar technologies
              (for more information, see our Cookie Policy)
            </ListItem>
          </List>
        </Typography>

        <Typography>
          <strong>How We Use Your Information:</strong>
          <br />
          We use your information to:
          <List sx={{ listStyle: "inside" }}>
            <ListItem sx={{ display: "list-item" }}>
              Process your orders and deliver your wine selections
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              Create and manage your account
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              Send you promotional emails and communications about our products
              and services (with your consent)
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              Personalize your experience on our Website (recommendations based
              on preferences)
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              Improve our Website and services
            </ListItem>

            <ListItem sx={{ display: "list-item" }}>
              Analyze trends and user behavior
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              Comply with legal and regulatory requirements
            </ListItem>
          </List>
        </Typography>

        <Typography>
          <strong>Disclosure of Your Information:</strong>
          <br />
          We may disclose your information to:
          <List sx={{ listStyle: "inside" }}>
            <ListItem sx={{ display: "list-item" }}>
              Third-party service providers who help us operate our business
              (e.g., payment processors, shipping companies, marketing agencies)
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              Law enforcement or regulatory authorities, as required by law
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              In the event of a business transaction (merger, acquisition, asset
              sale)
            </ListItem>
            We will never sell or rent your personal information to third
            parties.
          </List>
        </Typography>

        <Typography>
          <strong>Data Retention:</strong>
          <br />
          We will retain your information for as long as necessary to fulfill
          the purposes described in this Privacy Policy, unless a longer
          retention period is required or permitted by law.
        </Typography>

        <Typography>
          <strong>Security:</strong>
          <br />
          We take reasonable steps to protect your information from unauthorized
          access, disclosure, alteration, or destruction. However, no website or
          internet transmission is completely secure.
        </Typography>

        <Typography>
          <strong>Children's Privacy:</strong>
          <br />
          Our Website is not directed towards children under the age of 18. We
          do not knowingly collect personal information from children under 18.
        </Typography>

        <Typography>
          <strong>Your Choices:</strong>
          <br />
          You have choices regarding your information:
          <List sx={{ listStyle: "inside" }}>
            <ListItem sx={{ display: "list-item" }}>
              You can access, update, or delete your information through your
              account settings.
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              You can unsubscribe from promotional emails by clicking the
              "unsubscribe" link in any email we send you.
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              You can manage your cookie preferences through your browser
              settings.
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              Changes to this Privacy Policy:
            </ListItem>
          </List>
        </Typography>

        <Typography>
          We may update this Privacy Policy from time to time. We will post any
          changes on this page.
        </Typography>

        <Typography>
          <strong>Contact Us:</strong>
          <br />
          If you have any questions about this Privacy Policy, please contact us
          at{" "}
          <Link
            sx={{ color: success.dark, textDecorationColor: success.dark }}
            href="mailto:info@wineyard.com" 
          >
            info@wineyard.com
          </Link>
          .
        </Typography>

        <Typography>
          <strong>Additional Notes:</strong>
          <br />
          You may want to include a link to a separate Cookie Policy that
          details the specific cookies used on your Website and how users can
          manage them.
          <br />
          Consider mentioning the specific legal regulations you comply with,
          such as GDPR (General Data Protection Regulation) in the EU.
        </Typography>
      </Stack>
    </Box>
  );
}

export default PrivacyPolicy;
