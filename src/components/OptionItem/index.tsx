import { ListItem, Typography } from "@mui/material";

const styleText = {
    textAlign: 'center',
    fontSize: '22px',
    fontWeight: 500,
    lineHeight: '150%',
    letterSpacing: '-0.44px'
};

const styleItem = {
    display: 'flex',
    justifyContent: 'center',
        paddingBottom: '32px',
    '&.Mui-selected': {
        borderBottom: '4px solid #1A202C',
        backgroundColor: 'transparent'
    }
};

export default function OptionItem({ children, active, onClick }: {
    children: string; active: boolean; onClick: ()=>void}) {
    
    return (
        <ListItem sx={styleItem}
            onClick={onClick}
            selected={active}
            disableGutters={true}
            disablePadding={true}>
            <Typography sx={styleText} >Best with {children}</Typography>
        </ListItem>
        
    )
}