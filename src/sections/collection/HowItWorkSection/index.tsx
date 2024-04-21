import { Box, Stack } from "@mui/material";
import ImgHowItWork from '../../../assets/collection/collection_how_it_works.jpg'
import DescText from "../../../components/DescText";
import AchievementComp from "../../../components/AchievementComp";

export default function HowItWorkSection() {
    return (
        <Box sx={{ padding: '60px 0 100px' }}>
            <Stack sx={{gap: '96px'}} direction={'row'} alignItems={'center'}>
                <Box sx={{maxWidth: '576px'}}>
                    <img src={ImgHowItWork} alt="desc" width='100%' loading="lazy"/>
                </Box>
                <Box sx={{ height: '453px'}}>
                    <DescText beforeTitle='We invite you to explore the world of wine with us'>How it works</DescText>
                    <AchievementComp />
                </Box>
            </Stack>
        </Box>
    )
}