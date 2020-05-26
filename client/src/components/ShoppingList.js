import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col } from "reactstrap";

import { dispatchGetList, dispatchRemList } from "../store/actions";

const ShoppingList = () => {
  const shopData = useSelector((state) => state.list);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(dispatchGetList());
  }, [dispatch]);
  const handleDelete = (id) => {
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
                    key={item._id ? item._id.$oid : item._id}
                  >
                    <p>{item.title}</p>
                    <p>x {item.quantity}</p>
                    <p onClick={() => handleDelete(item._id.$oid)}>X</p>
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
