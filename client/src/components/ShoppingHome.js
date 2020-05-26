import React from "react";
import Navigation from "./Navigation";
import ShoppingList from "./ShoppingList";
import AddList from "./AddList";

const ShoppingHome = () => {
  return (
    <div>
      <Navigation />
      <AddList />
      <ShoppingList />
    </div>
  );
};

export default ShoppingHome;
