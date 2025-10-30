import { categoriesItems } from "../../config";

export default function ProductFilter() {
  return (
    <ul className="catalog-categories nav justify-content-center">
      <li className="nav-item">
        <a className="nav-link active" href="#">
          Все
        </a>
      </li>
      {categoriesItems.map((item, index) => {
        return (
          <li className="nav-item" key={index}>
            <a className="nav-link" href="#">
              {item.title}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
