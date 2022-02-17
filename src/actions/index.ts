import _ from "lodash";
import jsonPlaceHolder from "../apis/jsonPlaceHolder";

export const fetchPostAndUsers =
  () => async (dispatch: Function, getState: Function) => {
    await dispatch(fetchPosts());
    // const userId = _.uniq(_.map(getState().posts, "userId"));
    // userId.forEach((id) => dispatch(fetchUser(id)));
    /**
     * Same thing above in Loadsh using chain
     */
    _.chain(getState().posts)
      .map("userId")
      .uniq()
      .forEach((id) => dispatch(fetchUser(id)))
      .value();
  };

export const fetchPosts = () => async (dispatch: Function) => {
  const res = await jsonPlaceHolder.get("/posts");

  dispatch({
    type: "FETCH_POSTS",
    payload: res.data,
  });
};

export const fetchUser = (id: number) => async (dispatch: Function) => {
  const res = await jsonPlaceHolder.get(`/users/${id}`);

  dispatch({
    type: "FETCH_USER",
    payload: res.data,
  });
};

/** 
 * export const fetchUser = (id: number) => (dispatch: Function) =>
  _fetchUser(id, dispatch);

const _fetchUser = _.memoize(async (id: number, dispatch: Function) => {
  const res = await jsonPlaceHolder.get(`/users/${id}`);

  dispatch({
    type: "FETCH_USER",
    payload: res.data,
  });
});
*/
