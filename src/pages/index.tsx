import SecWineDish from "../components/SecWineDish";
import Slider from "../components/Slider";
import GiftBoxSlide from "../components/HeroSlides/giftboxSlide";
import InfluencersPicksSlide from "../components/HeroSlides/influencersPicksSlide";
import MealMatchingSlide from "../components/HeroSlides/mealMatching/mealMatchingSlide";
import WelcomeSlide from "../components/HeroSlides/welcomeSlide";
import CustomerSect from "../components/CustomerSect";
import AboutSec from "../components/AboutSec";
import SubscribeSect from "../components/SubscribeSect";
import BenefitsSec from "../components/BenefitsSec";

import RockerStingSlide from "../components/InfluencerSlides/rockerStingSlide";
import SnoopDoggSlide from "../components/InfluencerSlides/snoopDoggSlide";
import JonBonJoviSlide from "../components/InfluencerSlides/jonBonJoviSlide";

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
      <SubscribeSect />
    </>
  );
}
