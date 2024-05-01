import { ReactNode } from "react";
import { Box } from "@mui/material";
import NameHeroSectComp from "../NameHeroSectComp";

interface IHeroSectionComp {
    children: string;
    descOne: string;
    descTwo: string;
    bgd: ReactNode;
}

export default function HeroSectionComp({children, bgd, descOne, descTwo}: IHeroSectionComp) {
    return (
        <Box sx={{
            background: `linear-gradient(0deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.40) 100%), url(${bgd}) lightgray 50% / cover no-repeat`,
            height: "810px",
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center'
          }
        }>
            <Box sx={{ margin: '0 auto'}}>
                <NameHeroSectComp
                subtitleOne={descOne}
                subtitleTwo={descTwo}>{children}</NameHeroSectComp>
            </Box>
        </Box>
    )
}