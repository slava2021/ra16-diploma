import { useCart } from "../../Hooks/useCart";
import { useActions } from "../../Hooks/useActions";
import { Link } from "react-router-dom";
export default function Cart() {
  const { cart } = useCart();
  const { deleteFromCart } = useActions();
  // let localStorage = localStorage.getItem("cartItems");

  console.log("cartItems from LocalStorage: ", cart.cartItems);

  function handleDeleteFromCart(id) {
    deleteFromCart(id);
  }

  const totalPrice = cart.cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <section className="cart">
      <h2 className="text-center">Корзина</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Название</th>
            <th scope="col">Размер</th>
            <th scope="col">Кол-во</th>
            <th scope="col">Стоимость</th>
            <th scope="col">Итого</th>
            <th scope="col">Действия</th>
          </tr>
        </thead>
        <tbody>
          {cart.cartItems.map((item) => (
            <tr key={item.id}>
              <td scope="row">{item.id}</td>
              <td>
                <Link to={`/product/${item.id}`}>{item.title}</Link>
              </td>
              <td>{item.size}</td>
              <td>{item.quantity}</td>
              <td>{item.price}</td>
              <td>{item.price * item.quantity}</td>
              <td>
                <button
                  onClick={() => handleDeleteFromCart(item.id)}
                  className="btn btn-outline-danger btn-sm"
                >
                  Удалить
                </button>
              </td>
            </tr>
          ))}
          <tr>
            <td colSpan="5" className="text-right">
              Общая стоимость
            </td>
            <td>{totalPrice} руб.</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
