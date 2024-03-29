import { DECREMENT, INCREMENT, RESET } from "./actionTypes";

export function increment() {
  return {
    type: INCREMENT,
  };
}

export function decrement() {
  return {
    type: DECREMENT,
  };
}

export function reset() {
  return {
    type: RESET,
  };
}
