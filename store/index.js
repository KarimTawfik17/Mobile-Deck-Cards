import { createStore } from "redux";
import middlewares from "./middleware";
import appReducer from "./reducers";

const store = createStore(appReducer, middlewares);
export default store;
