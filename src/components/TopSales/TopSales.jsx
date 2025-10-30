import Catalog from "../Catalog/Catalog";
import { topSalesItems } from "../../config";
import "./TopSales.css";

export default function TopSales() {
  return (
    <section class="top-sales">
      <h2 class="text-center">Хиты продаж!</h2>
      <Catalog dataProducts={topSalesItems} />
    </section>
  );
}
