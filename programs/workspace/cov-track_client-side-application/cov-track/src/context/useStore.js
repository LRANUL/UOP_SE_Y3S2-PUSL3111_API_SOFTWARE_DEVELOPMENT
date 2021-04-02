import React, {
    createContext,
    useReducer,
    useContext,
} from "react";

// Empty initially
const initialState = {}

const StoreContext = createContext(initialState);

// useStore will be used in React components to fetch and mutate state
export const useStore = store => {
  const { state, dispatch } = useContext(StoreContext);
  return { state, dispatch };
};
