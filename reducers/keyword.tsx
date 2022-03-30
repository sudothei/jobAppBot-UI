import _ from "lodash";

const INITIAL_STATE = {};

export default function keywords(state = INITIAL_STATE, action: any) {
  switch (action.type) {
    case "ADD_KEYWORD": {
      let keyword = action.keyword;
      return keyword;
    }
    case "REMOVE_KEYWORD": {
      let keyword = action.keyword;
      return keyword;
    }
    default:
      return state;
  }
}
