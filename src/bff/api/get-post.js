import { transformPost } from '../transformers';

export const getPost = async (postId) =>
	fetch(`http://localhost:3005/post/${postId}`)
		.then((loadedPost) => loadedPost.json())
		.then((loadedPost) => loadedPost && transformPost(loadedPost));
