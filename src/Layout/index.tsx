import { useMediaQuery } from "@/hooks/useMediaQuery";
import AppRouter from "../routes/router";
import ResponsiveHeader from "./components/ResponsiveHeader";
import Header from "./components/Header";
import Footer from "./components/Footer";

function Layout() {
  const isLargeScreen = useMediaQuery("(min-width:720px)");

  return (
    <section>
      <header>{isLargeScreen ? <Header /> : <ResponsiveHeader />}</header>
      <main>
        <AppRouter />
      </main>
      <footer>
        <Footer />
      </footer>
    </section>
  );
}

export default Layout;
