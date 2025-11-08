import { useParams } from "react-router-dom";
import { useProduct } from "../../Hooks/useProduct";
import { useActions } from "../../Hooks/useActions";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Preloader from "../Preloader/Preloader";
import "./ProductItemFull.css";

export default function ProductItemFull() {
  const [isSizeAvailable, setIsSizeAvailable] = useState();
  const [quantity, setQuantity] = useState(1);
  const { product } = useProduct();
  const { getProduct, addToCart } = useActions();
  const { id } = useParams();
  const MAX_QUANTITY = 10;
  const navigate = useNavigate();

  useEffect(() => {
    if (
      product.productItem.length === 0 ||
      Number(id) !== product.productItem.id
    ) {
      getProduct(id);
    }
  }, [getProduct, id]);

  const productItem = product.productItem;

  const itemSizeAvalibale = productItem.sizes?.filter((item) => item.available);
  //   console.log("itemSizeAvalibale: ", itemSizeAvalibale);

  if (itemSizeAvalibale?.length === 0) {
    return "Доступные размеры отсутсвуют";
  }

  function handleClick(size) {
    setIsSizeAvailable(size);
  }

  function handleIncrement() {
    setQuantity((prev) => (prev < MAX_QUANTITY ? prev + 1 : prev));
  }

  function handleDecrement() {
    setQuantity((prev) => (prev > 1 ? prev - 1 : prev));
  }

  function handleAddTocart() {
    if (!isSizeAvailable) {
      return alert("Выберите размер");
    } else
      addToCart({
        id,
        title: productItem.title,
        price: productItem.price,
        quantity,
        size: isSizeAvailable,
      });
    navigate("/cart");
  }

  return (
    <>
      {product.isLoading ? (
        <>
          <br />
          <Preloader />
          <br />
        </>
      ) : (
        <section className="catalog-item">
          <h2 className="text-center">{productItem.title}</h2>
          <div className="row">
            <div className="col-5">
              <img
                src={productItem.images[0]}
                className="img-fluid"
                alt={productItem.title}
              />
            </div>
            <div className="col-7">
              <table className="table table-bordered">
                <tbody>
                  <tr>
                    <td>Артикул</td>
                    <td>{productItem.sku}</td>
                  </tr>
                  <tr>
                    <td>Производитель</td>
                    <td>{productItem.manufacturer}</td>
                  </tr>
                  <tr>
                    <td>Цвет</td>
                    <td>{productItem.color}</td>
                  </tr>
                  <tr>
                    <td>Материалы</td>
                    <td>{productItem.material}</td>
                  </tr>
                  <tr>
                    <td>Сезон</td>
                    <td>{productItem.season}</td>
                  </tr>
                  <tr>
                    <td>Повод</td>
                    <td>{productItem.reason}</td>
                  </tr>
                </tbody>
              </table>
              <div className="text-center">
                <p>
                  Размеры в наличии:{" "}
                  {itemSizeAvalibale.map((item, index) => (
                    <span
                      key={index}
                      className={`catalog-item-size ${
                        isSizeAvailable === item.size ? "selected" : ""
                      }`}
                      onClick={() => handleClick(item.size)}
                    >
                      {item.size}
                    </span>
                  ))}
                </p>
                <p>
                  Количество:{" "}
                  <span className="btn-group btn-group-sm pl-2">
                    <button
                      className="btn btn-secondary"
                      onClick={handleDecrement}
                    >
                      -
                    </button>
                    <span className="btn btn-outline-primary">{quantity}</span>
                    <button
                      className="btn btn-secondary"
                      onClick={handleIncrement}
                    >
                      +
                    </button>
                  </span>
                </p>
              </div>
              <button
                onClick={handleAddTocart}
                className="btn btn-danger btn-block btn-lg"
              >
                В корзину
              </button>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
