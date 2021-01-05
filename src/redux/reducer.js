import {combineReducers} from 'redux';
const initialState = {
  score: 0,
  message: 'the secret to life',
};

//like an event listener which does something when it receives a certain action
function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'score/update':
      return {...state, score: action.payload};
    case 'score/reset':
      return {...state, score: 0};
    default:
      return state;
  }
}

function quoteReducer(state = initialState, action) {
  switch (action.type) {
    case 'quote':
      return {...state, message: action.payload};
    default:
      return state;
  }
}

export default combineReducers({quote: quoteReducer, root: rootReducer});
