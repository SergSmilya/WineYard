import { Box, Link, Stack, Typography } from "@mui/material";
import { success } from "../theme/palette";

function TermsCondition() {
  return (
    <Box
      sx={{ color: success.dark, maxWidth: "936px", margin: "60px 80px 100px" }}
    >
      <Stack marginBottom={"60px"}>
        <Typography variant="h4" sx={{ lineHeight: "96px" }}>
          Terms & Condition
        </Typography>
        <Typography variant="subtitle1" fontSize={"14px"}>
          *This document does not hold any legal value.
        </Typography>
      </Stack>
      <Stack display={"flex"} flexDirection={"column"} gap={"40px"}>
        <Typography>
          Terms & Conditions <br />
          Welcome to Wineyard ("we," "us," or "our"). These Terms & Conditions
          ("Terms") govern your use of our website ([your website URL])
          ("Website") and the services we offer ("Services"). By accessing or
          using our Website or Services, you agree to be bound by these Terms.
        </Typography>

        <Typography>
          <strong>1. Eligibility:</strong>
          <br />
          You must be at least 18 years old and have the legal capacity to enter
          into contracts to use our Website and Services.
        </Typography>

        <Typography>
          <strong>2. Orders and Payment:</strong>
          <br />
          You can place orders for wine selections, gift boxes, and other
          products offered on our Website.
          <br />
          We accept various payment methods as displayed on the Website. Payment
          is processed securely through a third-party payment gateway.
          <br />
          We reserve the right to cancel or modify your order if there are
          pricing errors, product availability issues, or suspicion of
          fraudulent activity.
        </Typography>

        <Typography>
          <strong>3. Shipping and Delivery:</strong>
          <br />
          We offer Europe-wide delivery with estimated delivery times displayed
          on the Website.
          <br />
          Shipping costs are calculated based on your order weight and
          destination.
          <br />
          You are responsible for any applicable import duties or taxes levied
          by your country.
          <br />
          We cannot deliver alcoholic beverages to persons under the legal
          drinking age in your country. Age verification may be required.
        </Typography>

        <Typography>
          <strong>4. Returns and Refunds:</strong>
          <br />
          Unfortunately, we cannot accept returns for unopened alcoholic
          beverages due to safety and resale restrictions.
          <br />
          We will accept returns for faulty or damaged wine within [number] days
          of receipt. Please contact us immediately for return instructions.
          <br />
          We will accept returns for non-alcoholic beverages and unopened gift
          boxes within [number] days of receipt.
        </Typography>

        <Typography>
          <strong>5. User Content:</strong>
          <br />
          You may submit reviews, comments, and other content ("User Content")
          to our Website.
          <br />
          You retain ownership of your User Content but grant us a non-exclusive
          license to use, reproduce, modify, publish, and translate it.
          <br />
          You are solely responsible for your User Content and ensure it does
          not infringe on any third-party rights or contain offensive material.
        </Typography>

        <Typography>
          <strong>6. Influencer Content:</strong>
          <br />
          Influencer recommendations and reviews displayed on our Website are
          for informational purposes only.
          <br />
          We are not responsible for the accuracy or completeness of Influencer
          Content.
        </Typography>

        <Typography>
          <strong>7. Disclaimer:</strong>
          <br />
          We strive to provide accurate information on our Website but cannot
          guarantee its complete accuracy or absence of errors.
          <br />
          The wines we offer are produced using regenerative viticulture and
          fair conditions. However, we make no claims regarding the specific
          health benefits of any product.
          <br />
          We are not responsible for any adverse effects of consuming alcoholic
          beverages.
        </Typography>

        <Typography>
          <strong>8. Limitation of Liability:</strong>
          <br />
          We will not be liable for any indirect, incidental, consequential, or
          punitive damages arising from your use of our Website or Services.
          <br />
          Our liability is limited to the total amount you paid for your order.
        </Typography>

        <Typography>
          <strong>9. Intellectual Property:</strong>
          <br />
          All content on our Website, including text, images, logos, and
          trademarks, is protected by copyright, trademark, or other
          intellectual property laws.
          <br />
          You may not copy, modify, distribute, or exploit any of our content
          without our express written permission.
        </Typography>

        <Typography>
          <strong>10. Termination:</strong>
          <br />
          We may terminate your access to our Website or Services for any
          reason, with or without notice.
        </Typography>

        <Typography>
          <strong>11. Governing Law:</strong>
          <br />
          These Terms will be governed by and construed in accordance with the
          laws of [your country].
        </Typography>

        <Typography>
          <strong>12. Entire Agreement:</strong>
          <br />
          These Terms constitute the entire agreement between you and us
          regarding your use of our Website and Services.
        </Typography>

        <Typography>
          <strong>13. Updates to Terms:</strong>
          <br />
          We may update these Terms periodically. We will post any changes on
          this page.
        </Typography>

        <Typography>
          <strong>14. Contact Us:</strong>
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
          <br />
          Please note: This is a sample Terms & Conditions document and may need
          to be adapted to comply with specific legal requirements in your
          country. You may want to consult with an attorney to ensure your Terms
          & Conditions are legally compliant.
        </Typography>
      </Stack>
    </Box>
  );
}

export default TermsCondition;
