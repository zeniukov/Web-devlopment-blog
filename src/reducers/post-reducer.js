import { ACTION_TYPE } from '../actions';

const initialPostState = {
	id: '',
	title: '',
	image: '',
	imageUrl: '',
	content: '',
	publishedAt: '',
	comments: [],
};

export const postReducer = (state = initialPostState, { type, payload }) => {
	switch (type) {
		case ACTION_TYPE.SET_POST_DATA:
			return {
				...state,
				...payload,
			};
		default:
			return state;
	}
};
