import { Box, Typography } from "@mui/material";
import { info, success } from "../../theme/palette";
import { pxToRem, typography } from "../../theme/typography";
// svg
import icon from '../../../src/assets/icons/sprites_for_item_wine.svg';
// type
interface TermsItemWine {
    children: string;
    text: string;
    nameIcon: string;
}
// styles
const wrapStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    marginBottom: '30px'
};
const iconContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '60px',
    height: '70px',
    borderRadius: '40px 40px 0 0',
    backgroundColor: info.dark,
    paddingTop: '23px'
};
const titleStyle = {
    fontSize: pxToRem(22),
    fontWeight: typography.fontWeightSemiBold,
    lineHeight: '136%'
};
const subTitleStyle = {
    fontSize: pxToRem(18),
    fontWeight: typography.fontWeightRegular,
    lineHeight: 'normal',
    letterSpacing: '0.4px'
};

export default function TermsItemWineComp({ children, text, nameIcon }: TermsItemWine) {
    return (
        <Box>
            <Box sx={wrapStyle}>
                <Box sx={iconContainerStyle}>
                    <svg width="37px" height="35px">
                        <use href={`${icon}#${nameIcon}`} />
                    </svg>
                </Box>
                <Typography sx={titleStyle} color={success.main}>{children}</Typography>
            </Box>
            <Typography sx={subTitleStyle} color={success.dark}>{text}</Typography>
        </Box>
    )
}