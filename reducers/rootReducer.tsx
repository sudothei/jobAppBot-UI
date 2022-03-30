import { combineReducers } from "redux";
import locationReducer from "./location";
import keywordReducer from "./keyword";
import avoidKeywordReducer from "./avoidKeyword";

export const rootReducer = combineReducers({
  locations: locationReducer,
  keywords: keywordReducer,
  avoidKeywords: avoidKeywordReducer,
});
