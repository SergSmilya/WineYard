import { ReactNode } from "react";
import Main from "./main";
import Header from "./header/header";
import Footer from "./footer";

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />

      <Main>{children}</Main>

      <Footer />
    </>
  );
}

export default Layout;
