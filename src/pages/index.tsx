import { useState } from "react"
import AdultVerify from "../components/AdultVerify/AdultVerify"
import SecWineDish from "../components/SecWineDish";
import Slider from "../components/Slider"
import GiftBoxSlide from "../components/HeroSlides/giftboxSlide"
import InfluencersPicksSlide from "../components/HeroSlides/influencersPicksSlide"
import MealMatchingSlide from "../components/HeroSlides/mealMatching/mealMatchingSlide"
import WelcomeSlide from "../components/HeroSlides/welcomeSlide"

function HomePage() {
  const [adultModalIsShow, setAdultModalIsShow] = useState(true);

  return (
    <>
      <AdultVerify isOpen={adultModalIsShow} handleChangeModalShow={setAdultModalIsShow} />
      <Slider>
        <WelcomeSlide />
        <MealMatchingSlide />
        <InfluencersPicksSlide />
        <GiftBoxSlide />
      </Slider>
      <SecWineDish />
    </>
  )
}

export default HomePage