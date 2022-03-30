import _ from "lodash";

const INITIAL_STATE = {};

export default function avoidKeywords(state = INITIAL_STATE, action: any) {
  switch (action.type) {
    case "ADD_AVOID_KEYWORD": {
      let avoidKeyword = action.avoidKeyword;
      return avoidKeyword;
    }
    case "REMOVE_AVOID_KEYWORD": {
      let avoidKeyword = action.avoidKeyword;
      return avoidKeyword;
    }
    default:
      return state;
  }
}
