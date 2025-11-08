import { useState } from "react";
import { pathQuery } from "../../config";
import { useActions } from "../../Hooks/useActions";
import { useCart } from "../../Hooks/useCart";
import Preloader from "../Preloader/Preloader";

export default function Order() {
  const { sendOrderData } = useActions();
  const { cart } = useCart();
  const formStyle = { maxWidth: "30rem", margin: "0 auto" };
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  let cartItems = localStorage.getItem("cartItems");
  cartItems = cartItems ? JSON.parse(localStorage.getItem("cartItems")) : [];

  const fetchSettings = {
    path: pathQuery.order,
    phone: phone,
    address: address,
    items: cartItems?.map((item) => ({
      id: item.id,
      price: item.price,
      count: item.quantity,
    })),
  };

  function handleChange(e) {
    setPhone(e.target.value);
    setAddress(e.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (cartItems.length > 0) {
      console.log("Im send data to server:", fetchSettings);
      sendOrderData(fetchSettings);
      localStorage.clear();
    } else {
      alert("Корзина пуста");
    }
  }

  return (
    <>
      {cart.isLoading ? (
        <Preloader />
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
                  placeholder="Ваш телефон"
                  onChange={(e) => handleChange(e)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="address">Адрес доставки</label>
                <input
                  className="form-control"
                  id="address"
                  placeholder="Адрес доставки"
                  onChange={(e) => handleChange(e)}
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
