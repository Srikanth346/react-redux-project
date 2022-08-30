const initialState = {
  fetched: false,
  fetching: false,
  appInfo: [],
};

const AppReducer = (state = initialState, action) => {
  //es6 arrow function
  switch (action.type) {
    case 'ADD_DATA_TO_APP':
      return {
        ...state,
        appInfo: action.data,
      };
    case 'DATA_FETCHING':
      return {
        ...state,
        fetching: action.value,
      };
    case 'DATA_FETCHED':
      return {
        ...state,
        fetched: action.value,
      };
    default:
      return state;
  }
};
export default AppReducer;
