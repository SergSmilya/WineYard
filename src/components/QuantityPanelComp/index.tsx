import { Box, Button, Typography } from "@mui/material";
import { error, success } from "../../theme/palette";
import { useDispatch } from "react-redux";
import { decreaseQuantity, increaseQuantity } from "../../store/cartOrderedSlice";
import { typography } from "../../theme/typography";
// styles
const baseDoxStyles = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '20px',
    borderRadius: '4px',
    padding: '6px',
    marginBottom: '14px',
    backgroundColor: `${error.contrastText}`,
}
const baseButtonStyles = {
    padding: 0,
    minWidth: 'auto',
    fontFamily: typography.fontFamily,
    fontWeight: typography.fontWeightRegular,
    fontSize: '25px',
    lineHeight: '64%',
    letterSpacing: '0.4px',
    color: success.dark
}
// types
interface IQuantityPanelComp {
    children: number
    id: number
}

export default function QuantityPanelComp({ children, id }: IQuantityPanelComp) {
    const dispatch = useDispatch();

    return (
    <Box sx={baseDoxStyles}>
        <Button sx={baseButtonStyles} onClick={() => dispatch(increaseQuantity(id))} >&#43;</Button>
        <Typography sx={{ letterSpacing: '0.4px'}} variant="h6" color={success.dark}>{children}</Typography>
        <Button sx={baseButtonStyles} onClick={() => dispatch(decreaseQuantity(id))}>&#8722;</Button>
    </Box>
    )
}