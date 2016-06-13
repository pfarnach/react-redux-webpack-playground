import { ACTION_TYPES } from '../actions/index';

export default function(state = 'Search', action) {
	switch(action.type) {
		case ACTION_TYPES.setNav:
			return action.payload;

		default:
			return state;
	}
}