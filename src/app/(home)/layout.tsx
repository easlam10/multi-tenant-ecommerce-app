import { Footer } from "./footer";
import { Navbar } from "./navbar";

interface props {
  children: React.ReactNode;
}

const Layout = ({ children }: props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1 bg-[#F4F4F0]">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
