import { RootState } from "./store"; // Import your RootState type

export const loadState = () => {
  try {
    const serializedState = sessionStorage.getItem("reduxState");
    if (!serializedState) return undefined;

    const state = JSON.parse(serializedState);

    return {
      toastSlice: state.toastSlice,
      authLogin: state.authLogin,
    };
  } catch (error) {
    console.error("Could not load state", error);
    return undefined;
  }
};

export const saveState = (state: RootState) => {
  try {
    const persistedState = {
      toastSlice: state.toastSlice,
      authLogin: state.authLogin,
    };
    sessionStorage.setItem("reduxState", JSON.stringify(persistedState));
  } catch (error) {
    console.error("Could not save state", error);
  }
};
