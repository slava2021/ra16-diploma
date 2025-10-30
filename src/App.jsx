import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CatalogPage from "./pages/CatalogPage";
import CartPage from "./pages/CartPage";
import ProductPage from "./pages/ProductPage";
import NotFoundPage from "./pages/NotFoundPage";
import ContactsPage from "./pages/ContactsPage";
import Header from "./Layout/Header/Header";
import Footer from "./Layout/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Banner from "./Layout/Banner/Banner";

function App() {
  return (
    <>
      <Router>
        <Header />
        <main className="container">
          <div className="row">
            <div className="col">
              <Banner />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/catalog" element={<CatalogPage />} />
                <Route path="/product/:id" element={<ProductPage />} />
                <Route path="/contacts" element={<ContactsPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </div>
          </div>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
