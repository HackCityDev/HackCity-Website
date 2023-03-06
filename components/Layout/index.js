import FooterComponent from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div
      style={{ position: "relative", minHeight: "100vh", paddingTop: "70px" }}
    >
      <Navbar />
      {children}
      <FooterComponent />
    </div>
  );
}
