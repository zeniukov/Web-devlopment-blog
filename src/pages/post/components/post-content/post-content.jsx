import styled from 'styled-components';
import { Icon, H2 } from '../../../../components';

const PostContentContainer = ({
	className,
	post: { title, imageUrl, content, publishedAt },
}) => {
	return (
		<div className={className}>
			<img src={imageUrl} alt={title} />
			<H2>{title}</H2>
			<div className="special-panel">
				<div className="published-at">
					<Icon
						id="fa-solid fa-calendar"
						margin="0 6px 0 0"
						size="18px"
						// disabled={isSaveButtonDisabled}
						// onClick={() => onRoleSave(id, selectedRoleId)}
					/>
					{publishedAt}
				</div>
				<div className="buttons">
					<Icon
						id="fa-solid fa-pen-to-square"
						margin="0 7px 0 0"
						size="21px"
						// disabled={isSaveButtonDisabled}
						// onClick={() => onRoleSave(id, selectedRoleId)}
					/>
					<Icon
						id="fa-trash-can"
						margin="0 10px 0 0"
						size="21px"
						// disabled={isSaveButtonDisabled}
						// onClick={() => onRoleSave(id, selectedRoleId)}
					/>
				</div>
			</div>
			<div className="post-text">{content}</div>
			<i className="fa-solid fa-calendar"></i>
		</div>
	);
};

export const PostContent = styled(PostContentContainer)`
	& img {
		float: left;
		margin: 0 20px 10px 0;
	}
	& .special-panel {
		display: flex;
		justify-content: space-between;
		margin: -20px 0 10px;
		font-size: 18px;
		align-items: center;
	}

	& .published-at {
		display: flex;
		// font-size: 20px;
	}

	& svg {
		position: relative;
		top: 1px;
	}

	& .buttons {
		display: flex;
		font-size: 18px;
	}

	& .post-text {
		font-size: 18px;
	}
`;
