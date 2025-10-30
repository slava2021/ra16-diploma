import { Link, NavLink } from "react-router-dom";
import Nav from "../../components/Nav/Nav";
import { navItems } from "../../config";
import "./Header.css";

export default function Header() {
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
                  <div
                    data-id="search-expander"
                    className="header-controls-pic header-controls-search"
                  ></div>
                  {/* <!-- Do programmatic navigation on click to /cart.html --> */}

                  <Link
                    className="header-controls-pic header-controls-cart"
                    to="/cart"
                  >
                    <div className="header-controls-cart-full">1</div>
                    <div className="header-controls-cart-menu"></div>
                  </Link>
                </div>
                <form
                  data-id="search-form"
                  className="header-controls-search-form form-inline invisible"
                >
                  <input className="form-control" placeholder="Поиск" />
                </form>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
