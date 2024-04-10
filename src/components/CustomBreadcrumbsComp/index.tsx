import { Breadcrumbs, Link, Typography } from "@mui/material";
import { success } from "../../theme/palette";
// helpers
import capitalizeFirstLetter from "../../helpers/CapitalizeFirstWord";

// const breadcrumbNameMap = {
//   '/inbox': 'Inbox',
//   '/inbox/important': 'Important',
//   '/trash': 'Trash',
//   '/spam': 'Spam',
//   '/drafts': 'Drafts',
// };

export default function CustomBreadcrumbsComp({ pathnames }: { pathnames: string[] }) {

    return (
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" href="/">
          MUI
        </Link>
        <Link
          underline="hover"
          href="/material-ui/getting-started/installation/"
        >
          Core
        </Link>
        <Typography sx={{
            marginBottom: '27px',
            letterSpacing: '0.48px'
            }} variant="h6" color={success.dark}>{capitalizeFirstLetter(pathnames[0])}</Typography>
      </Breadcrumbs>
    )
}
