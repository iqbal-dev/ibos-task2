import { UPDATE_STATUS } from "../constant/actionType";

export const updateStatus = (value, id) => (dispatch) => {
  console.log(value, id);
  try {
    dispatch({
      type: UPDATE_STATUS,
      payload: { value, id },
    });
  } catch (error) {}
};
