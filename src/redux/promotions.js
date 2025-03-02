import * as ActionTypes from "./ActionTypes";

export const Promotions = (
  state = { errMess: null, isLoading: true, promotions: [] },
  action
) => {
  switch (action.type) {
    case ActionTypes.PROMOS_LOADING:
      return { ...state, isLoading: true, errMess: null, promotions: [] };

    case ActionTypes.PROMOS_FAILED:
      return {
        ...state,
        isLoading: false,
        errMess: action.payload,
        promotions: [],
      };

    case ActionTypes.ADD_PROMOS:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        promotions: action.payload,
      };

    default:
      return state;
  }
};
