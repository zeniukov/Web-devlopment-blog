import { ACTION_TYPE } from './action-type';

export const OPEN_MODAL = (modalParams) => {
	return {
		type: ACTION_TYPE.OPEN_MODAL,
		payload: modalParams,
	};
};
