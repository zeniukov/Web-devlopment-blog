import { deleteSession } from '../api';
import { ROLE } from '../constants';
import { sessions } from '../sessions';

export const removeUser = async (hash, userId) => {
	const accessRoles = [ROLE.ADMIN];

	const access = await sessions.access(hash, accessRoles);

	if (!access) {
		return {
			error: 'Доступ запрещён',
			res: null,
		};
	}

	deleteSession(userId);

	return {
		error: null,
		res: true,
	};
};
