export const deletePost = (postId) =>
	fetch(`http://localhost:3005/post/${postId}`, {
		method: 'DELETE',
	});
