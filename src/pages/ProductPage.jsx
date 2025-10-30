import { productItem } from "../config";
export default function ProductPage() {
  console.log(productItem);
  return (
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
              <span className="catalog-item-size selected">18 US</span>{" "}
              <span className="catalog-item-size">20 US</span>
            </p>
            <p>
              Количество:{" "}
              <span className="btn-group btn-group-sm pl-2">
                <button className="btn btn-secondary">-</button>
                <span className="btn btn-outline-primary">1</span>
                <button className="btn btn-secondary">+</button>
              </span>
            </p>
          </div>
          <button className="btn btn-danger btn-block btn-lg">В корзину</button>
        </div>
      </div>
    </section>
  );
}
