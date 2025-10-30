import { catalogItems } from "../config";
import Catalog from "../components/Catalog/Catalog";

export default function CatalogPage() {
  return (
    <>
      <Catalog dataProducts={catalogItems} catalogType="products" />
    </>
  );
}
