import { Breadcrumbs, Link, Typography } from "@mui/material";
import { success } from "../../theme/palette";
import { typography } from "../../theme/typography";
import RouterLink from "../../routes/routerLink";
import { paths } from "../../config/path";
// helpers
import capitalizeFirstLetter from "../../helpers/CapitalizeFirstWord";

export default function CustomBreadcrumbsComp({ pathnames, children = '' }: { pathnames: string[], children?: string }) {
  
  return (
    <Breadcrumbs color={success.dark} aria-label="breadcrumb">
      <Link underline="hover" component={RouterLink} to={paths.HOME} color={success.dark} variant="h6">
        Main
      </Link>
      {pathnames.length > 1 ? 
        <Link underline="hover" component={RouterLink} to={pathnames[0] === 'product' ? paths.CATALOG : `/${pathnames[0]}`} color={success.dark} variant="h6">
        {capitalizeFirstLetter(pathnames[0] === 'product' ? "Catalog" : pathnames[0])}
      </Link> :  null }
      <Typography sx={{ letterSpacing: '0.48px', fontWeight: typography.fontWeightSemiBold }} variant="h6" color={success.dark}>{pathnames.length > 1 ? capitalizeFirstLetter(children) : capitalizeFirstLetter(pathnames[0]) }</Typography>
    </Breadcrumbs>
  )
}
