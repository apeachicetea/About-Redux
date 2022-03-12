import React from "react";
import { Table } from "react-bootstrap";
import { connect } from "react-redux";

function Cart({ state, dispatch }) {
  const handleOnClickPlus = () => {
    dispatch({ type: `${process.env.REACT_APP_PLUS}` });
    // dispatch({ type: "Plus" });
  };
  const handleOnClickMinus = () => {
    dispatch({ type: `${process.env.REACT_APP_MINUS}` });
    // dispatch({ type: "Minus" });
  };

  return (
    <div>
      <Table responsive>
        <tr>
          <th>#</th>
          <th>상품명</th>
          <th>수량</th>
          <th>변경</th>
        </tr>
        {state.map((el, i) => (
          <tr key={i}>
            <td>{el.id}</td>
            <td>{el.name}</td>
            <td>{el.quan}</td>
            <td>
              <button onClick={handleOnClickMinus}>-</button>
              <button onClick={handleOnClickPlus}>+</button>
            </td>
          </tr>
        ))}
      </Table>
    </div>
  );
}

function 함수명(state) {
  return {
    state,
  };
}

export default connect(함수명)(Cart);
// export default Cart;
