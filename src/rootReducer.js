import AppInfo from './reducer';

const sliceReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_DATA_TO_APP':
      return state;
    default:
      return state;
  }
};

export default function rootReducer(state, action) {
  const intermidateReducer = AppInfo(state, action);
  const finalState = sliceReducer(intermidateReducer, action);
  return finalState;
}
