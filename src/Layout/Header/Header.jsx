import { Link, NavLink } from "react-router-dom";
import Nav from "../../components/Nav/Nav";
import { navItems } from "../../config";
import "./Header.css";
import Search from "../../components/Search/Search";
import { useCart } from "../../Hooks/useCart";

export default function Header() {
  const { cart } = useCart();
  const navHeaderItems = navItems.slice(0, navItems.length - 1);

  return (
    <header className="container">
      <div className="row">
        <div className="col">
          <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <NavLink className="navbar-brand" to="/">
              <img src="/src/img/header-logo.png" alt="Bosa Noga" />
            </NavLink>
            <div className="collapse navbar-collapse" id="navbarMain">
              <Nav navItems={navHeaderItems} modulePosition="header" />
              <div>
                <div className="header-controls-pics">
                  {/* <!-- Do programmatic navigation on click to /cart.html --> */}
                  <Search pagePostion="header" />
                  <Link
                    className="header-controls-pic header-controls-cart"
                    to="/cart"
                  >
                    {cart.cartItems.length > 0 && (
                      <div className="header-controls-cart-full">
                        {cart.cartItems.length}
                      </div>
                    )}
                    <div className="header-controls-cart-menu"></div>
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
