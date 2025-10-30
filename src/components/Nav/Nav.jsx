import { NavLink } from "react-router";
import "./Nav.css";

export default function Nav({ navItems, modulePosition }) {
  let classNameNav =
    modulePosition === "header"
      ? "navbar-nav mr-auto nav-flex"
      : "nav flex-column";
  return (
    <ul className={classNameNav}>
      {navItems.map((item, index) => {
        return (
          <li className="nav-item" key={index}>
            <NavLink className="nav-link" to={item.link}>
              {item.title}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
}
