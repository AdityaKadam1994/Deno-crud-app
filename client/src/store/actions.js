import axios from "axios";

const getShoppingList = (payload) => ({
  type: "GETLIST",
  payload: payload,
});

const deleteShoppingList = (payload) => ({
  type: "DELETELIST",
  payload: payload,
});

export const dispatchGetList = () => {
  return (dispatch) => {
    axios
      .get("/api/lists")
      .then((res) => {
        console.log(res.data);
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
        console.log(res);
        dispatch(deleteShoppingList(id));
      })
      .catch((err) => console.log(err));
  };
};
