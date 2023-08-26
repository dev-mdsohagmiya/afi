import {
  BONUS_POINT_INCREMENT,
  LESSION_INCREMENT,
} from "../constents/LessionConstents";

export const lessionIncrement = (value) => {
  return {
    type: LESSION_INCREMENT,
    payload: value,
  };
};

export const bonusPointIncrement = (value) => {
  return {
    type: BONUS_POINT_INCREMENT,
    payload: value,
  };
};
