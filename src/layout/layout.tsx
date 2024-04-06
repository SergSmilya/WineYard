import { ReactNode } from "react";
// component
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
  return (
    <>
      <AdultVerify /> 
      
      <Header />

      <Main>{children}</Main>

      <ScrollToTopButton />

      <SubscribeSect />

      <Footer />
    </>
  );
}

export default Layout;
