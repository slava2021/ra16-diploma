import Catalog from "../components/Catalog/Catalog";
import { catalogItems, topSalesItems } from "../config";

export default function HomePage() {
  return (
    <>
      <Catalog dataProducts={topSalesItems} catalogType="top-sales" />
      <Catalog dataProducts={catalogItems} catalogType="products" />
    </>
  );
}
