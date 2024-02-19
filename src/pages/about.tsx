import Slider from "../components/Slider"
import GiftBoxSlide from "../components/Slides/giftboxSlide"
import InfluencersPicksSlide from "../components/Slides/influencersPicksSlide"
import MealMatchingSlide from "../components/Slides/mealMatchingSlide"
import WelcomeSlide from "../components/Slides/welcomeSlide"


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