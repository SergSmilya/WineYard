import { ReactNode } from "react";
// component
import Main from "./main";
import Header from "./header/header";
import Footer from "./footer";
import AdultVerify from "../components/AdultVerify/AdultVerify";
import ScrollToTopButton from "../components/ScrollToTopButton";
import SubscribeSect from "../components/SubscribeSect";
// tostify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

      <ToastContainer
        autoClose={2500}
      />
    </>
  );
}

export default Layout;
