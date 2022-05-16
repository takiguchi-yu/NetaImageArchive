import type { ReactNode } from "react";
import Header from '../components/header'
import Footer from '../components/footer'

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

type Props = {
  children?: ReactNode;
};

export default Layout;
