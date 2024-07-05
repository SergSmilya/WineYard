import { secondary, success } from "../../theme/palette"

export const baseGridStyles = {
  display: {xs: 'block', lg:'grid'},
  gridTemplateColumns: 'repeat(2, 1fr)',
  gridTemplateRows: 'repeat(2, 1fr)',
  columnGap: '20px',
  rowGap: '20px',
}
export const positionErrorStyles = {
  position: 'absolute',
  top: 0,
  right: 0, 
  color: 'red',
}
export const inputSideStyles = {
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
  borderRight: {sx: 'none', lg:'2px solid #D9D9D9'},
  paddingRight: {xs: 0, lg:'70px'}
}
export const commonRadioButtonStyles = {
  '.MuiRadio-root': {
    width: '40px',
    height: '40px',
    color: success.dark,
    padding: '8px',
  },
  '.MuiRadio-colorSecondary': {
    color: success.dark
  },
  '.MuiFormControlLabel-root': {
    margin: 0,
    gap: '4px',
  },
  '.MuiFormControlLabel-label': {
    letterSpacing: '0.48px',
    lineHeight: 'normal'
  }
}
export const textAreaStyles = {
  padding: '18px 12px',
  width: '100%',
  fontSize: '16px',
  letterSpacing: '0.48px',
  lineHeight: 'normal',
  border: 'none',
  color: secondary. textStyle
}