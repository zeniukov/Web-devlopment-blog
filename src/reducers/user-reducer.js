import { ACTION_TYPE } from '../actions';
import { ROLE } from '../constants';

const initialUseState = {
	id: null,
	login: null,
	roleId: ROLE.GUEST,
	session: [],
};

export const userReducer = (state = initialUseState, { type, payload }) => {
	switch (type) {
		case ACTION_TYPE.SET_USER:
			return {
				...state,
				...payload,
			};
		case ACTION_TYPE.LOGOUT:
			return initialUseState;
		default:
			return state;
	}
};
