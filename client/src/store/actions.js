import axios from "axios";

const getShoppingList = (payload) => ({
  type: "GETLIST",
  payload: payload,
});

const deleteShoppingList = (payload) => ({
  type: "DELETELIST",
  payload: payload,
});

const addShoppingList = (payload) => ({
  type: "ADDLIST",
  payload: payload,
});

export const dispatchGetList = () => {
  return (dispatch) => {
    axios
      .get("/api/lists")
      .then((res) => {
        dispatch(getShoppingList(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const dispatchRemList = (id) => {
  return (dispatch) => {
    axios
      .delete(`/api/lists/${id}`)
      .then((res) => {
        dispatch(deleteShoppingList(id));
      })
      .catch((err) => console.log(err));
  };
};

export const dispatchAddList = (listData) => {
  return (dispatch) => {
    axios
      .post("/api/lists", listData)
      .then((res) => {
        dispatch(addShoppingList(listData));
        dispatch(dispatchGetList());
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
