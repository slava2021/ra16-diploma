// import { catalogItems } from "../../config";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useActions } from "../../Hooks/useActions";
import { pathQuery } from "../../config";
import LoadMore from "../LoadMore/LoadMore";
import ProductFilter from "../ProductFilter/ProductFilter";
import Search from "../Search/Search";
import "./Catalog.css";
import ProductItem from "../ProductItem/ProductItem";
import Preloader from "../Preloader/Preloader";
export default function Catalog() {
  // let urlParams = new URLSearchParams(window.location.search);
  // console.log("catalog: ", urlParams.get("q"));
  const { catalogList, offset, hasMore, isLoading, error } = useSelector(
    (state) => state.catalog
  );
  const { getCatalogProducts } = useActions();

  useEffect(() => {
    const fetchSettings = {
      path: pathQuery.all,
      offset: offset,
      hasMore: hasMore,
    };
    getCatalogProducts(fetchSettings);
  }, [getCatalogProducts]);

  return (
    <section className="catalog">
      <h2 className="text-center">Каталог</h2>

      {isLoading ? (
        <Preloader />
      ) : error ? (
        <h2>Ошибка: {error}</h2>
      ) : (
        <>
          <Search pagePostion="catalog" />
          <ProductFilter />
          <div className="row">
            {catalogList.map((item, index) => {
              return <ProductItem key={index} {...item} />;
            })}
          </div>
          {hasMore && <LoadMore />}
        </>
      )}
    </section>
  );
}
