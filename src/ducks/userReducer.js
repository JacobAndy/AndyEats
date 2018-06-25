const initialState = {
  user: [],
  loading: false
};

//CONSTANTS

//REDUCER
export default function userReducer(state = initialState, action) {
  switch (action.type) {
    default:
      console.log("Default User Reducer State");
      return state;
  }
}

//ACTION CREATORS
