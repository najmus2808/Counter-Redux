import { DECREMENT, INCREMENT } from "../actions/actionTypes";

const initState = {
  counter: 0,
};

export const counterReducer = (state = initState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { counter: state?.counter + action.payload };
    case DECREMENT:
      return { counter: state?.counter - action.payload };
    default:
      return state;
  }
};
