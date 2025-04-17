// import Footer from "../Components/Footer/Footer";
// import Navbar from "../Components/Navbar/Navbar";
import Header from "../Components/Header/Header";
export default function Layout({ children }) {
  return (
    <div>
      {/* <Navbar /> */}
      <Header />

      <main>
        <div>{children}</div>
      </main>
      {/* <footer>
        <Footer />
      </footer> */}
    </div>
  );
}
