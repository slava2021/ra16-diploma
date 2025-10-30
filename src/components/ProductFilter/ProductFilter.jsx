import { useState } from "react";
import { categoriesItems } from "../../config";
import "./ProductFilter.css";
export default function ProductFilter() {
  const [selectedCategory, setSelectedCategory] = useState("Все");

  function handleClick(category) {
    setSelectedCategory(category);
  }

  return (
    <ul className="catalog-categories nav justify-content-center">
      {categoriesItems.map((item, index) => {
        return (
          <li className="nav-item" key={index}>
            <a
              className={`nav-link ${
                selectedCategory === item.title ? "active" : ""
              }`}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleClick(item.title);
              }}
            >
              {item.title}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
