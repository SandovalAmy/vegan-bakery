import Navigation from "./components/Navigation/Navigation";
import Headline from "./components/Headline/Headline";
import Gallery from "./components/Gallery/Gallery";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Products from "./components/Products/Products";
import Location from "./components/Location/Location";
import Contact from "./components/Contact/Contact";
import { HashRouter, Routes, Route, NavigationType } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <div>
              <Navigation />
              <Headline />
              <Gallery />
              <Footer />
            </div>
          }
        />
        <Route
          path="/About"
          element={
            <div>
              <Navigation />
              <About />
              <Footer />
            </div>
          }
        />
        <Route
          path="/Products"
          element={
            <div>
              <Navigation />
              <Products />
              <Footer />
            </div>
          }
        />
        <Route
          path="/Location"
          element={
            <div>
              <Navigation />
              <Location />
              <Footer />{" "}
            </div>
          }
        />
        <Route
          path="/Contact"
          element={
            <div>
              <Navigation />
              <Contact />
              <Footer />
            </div>
          }
        />
      </Routes>
    </HashRouter>
  );
}

export default App;
