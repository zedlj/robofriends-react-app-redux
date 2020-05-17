import { CHANGE_SEARCH_FIELD } from './constants.js';

const initialState = {
	searchField: ''
}

//reducer is a function

export const SearchRobots = (state=initialState, action={}) => {
	switch(action.type) {
		case: CHANGE_SEARCH_FIELD:
		//return a new state
			return Object.assign({}, state, {searchField: action.payload});
			//shorthand above: ( ...state, {searchField: action.payload})			
		default:
			return state;
	}
}
