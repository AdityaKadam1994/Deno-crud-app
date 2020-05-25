import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col } from "reactstrap";

import { dispatchGetList, dispatchRemList } from "../store/actions";

const ShoppingList = () => {
  const shopData = useSelector((state) => state.list);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(dispatchGetList());
  }, []);
  const handleClick = (id) => {
    dispatch(dispatchRemList(id));
  };

  return (
    <div>
      <Container className="mt-4">
        <Row>
          <Col>
            {shopData
              ? shopData.map((item) => (
                  <div
                    className="d-flex shopping-list mb-2"
                    key={item._id.$oid}
                  >
                    <p>{item.title}</p>
                    <p>{item.quantity}</p>
                    <p onClick={() => handleClick(item._id.$oid)}>X</p>
                  </div>
                ))
              : null}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ShoppingList;
