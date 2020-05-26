const shoppingReducer = (state = [], action) => {
  switch (action.type) {
    case "GETLIST":
      return [...action.payload];
    case "DELETELIST":
      const filterData = state.filter((item) => {
        return item._id.$oid != action.payload;
      });

      return [...filterData];
    case "ADDLIST":
      return [...state, action.payload];
    default:
      return state;
  }
};
export default shoppingReducer;
