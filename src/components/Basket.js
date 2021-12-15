import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  dataSelector,
  itemsSelector,
  totalMoneyChange,
} from "../redux/moneySlice";

function Basket() {
  const dispatch = useDispatch();
  const data = useSelector(dataSelector);
  const items = useSelector(itemsSelector);

  useEffect(() => {
    let newList = data.filter((res) => res.amount > 0);
    dispatch(totalMoneyChange(newList));
  }, [dispatch, data]);

  return (
    <div className="mt-2 bg-white  ">
      <div className="w-75 m-auto text-center">
        <h3 className="py-4 text-decoration-underline">Your Receipt Status</h3>
        {items.length > 0 && (
          <table className="table table-striped table-hover text-end">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Amount</th>
                <th scope="col">Price</th>
                <th scope="col">Total Price</th>
              </tr>
            </thead>
            <tbody>
              {items.map((res, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td> {res.name}</td>
                  <td>{res.amount} </td>
                  <td>$ {res.price}</td>
                  <td>$ {Number(res.price) * res.amount}</td>
                </tr>
              ))}

              <tr className="table-dark">
                <th className="table-dark" scope="row">
                  <h5>Total :</h5>
                </th>
                <td className="table-dark"></td>
                <td className="table-dark"></td>
                <td className="table-dark"></td>
                <td className="table-dark">
                  <h6>
                    $
                    {items.reduce(
                      (acc, p) => acc + Number(p.price) * p.amount,
                      0
                    )}
                  </h6>
                </td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default Basket;
