import { useSelector } from 'react-redux';
import { server } from '../bff';
import { selectUserSession } from '../selectors';
import { useCallback } from 'react';

export const useServerRequest = () => {
	const session = useSelector(selectUserSession);

	return useCallback(
		(operation, ...params) => {
			const request = ['register', 'authorize', 'fetchPost', 'fetchPosts'].includes(
				operation,
			)
				? params
				: [session, ...params];

			if (!server[operation]) {
				throw new Error(`Server operation "${operation}" not found`);
			}

			return server[operation](...request);
		},
		[session],
	);
};
