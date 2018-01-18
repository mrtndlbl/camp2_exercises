const initialState = {
  temporaryUserName: "",
  userName: null
};

export const loginReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case "UPDATE_USERNAME":
      return {
        ...state,
        temporaryUserName: action.temporaryUserName
      };
    case "LOGIN":
      return {
        ...state,
        userName: state.temporaryUserName
      };
    default:
      return state;
  }
};
