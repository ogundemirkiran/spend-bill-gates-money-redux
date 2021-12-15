import React, { useEffect, useState } from "react";
import { CountUp } from "countup.js";
import { useDispatch, useSelector } from "react-redux";
import { itemsSelector, totalUnusedMoneyDis } from "../redux/moneySlice";

function TotalMoney() {
  const dispatch = useDispatch();
  const [moneyValue, setMoneyValue] = useState(100000000000);

  const items = useSelector(itemsSelector);

  var firstOptions = {
    startVal: 0,
    duration: 5,
  };

  window.onload = function () {
    let countUp = new CountUp("element", moneyValue, firstOptions);
    countUp.start();
  };

  useEffect(() => {
    let options = {
      startVal: moneyValue,
      duration: 5,
    };

    let totalPrice =
      items.length > 0 &&
      items.reduce((acc, p) => acc + Number(p.price) * p.amount, 0);

    let totalUnusedMoney = totalPrice
      ? 100000000000 - totalPrice
      : 100000000000;

    dispatch(totalUnusedMoneyDis(totalUnusedMoney));

    setMoneyValue(totalUnusedMoney);
    let demo = new CountUp("element", totalUnusedMoney, options);

    if (!demo.error) {
      demo.start();
    } else {
      console.error(demo.error);
    }
  }, [items]);

  return (
    <div
      className="mt-2 text-center p-3 bg-success bg-opacity-75 text-white fs-2 sticky-top  "
      style={{ fontFamily: "fantasy" }}
    >
      <section>
        $<span id="element"></span>
      </section>
    </div>
  );
}

export default TotalMoney;
