import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useActions } from "../../Hooks/useActions";
import ProductItem from "../ProductItem/ProductItem";
import "./TopSales.css";
import { pathQuery } from "../../config";
import Preloader from "../Preloader/Preloader";

export default function TopSales() {
  const { topSalesList, isLoading, error } = useSelector(
    (state) => state.topSales
  );
  const { getTopSalesProducts } = useActions();

  useEffect(() => {
    if (topSalesList.length === 0) {
      getTopSalesProducts(pathQuery.topSales);
    }
  }, []);

  return (
    <section className="top-sales">
      <h2 className="text-center">Хиты продаж!</h2>
      {isLoading ? (
        <Preloader />
      ) : error ? (
        <h2 className="error">Ошибка: {error}</h2>
      ) : (
        <div className="row">
          {topSalesList.map((item, index) => {
            return <ProductItem key={index} {...item} />;
          })}
        </div>
      )}
    </section>
  );
}
