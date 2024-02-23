import Slider from "../components/Slider"
import GiftBoxSlide from "../components/HeroSlides/giftboxSlide"
import InfluencersPicksSlide from "../components/HeroSlides/influencersPicksSlide"
import MealMatchingSlide from "../components/HeroSlides/mealMatching/mealMatchingSlide"
import WelcomeSlide from "../components/HeroSlides/welcomeSlide"


function About() {
  return (
    <div>
      <Slider>
        <WelcomeSlide />
        <MealMatchingSlide />
        <InfluencersPicksSlide />
        <GiftBoxSlide />
      </Slider>
    </div>
  )
}

export default About