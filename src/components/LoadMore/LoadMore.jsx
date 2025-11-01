import { useActions } from "../../Hooks/useActions";
import { useSelector } from "react-redux";
import "./LoadMore.css";
import { pathQuery } from "../../config";

export default function LoadMore() {
  console.log(useSelector((state) => state.catalog.hasMore));
  const { getCatalogProducts } = useActions();
  const { hasMore, offset } = useSelector((state) => state.catalog);

  function handleLoadMore() {
    const fetchSettings = {
      path: pathQuery.all,
      offset: offset,
      hasMore: hasMore,
    };
    console.log("fetchSettings: ", fetchSettings);
    getCatalogProducts(fetchSettings);
  }

  return (
    <div className="text-center">
      <button className="btn btn-outline-primary" onClick={handleLoadMore}>
        Загрузить ещё
      </button>
    </div>
  );
}
