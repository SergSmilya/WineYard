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

import { GoogleLogin } from '@react-oauth/google';
import TestGoogle from "../components/TestGoogle";



export default function HomePage() {

   const responseMessage = (response) => {
        console.log(response);
    };
    const errorMessage = (error) => {
        console.log(error);
    };

  return (
    <>
      <Slider>
        <WelcomeSlide />
        <MealMatchingSlide />
        <InfluencersPicksSlide />
        <GiftBoxSlide />
      </Slider>

      <div>
        {/* <TestGoogle /> */}
        <h1>Login</h1>
        <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
      </div>

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

// SecWineDish, CustomerSect, AboutSec
