import { applyMiddleware, createStore } from "redux";
import { createWrapper } from "next-redux-wrapper";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import reducers from "./reducers/index";
import thunk from 'redux-thunk'


const makeStore = () => {
  // Create store
  const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

  // Return store
  return store;
};

// export an assembled wrapper
export const storeWrapper = createWrapper(makeStore, { debug: false });