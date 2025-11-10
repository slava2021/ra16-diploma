import { useState } from "react";
import { useActions } from "../../Hooks/useActions";
import { useCart } from "../../Hooks/useCart";
import Preloader from "../Preloader/Preloader";

export default function Order() {
  const { sendOrderData, clearOrderResponse } = useActions();
  const { cart } = useCart();
  const formStyle = { maxWidth: "30rem", margin: "0 auto" };
  // const [response, setResponse] = useState(null);
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  let response = "";
  let cartItems = localStorage.getItem("cartItems");
  cartItems = cartItems ? JSON.parse(localStorage.getItem("cartItems")) : [];

  if (cart.response !== null && cart.cartItems.length === 0) {
    response = cart.response;
  } else {
    setTimeout(() => {
      clearOrderResponse();
    }, 10000);
  }

  function handleChangePhone(e) {
    setPhone(e.target.value);
  }

  function handleChangeAddress(e) {
    setAddress(e.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (cartItems.length > 0) {
      const fetchSettings = {
        owner: {
          phone: phone,
          address: address,
        },
        items: cartItems?.map((item) => ({
          id: Number(item.id),
          price: item.price,
          count: item.quantity,
        })),
      };
      sendOrderData(fetchSettings);
    } else {
      alert("Корзина пуста");
    }
  }

  return (
    <>
      {cart.isLoading ? (
        <>
          <br />
          <Preloader />
        </>
      ) : cart.error ? (
        <h1 className="error">{cart.error}</h1>
      ) : response === 204 && cart.cartItems.length === 0 ? (
        <h1 className="success">Заказ успешно отправлен</h1>
      ) : (
        <section className="order">
          <h2 className="text-center">Оформить заказ</h2>
          <div className="card" style={formStyle}>
            <form className="card-body" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="phone">Телефон</label>
                <input
                  className="form-control"
                  id="phone"
                  type="phone"
                  placeholder="Ваш телефон"
                  onChange={(e) => handleChangePhone(e)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="address">Адрес доставки</label>
                <input
                  className="form-control"
                  id="address"
                  type="text"
                  placeholder="Адрес доставки"
                  onChange={(e) => handleChangeAddress(e)}
                  required
                />
              </div>
              <div className="form-group form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="agreement"
                  required
                />
                <label className="form-check-label" htmlFor="agreement">
                  Согласен с правилами доставки
                </label>
              </div>
              <button type="submit" className="btn btn-outline-secondary">
                Оформить
              </button>
            </form>
          </div>
        </section>
      )}
    </>
  );
}
