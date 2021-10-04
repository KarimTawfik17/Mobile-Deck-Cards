import { applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

const middlewares = applyMiddleware(thunk);

export default middlewares;
