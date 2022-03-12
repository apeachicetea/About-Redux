import React from "react";
import { Table } from "react-bootstrap";
import { connect } from "react-redux";

function Cart({ state, modalState, dispatch }) {
  const handleOnClickPlus = () => {
    dispatch({ type: `${process.env.REACT_APP_PLUS}`, text: "수량 추가 완료" });
    // dispatch({ type: "Plus" });
  };
  const handleOnClickMinus = () => {
    dispatch({
      type: `${process.env.REACT_APP_MINUS}`,
      text: "수량 감소 완료",
    });
    // dispatch({ type: "Minus" });
  };

  const handleOpenModal = () => {
    dispatch({ type: "Open" });
  };

  const handleCloseModal = () => {
    dispatch({ type: "Close" });
  };

  const handleAddList = () => {
    dispatch({ type: "Add", payload: { id: 5, name: "간지신발", quan: 10 } });
  };

  const handleSubList = () => {
    dispatch({ type: "Sub" });
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
      <div
        style={{
          width: "100%",
          backgroundColor: "yellow",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {modalState ? (
          <>
            지금 구매하면 반값!!{" "}
            <button
              style={{
                width: "50px",
              }}
              onClick={handleCloseModal}
            >
              닫기
            </button>
          </>
        ) : (
          <div
            style={{
              width: "100%",
              backgroundColor: "white",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <button
              style={{
                width: "50px",
              }}
              onClick={handleOpenModal}
            >
              열기
            </button>
          </div>
        )}
      </div>
      <button onClick={handleAddList}>상품 추가</button>
      <button onClick={handleSubList}>상품 감소</button>
    </div>
  );
}

function 함수명(state) {
  return {
    state: state.reducer,
    modalState: state.modalReducer,
  };
}

export default connect(함수명)(Cart);
// export default Cart;
