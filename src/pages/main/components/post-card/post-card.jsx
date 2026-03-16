import { Link } from 'react-router-dom';
import { Icon } from '../../../../components';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const PostCardContainer = ({
	className,
	id,
	title,
	imageUrl,
	publishedAt,
	commentsCount,
}) => {
	return (
		<div className={className}>
			<Link to={`/post/${id}`}>
				<img src={imageUrl || null} alt={title} />
				<div className="post-card-footer">
					<h4>{title}</h4>
					<div className="post-card-info">
						<div className="published-at">
							<Icon
								inactive="true"
								id="fa-solid fa-calendar"
								margin="0 7px 0 0"
								size="18px"
							/>
							{publishedAt}
						</div>
						<div className="comments-count">
							<Icon
								inactive="true"
								id="fa-solid fa-comment"
								margin="0 7px 0 0"
								size="18px"
							/>
							{commentsCount}
						</div>
					</div>
				</div>
			</Link>
		</div>
	);
};

export const PostCard = styled(PostCardContainer)`
	display: flex;
	flex-direction: column;
	width: 280px;
	border: 2px solid #2f2f2f;
	border-radius: 5px;
	margin: 20px;

	& img {
		display: block;
		width: 100%;
	}

	& .post-card-footer {
		border-top: 2px solid grey;
		padding: 5px;
	}

	& .post-card-info {
		justify-content: space-between;
	}

	& .post-card-info,
	.comments-count,
	.published-at {
		display: flex;
	}

	& h4 {
		margin: 0 0 5px;
	}
`;

PostCard.propTypes = {
	id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	imageUrl: PropTypes.string.isRequired,
	publishedAt: PropTypes.string.isRequired,
	commentsCount: PropTypes.number.isRequired,
};
