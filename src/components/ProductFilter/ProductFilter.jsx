import { useActions } from "../../Hooks/useActions";
import { pathQuery } from "../../config";

import "./ProductFilter.css";

export default function ProductFilter({
  categories,
  activeCategory,
  searchQuery,
}) {
  const { setActiveCategory, getCatalogProducts } = useActions();

  function handleActiveCategory(title) {
    const categoryId = categories.find((item) => item.title === title).id;

    const fetchSettings = {
      path: pathQuery.all,
      offset: 0,
      q: searchQuery,
      categoryId: categoryId,
    };

    setActiveCategory({ title, categoryId });
    getCatalogProducts(fetchSettings);
  }

  return (
    <ul className="catalog-categories nav justify-content-center">
      {categories.map((item, index) => {
        return (
          <li className="nav-item" key={index}>
            <a
              className={`nav-link ${
                activeCategory === item.title ? "active" : ""
              }`}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleActiveCategory(item.title);
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
