import { useActions } from "../../Hooks/useActions";
import { useCatalog } from "../../Hooks/useCatalog";

import "./ProductFilter.css";
export default function ProductFilter() {
  const { setActiveCategory } = useActions();
  const { categoriesList, activeCategory } = useCatalog();

  console.log("categoriesList: ", categoriesList);

  function handleActiveCategory() {
    setActiveCategory();
  }

  return (
    <ul className="catalog-categories nav justify-content-center">
      {categoriesList?.map((item, index) => {
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
