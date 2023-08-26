import { createStore } from "redux";
import { LessionReducer } from "./services/reducers/LessionReduces";

export const store = createStore(LessionReducer);
