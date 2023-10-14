import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <>{children}</>
      <Footer />
    </div>
  );
};

export default MainLayout;
