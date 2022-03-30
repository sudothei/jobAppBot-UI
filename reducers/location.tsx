import _ from "lodash";

const INITIAL_STATE = {};

export default function locations(state = INITIAL_STATE, action: any) {
  switch (action.type) {
    case "ADD_LOCATION": {
      let location = action.location;
      return location;
    }
    case "REMOVE_LOCATION": {
      let location = action.location;
      return location;
    }
    default:
      return state;
  }
}
