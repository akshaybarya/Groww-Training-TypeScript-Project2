import { postActionType, postType } from "../utils/types";

const postReducer = (state: postType[] = [], action: postActionType) => {
  switch (action.type) {
    case "FETCH_POSTS":
      return action.payload;
    default:
      return state;
  }
};

export default postReducer;
