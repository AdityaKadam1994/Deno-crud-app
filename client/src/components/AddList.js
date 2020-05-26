import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, Container } from "reactstrap";
import { useDispatch } from "react-redux";
import { dispatchAddList } from "../store/actions";

function AddList() {
  const [title, setTitle] = useState("");
  const [quantity, setQuantity] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const addData = {
      title,
      quantity,
    };
    dispatch(dispatchAddList(addData));
  };
  return (
    <div>
      <Container>
        <Form className="mt-4" inline onSubmit={handleSubmit}>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="exampleEmail" className="mr-sm-2">
              Title :
            </Label>
            <Input
              type="text"
              placeholder="Title..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </FormGroup>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="examplePassword" className="mr-sm-2">
              Quantity :
            </Label>
            <Input
              type="number"
              placeholder="Quantity..."
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              required
            />
          </FormGroup>
          <Button type="submit">Submit</Button>
        </Form>
      </Container>
    </div>
  );
}

export default AddList;
