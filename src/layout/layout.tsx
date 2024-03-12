import { ReactNode, useState } from "react";
import Main from "./main";
import Header from "./header/header";
import Footer from "./footer";
import AdultVerify from "../components/AdultVerify/AdultVerify";
import ScrollToTopButton from "../components/ScrollToTopButton";
import SubscribeSect from "../components/SubscribeSect";

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  const [adultModalIsShow, setAdultModalIsShow] = useState(true);

  return (
    <>
      <AdultVerify isOpen={adultModalIsShow} handleChangeModalShow={setAdultModalIsShow} /> 
      
      <Header />

      <Main>{children}</Main>

      <ScrollToTopButton />

      <SubscribeSect />

      <Footer />
    </>
  );
}

export default Layout;
