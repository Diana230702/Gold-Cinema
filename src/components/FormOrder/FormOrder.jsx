import React from "react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "../FormOrder/FormOrder.css";
import SelectCountry from "./SelectCountry/SelectCountry";
const ModalForPay = () => {
  const [input1Value, setInput1Value] = useState("");
  const [input2Value, setInput2Value] = useState("");
  const [input3Value, setInput3Value] = useState("");
  const [input4Value, setInput4Value] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setInput1Value("");
    setInput2Value("");
    setInput3Value("");
    setInput4Value("");
  };

  return (
    <>
      <div className="pay_container">
        <form className="address">
          <h3 className="zagalovok">Адрес доставки</h3>
          <SelectCountry />
          <input type="text" placeholder="Город" className="input1" />
          <input type="text" placeholder="Почтовый индекс" className="input1" />
        </form>
        <form className="pay_form" onSubmit={handleSubmit}>
          <h3 className="zagalovok">Данные карты</h3>

          <img
            src="https://223104.selcdn.ru/hc_bank_amio_prod/uf/03c/03c5707d85ef6a33827ef39471f5df72/HC_PlzCC_GPVBM_fl+_1_.png"
            className="img_cart"
          />
          <input
            type="text"
            placeholder="ФИО"
            className="input2"
            value={input1Value}
            onChange={(event) => setInput1Value(event.target.value)}
          />
          <br />
          <br />

          <input
            type="date"
            placeholder="date"
            className="input2"
            value={input2Value}
            onChange={(event) => setInput2Value(event.target.value)}
          />
          <br />
          <br />

          <input
            type="number"
            placeholder="card number"
            className="input2"
            value={input3Value}
            onChange={(event) => setInput3Value(event.target.value)}
          />
          <br />
          <br />
          <div className="pay_wrapper">
            <input
              type="password"
              placeholder="pincode"
              className="input2"
              value={input4Value}
              onChange={(event) => setInput4Value(event.target.value)}
            />
            <br />
            <br />
            <button
              className="btn_submit"
              type="submit"
              onClick={() => toast.success("Заказ оформлен!")}
            >
              Оплатить
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ModalForPay;
