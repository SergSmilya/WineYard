import { ListItem, Typography } from "@mui/material";

const styleText = {
    textAlign: 'center',
    fontSize: '22px',
    fontWeight: 500,
    lineHeight: '150%',
    letterSpacing: '-0.44px'
};

export default function OptionItem({ children, selected, setSelected }: { children: string; selected: boolean; setSelected: (arg: boolean) => void; }) {

    return (
        <ListItem sx={{
            display: 'flex',
            justifyContent: 'center',
                paddingBottom: '32px',
            '&.Mui-selected': {
                borderBottom: '4px solid #1A202C',
                backgroundColor: 'transparent'
            }
        }} onClick={(e) => {
            console.log(e.currentTarget);
            console.dir(e.currentTarget);
            setSelected(true)
        }}
            selected={selected}
            disableGutters={true}
            disablePadding={true}>
                <Typography sx={styleText}>{children}</Typography>
        </ListItem>
        
    )
}