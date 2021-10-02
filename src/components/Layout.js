import Footer from "./Footer";
import ScrollTop from "./molecules/ScrollTop";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
