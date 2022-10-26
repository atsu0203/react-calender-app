import dayjs from "dayjs";
import {
  SCHEDULES_SET_LOADING,
  SCHEDULES_ADD_ITEM,
  // SCHEDULES_ADD_ITEM_SUCCESS,
  SCHEDULES_FETCH_ITEM,
  // SCHEDULES_FETCH_ITEM_SUCCESS,
  SCHEDULES_DELETE_ITEM
} from "./actions";

const init = {
  items: [],
  isLoading: false
};


// const init = {
//   items: [
//     {
//       id: 1,
//       title: "テスト",
//       date: dayjs(),
//       location: "会議室",
//       description: "経営戦略について"
//     }
//   ],
//   isLoading: false
// };


const schedulesReducer = (state = init, action) => {
  const { type, payload } = action;

  switch (type) {
    case SCHEDULES_ADD_ITEM:
      return {
        ...state,
        isLoading: false,
        items: [...state.items, payload]
      };
    case SCHEDULES_SET_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case SCHEDULES_FETCH_ITEM:
      return {
        ...state,
        isLoading: false,
        items: payload
      };
    case SCHEDULES_DELETE_ITEM:
      return {
        ...state,
        isLoading: false,
        items: payload
      };
  
    default:
      return state;
  }
};

export default schedulesReducer;