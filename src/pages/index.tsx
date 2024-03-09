import SecWineDish from "../sections/main/SecWineDish";
import Slider from "../components/Slider";
import GiftBoxSlide from "../sections/main/HeroSlides/giftboxSlide";
import InfluencersPicksSlide from "../sections/main/HeroSlides/influencersPicksSlide";
import MealMatchingSlide from "../sections/main/HeroSlides/mealMatching/mealMatchingSlide";
import WelcomeSlide from "../sections/main/HeroSlides/welcomeSlide";
import CustomerSect from "../sections/main/CustomerSect";
import AboutSec from "../sections/main/AboutSec";
import BenefitsSec from "../sections/main/BenefitsSec";

import RockerStingSlide from "../sections/main/InfluencerSlides/rockerStingSlide";
import SnoopDoggSlide from "../sections/main/InfluencerSlides/snoopDoggSlide";
import JonBonJoviSlide from "../sections/main/InfluencerSlides/jonBonJoviSlide";


export default function HomePage() {

  return (
    <>
      <Slider>
        <WelcomeSlide />
        <MealMatchingSlide />
        <InfluencersPicksSlide />
        <GiftBoxSlide />
      </Slider>

      <BenefitsSec />
      <SecWineDish />
       <Slider>
        <RockerStingSlide />
        <SnoopDoggSlide />
        <JonBonJoviSlide />
      </Slider> 
      <CustomerSect />
      <AboutSec />
    </>
  );
}
