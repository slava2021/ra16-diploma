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
    q: catalog.searchQuery,
  };

  //Начальная загрузка каталога и фильтра
  useEffect(() => {
    if (catalog.catalogList.length === 0 && catalog.filter) {
      getCategoriesList(pathQuery.categories);
      getCatalogProducts(fetchSettings);
    }
  }, []);

  function handleLoadMore() {
    if (catalog.hasMore && !catalog.isLoading) {
      incrementOffset();
      const newOffset = catalog.offset + LOAD_MAX_ITEMS_LIMIT;
      fetchSettings.offset = newOffset;

      fetchSettings.categoryId =
        catalog.activeCategory === "Все"
          ? 0
          : catalog.categoriesList.find(
              (item) => item.title === catalog.activeCategory
            ).id;
      getCatalogProducts(fetchSettings);
    }
  }

  const currentPath = window.location.pathname;

  return (
    <section className="catalog">
      <h2 className="text-center">Каталог</h2>
      {currentPath === "/catalog" && <Search pagePostion="catalog" />}

      {catalog.filter === false && catalog.error === null && (
        <ProductFilter
          categories={catalog.categoriesList}
          activeCategory={catalog.activeCategory}
          searchQuery={catalog.searchQuery}
        />
      )}
      {catalog.isLoading && catalog.offset === 0 && catalog.error === null && (
        <Preloader />
      )}

      <div className="row">
        {catalog.catalogList.map((item, index) => {
          return <ProductItem key={index} {...item} />;
        })}
      </div>

      {catalog.isLoading && catalog.offset > 0 && catalog.error === null && (
        <>
          <br />
          <Preloader />
        </>
      )}
      {catalog.hasMore && !catalog.isLoading && catalog.error === null && (
        <LoadMore handleLoadMore={handleLoadMore} />
      )}
      {catalog.error && <h2 className="error">Ошибка: {catalog.error}</h2>}
      {catalog.catalogList.length === 0 &&
        !catalog.isLoading &&
        catalog.error === null && <h2 className="info">Ничего не найдено</h2>}
    </section>
  );
}
