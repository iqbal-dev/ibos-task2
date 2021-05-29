import { UPDATE_STATUS } from "../constant/actionType";

const dataSet = [
  {
    id: 1,
    moduleName: "Configuration",
    activityName: "Item Category",
    isCreate: false,
    isView: false,
    isEdit: false,
    isDelete: false,
    isApprove: false,
  },
  {
    id: 2,
    moduleName: "Configuration",
    activityName: "Item",
    isCreate: false,
    isView: false,
    isEdit: false,
    isDelete: false,
    isApprove: false,
  },
];
export const reducers = (state = dataSet, action) => {
  switch (action.type) {
    case UPDATE_STATUS:
      const value = action.payload.value;
      return state.map((item) => {
        if (item.id !== action.payload.id) {
          return item;
        }
        let newState = { ...item };
        newState[Object.keys(value)] = value[Object.keys(value)];
        return newState;
      });
    default:
      return state;
  }
};
