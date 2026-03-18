import { addSession, deleteSession, getSession } from './api';

export const sessions = {
	create(user) {
		const hash = Math.random().toFixed(50);

		addSession(hash, user);

		return hash;
	},
	async remove(hash) {
		const session = await getSession(hash);

		if (!session) return;

		deleteSession(session.id);
	},
	async access(hash, accessRoles) {
		const dsSession = await getSession(hash);
		return !!dsSession?.user && accessRoles.includes(dsSession.user.roleId);
	},
};
