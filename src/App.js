import Navigation from "./components/Navigation/Navigation";
import Headline from "./components/Headline/Headline";
import Gallery from "./components/Gallery/Gallery";
import Footer from "./components/Footer/Footer";
import { HashRouter, Routes, Route } from "react-router-dom";

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
      </Routes>
    </HashRouter>
  );
}

export default App;
