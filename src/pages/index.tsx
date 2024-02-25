import SecWineDish from "../components/SecWineDish";
import Slider from "../components/Slider"
import GiftBoxSlide from "../components/HeroSlides/giftboxSlide"
import InfluencersPicksSlide from "../components/HeroSlides/influencersPicksSlide"
import MealMatchingSlide from "../components/HeroSlides/mealMatching/mealMatchingSlide"
import WelcomeSlide from "../components/HeroSlides/welcomeSlide"
import CustomerSect from "../components/CustomerSect";
import AboutSec from "../components/AboutSec";
import SubscribeSect from "../components/SubscribeSect";

export default function HomePage() {
  return (
    <>
      <Slider>
        <WelcomeSlide />
        <MealMatchingSlide />
        <InfluencersPicksSlide />
        <GiftBoxSlide />
      </Slider>
      <SecWineDish />
      <SecWineDish />
      <CustomerSect />
      <AboutSec />
      <SubscribeSect />
    </>
  )
}