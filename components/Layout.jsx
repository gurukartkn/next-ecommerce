import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="bg-slate-50">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
