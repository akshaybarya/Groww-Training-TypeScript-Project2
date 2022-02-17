import { userAction, userType } from "../utils/types";

const userReducer = (state: userType[] = [], action: userAction) => {
  switch (action.type) {
    case "FETCH_USER":
      return [...state, action.payload];
    default:
      return state;
  }
};

export default userReducer;
