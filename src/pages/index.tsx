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
import {  getUser } from "../API/Api";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [img, setImg] = useState(null);

  useEffect(() => {
     getUser().then((data)=> setImg(data.data[1].goods_img))
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
