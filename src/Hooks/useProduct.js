import { useSelector } from "react-redux";

export const useProduct = () => {
    const product = useSelector((state) => state.product);
    return { product }
}