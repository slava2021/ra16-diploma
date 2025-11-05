import { useSelector } from "react-redux";

export const useCatalog = () => {
    const catalog = useSelector((state) => state.catalog);
    return { catalog };
};