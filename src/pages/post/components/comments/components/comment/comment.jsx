import { useDispatch } from 'react-redux';
import { Icon } from '../../../../../../components';
import { useServerRequest } from '../../../../../../hooks';
import { CLOSE_MODAL, OPEN_MODAL, removeCommentAsync } from '../../../../../../actions';
import styled from 'styled-components';

const CommentContainer = ({ className, postId, id, author, content, publishedAt }) => {
	const dispatch = useDispatch();

	const requestServer = useServerRequest();

	const onCommentRemove = (id) => {
		dispatch(
			OPEN_MODAL({
				text: 'Удалить комментарий?',
				onConfirm: () => {
					dispatch(removeCommentAsync(requestServer, postId, id));
					dispatch(CLOSE_MODAL);
				},
				onCancel: () => dispatch(CLOSE_MODAL),
			}),
		);
	};

	return (
		<div className={className}>
			<div className="comment">
				<div className="information-panel">
					<div className="author">
						<Icon
							inactive="true"
							id="fa-solid fa-circle-user"
							margin="0 7px 0 0"
							size="18px"
							// disabled={isSaveButtonDisabled}
							// onClick={() => onRoleSave(id, selectedRoleId)}
						/>
						{author}
					</div>
					<div className="published-at">
						<Icon
							inactive="true"
							id="fa-solid fa-calendar"
							margin="0 7px 0 0"
							size="18px"
							// disabled={isSaveButtonDisabled}
							// onClick={() => onRoleSave(id, selectedRoleId)}
						/>
						{publishedAt}
					</div>
				</div>
				<div className="comment-text">{content}</div>
			</div>
			<Icon
				id="fa-trash-can"
				margin="0 0 0 7px"
				size="18px"
				// disabled={isSaveButtonDisabled}
				onClick={() => onCommentRemove(id)}
			/>
		</div>
	);
};

export const Comment = styled(CommentContainer)`
	display: flex;
	width: 100%;
	margin-top: 10px;

	* .information-panel {
		justify-content: space-between;
	}

	.comment {
		border: 1px solid #000;
		padding: 5px 10px;
		width: 550px;
	}
	& .author,
	.published-at,
	.information-panel {
		display: flex;
	}
`;
