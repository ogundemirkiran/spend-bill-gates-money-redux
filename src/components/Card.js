import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  dataSelector,
  inputChangeProduct,
  finalMoneySelector,
} from "../redux/moneySlice";

import "../App.css";

function Card() {
  const dispatch = useDispatch();
  const data = useSelector(dataSelector);
  const finalMoney = useSelector(finalMoneySelector);

  const sellBtnClick = (item) => {
    var newItem = { ...item, amount: Number(item.amount) - 1 };
    var index = Number(data.findIndex((res) => res.id === item.id));
    var newData = [...data];
    newData.splice(index, 1, newItem);

    dispatch(inputChangeProduct(newData));
  };

  const buyBtnClick = (item) => {
    var newItem = { ...item, amount: Number(item.amount) + 1 };
    var index = Number(data.findIndex((res) => res.id === item.id));
    var newData = [...data];
    newData.splice(index, 1, newItem);

    dispatch(inputChangeProduct(newData));
  };

  const handleChange = (item, e) => {
    var newItem = { ...item, amount: e.target.value > -1 ? e.target.value : 0 };
    var index = Number(data.findIndex((res) => res.id === item.id));
    var newData = [...data];
    newData.splice(index, 1, newItem);

    dispatch(inputChangeProduct(newData));
  };

  return (
    <div className="row ">
      {data.map((res) => (
        <div
          key={res.id}
          className="col-sm-12 col-md-6 col-lg-4 bg-light px-5 py-4 text-center my-1"
        >
          <div
            className=" text-center bg-white "
            style={{
              boxShadow:
                "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            }}
          >
            <img
              alt={res.name}
              src={res.image}
              height={230}
              style={{ maxWidth: "95%" }}
            />
            <h3
              className="mt-3"
              style={{
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {res.name}
            </h3>
            <span className="mb-5 fs-4 fw-bold" style={{ color: "#41eb41" }}>
              ${res.price}
            </span>
          </div>
          <div
            className="py-1 pt-2 bg-white"
            style={{
              boxShadow:
                "0 4px 0px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            }}
          >
            <div
              className=" bg-white mt-2 text-center  "
              style={{
                display: "grid",
                gridColumnGap: 4,
                gridTemplateColumns: "auto auto auto",
                maxWidth: "95%",
                margin: "auto",
                backgroundColor: "white",
              }}
            >
              <button
                type="button"
                className=" btn btn-danger  bg-opacity-75 px-4"
                value={res.id}
                onClick={() => sellBtnClick(res)}
                disabled={res.amount <= 0 && true}
              >
                Sell
              </button>
              <input
                id={res.id}
                type="number"
                className="text-center fs-5 w-100 inputScrollDisable"
                onChange={(e) => handleChange(res, e)}
                value={res.amount}
              />
              <button
                type="button"
                className=" btn btn-success  bg-opacity-75 px-4"
                value={res.id}
                onClick={() => buyBtnClick(res)}
                disabled={
                  finalMoney && finalMoney < Number(res.price) ? true : false
                }
              >
                Buy
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
