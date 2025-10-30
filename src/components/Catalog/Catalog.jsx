// import { catalogItems } from "../../config";
import { Link } from "react-router-dom";
import LoadMore from "../LoadMore/LoadMore";
import ProductFilter from "../ProductFilter/ProductFilter";
import Search from "../Search/Search";
import "./Catalog.css";
export default function Catalog({ dataProducts, pageType }) {
  let classSection = pageType === "top-sales" ? "top-sales" : "catalog";
  return (
    <section className={classSection}>
      <h2 className="text-center">
        {pageType === "top-sales" ? "Хиты продаж!" : "Каталог"}
      </h2>
      {pageType === "catalog" && <Search pagePostion="catalog" />}
      {pageType !== "top-sales" && <ProductFilter />}

      <div className="row">
        {dataProducts.map((item, index) => {
          return (
            <div className="col-4" key={index}>
              <div className="card catalog-item-card" key={index}>
                <img
                  src={item.images[0]}
                  className="card-img-top img-fluid"
                  alt={item.title}
                />
                <div className="card-body">
                  <p className="card-text">{item.title}</p>
                  <p className="card-text">{item.price}</p>
                  <Link to="/products/:id" className="btn btn-outline-primary">
                    Заказать
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {pageType !== "top-sales" && <LoadMore />}
    </section>
  );
}
