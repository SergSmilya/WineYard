import { Typography } from "@mui/material";
import { info, success } from "../../theme/palette";
import { pxToRem, typography } from "../../theme/typography";
import { btnStyle } from '../../reusableStyles';

interface INumberPackBtnComp {
    children: number;
    isActiveButton: boolean;
    onClick: () => void;
}

export default function NumberPackBtnComp({children, isActiveButton, onClick}: INumberPackBtnComp) {
    const bgdColor = isActiveButton ? info.dark : 'transparent';

    return (
        <button type="button" style={{
            ...btnStyle,
            backgroundColor: bgdColor
        }}
            onClick={onClick}
        >
            <Typography sx={{
                fontSize: pxToRem(14),
                fontWeight: typography.fontWeightRegular
            }} color={success.dark}>{`${children}-pack`}</Typography>
        </button>
    )
}