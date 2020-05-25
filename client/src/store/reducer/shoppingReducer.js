const shoppingReducer = (state = [], action) => {
  switch (action.type) {
    case "GETLIST":
      return [...action.payload];
    case "DELETELIST":
      const filterData = state.filter((item) => {
        return item._id.$oid != action.payload;
      });
      console.log(filterData);
      return [...filterData];
    default:
      return state;
  }
};
export default shoppingReducer;
