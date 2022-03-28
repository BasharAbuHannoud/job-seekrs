import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children, data }) => {
  let isLoggedIn = false;
  let admin = false;

  if (typeof window !== "undefined") {
    isLoggedIn = localStorage.getItem("token");
    admin = localStorage.getItem("admin");
  }

  return (
    <div className="content">
      {isLoggedIn || admin ? <Navbar data={data} /> : <></>}
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
