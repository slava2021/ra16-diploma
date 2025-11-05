import { useEffect } from "react";
import { useActions } from "../../Hooks/useActions";
import { pathQuery } from "../../config";
import LoadMore from "../LoadMore/LoadMore";
import ProductFilter from "../ProductFilter/ProductFilter";
import Search from "../Search/Search";
import ProductItem from "../ProductItem/ProductItem";
import Preloader from "../Preloader/Preloader";
import { useCatalog } from "../../Hooks/useCatalog";
import { LOAD_MAX_ITEMS_LIMIT } from "../../config";
import "./Catalog.css";
export default function Catalog() {
  const { catalog } = useCatalog();
  const { getCatalogProducts, incrementOffset, getCategoriesList } =
    useActions();

  const fetchSettings = {
    path: pathQuery.all,
    offset: catalog.offset,
    hasMore: catalog.hasMore,
    isLoading: true,
  };

  useEffect(() => {
    getCatalogProducts(fetchSettings);
    getCategoriesList(pathQuery.categories);
  }, []);

  function handleLoadMore() {
    if (catalog.hasMore && !catalog.isLoading) {
      incrementOffset();
      const newOffset = catalog.offset + LOAD_MAX_ITEMS_LIMIT;
      fetchSettings.offset = newOffset;
      fetchSettings.isLoading = true;
      getCatalogProducts(fetchSettings);
      fetchSettings.isLoading = false;
    }
  }

  return (
    <section className="catalog">
      <h2 className="text-center">Каталог</h2>

      {catalog.isLoading && catalog.offset === 0 ? (
        <Preloader />
      ) : catalog.error ? (
        <h2>Ошибка: {catalog.error}</h2>
      ) : (
        <>
          <Search pagePostion="catalog" />
          <ProductFilter />
          <div className="row">
            {catalog.catalogList.map((item, index) => {
              return <ProductItem key={index} {...item} />;
            })}
          </div>
          {catalog.isLoading && catalog.offset > 0 && (
            <>
              <br />
              <Preloader />
            </>
          )}
          {catalog.hasMore && <LoadMore handleLoadMore={handleLoadMore} />}
        </>
      )}
    </section>
  );
}
