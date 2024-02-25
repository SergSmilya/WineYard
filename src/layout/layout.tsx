import { ReactNode, useState } from "react";
import Main from "./main";
import Header from "./header/header";
import Footer from "./footer";
import AdultVerify from "../components/AdultVerify/AdultVerify";

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

      <Footer />
    </>
  );
}

export default Layout;
