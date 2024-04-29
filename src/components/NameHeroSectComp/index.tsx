import { Container, Stack, Typography } from "@mui/material";
import { info } from "../../theme/palette";

interface INameHeroSectComp {
    children: string
    subtitleOne: string
    subtitleTwo: string
}

export default function NameHeroSectComp({ children, subtitleOne, subtitleTwo }: INameHeroSectComp) {
    return (
        <Container>
            <Stack sx={{width:'741px', gap: '30px'}} justifyContent={'center'} alignItems={'center'}>
                <Typography variant="h1" sx={{ lineHeight: "100%", letterSpacing: '0.2px', textTransform: 'uppercase' }} color={info.light}>
                    {children}
                </Typography>

                <Typography variant="h3" sx={{ width: '682px', lineHeight: "25px" }} color={info.light}>
                {subtitleOne}
                <br />
                <br />
                {subtitleTwo}
                </Typography>
            </Stack>
        </Container>
    )
}