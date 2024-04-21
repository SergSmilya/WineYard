import { Box } from "@mui/material";
import bgd from '../../../assets/collection/bgd.jpeg';
import NameHeroSectComp from "../../../components/NameHeroSectComp";

export default function HeroSection() {
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
            <NameHeroSectComp
            subtitleOne="Uncork a world of discovery with our curated Country-Specific Mystery Boxes!  Travel the globe, sip by sip, with hand-picked selections from local wine experts."
            subtitleTwo="Each box is a delightful surprise, brimming with authentic wines that capture the essence of a particular region.">Country-specific  Mysteryboxes:</NameHeroSectComp>

        </Box>
    )
}