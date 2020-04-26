import axios from "axios";
import * as actions from "./../apiActionCreators";

const api = ({ dispatch }) => (next) => async (action) => {
  if (action.type === actions.apiCallBegan.type) {
    next(action);
    //make api call
    try {
      const response = await axios.request({
        baseURL: "http://localhost:9001/api/",
        url: action.payload.url,
        method: action.payload.method,
        data: action.payload.data,
      });
      //handle success
      //general success
      dispatch(actions.apiCallSuccess(response.data));
      //specific success
      if (action.payload.onSuccess) {
        dispatch({
          type: action.payload.onSuccess,
          payload: response.data,
        });
      }
    } catch {
      //handle faillure
      dispatch({ type: action.payload.onFaillure, payload: error });
    }
  } else {
    next(action);
  }
};

export default api;
