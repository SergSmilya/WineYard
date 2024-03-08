import SecWineDish from "../sections/main/SecWineDish";
import Slider from "../components/Slider";
import GiftBoxSlide from "../sections/main/HeroSlides/giftboxSlide";
import InfluencersPicksSlide from "../sections/main/HeroSlides/influencersPicksSlide";
import MealMatchingSlide from "../sections/main/HeroSlides/mealMatching/mealMatchingSlide";
import WelcomeSlide from "../sections/main/HeroSlides/welcomeSlide";
import CustomerSect from "../sections/main/CustomerSect";
import AboutSec from "../sections/main/AboutSec";
import SubscribeSect from "../sections/main/SubscribeSect";
import BenefitsSec from "../sections/main/BenefitsSec";

import RockerStingSlide from "../components/InfluencerSlides/rockerStingSlide";
import SnoopDoggSlide from "../components/InfluencerSlides/snoopDoggSlide";
import JonBonJoviSlide from "../components/InfluencerSlides/jonBonJoviSlide";
import {  getUser } from "../API/Api";
import { useEffect, useState } from "react";


export default function HomePage() {
  const [img, setImg] = useState(null);

  useEffect(() => {
    getUser().then((data) => {
      console.log(data?.data)
      setImg(data?.data[1].goods_img)
    })
  }, [])
  
  return (
    <>
      <Slider>
        <WelcomeSlide />
        <MealMatchingSlide />
        <InfluencersPicksSlide />
        <GiftBoxSlide />
      </Slider>

      {!img ? null : <img src={img} />}
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
