export type appState = {
  posts: postType[];
  users: any[];
};

export type postType = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

export type userType = {
  id: number;
  name: string;
  email: string;
  address: object;
  phone: string;
  website: string;
};

export type postActionType = {
  type: string;
  payload: postType[];
};

export type userAction = {
  type: string;
  payload: userType;
};
