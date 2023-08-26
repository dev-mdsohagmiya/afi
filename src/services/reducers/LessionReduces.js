import {
  BONUS_POINT_INCREMENT,
  LESSION_INCREMENT,
} from "../constents/LessionConstents";

const lessionState = {
  lavel: 0,
  point: 0,
  ciwara: 0,
};

export const LessionReducer = (state = lessionState, action) => {
  switch (action.type) {
    case LESSION_INCREMENT:
      return {
        ...state,
        ciwara: action.payload,
        lavel: Math.floor(action.payload / 5),
      };
    case BONUS_POINT_INCREMENT:
      return {
        ...state,
        point: action.payload,
      };

    default:
      return state;
  }
};
