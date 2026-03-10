import styled from 'styled-components';
import { Icon } from '../../../../components';
import { useDispatch } from 'react-redux';
import { CLOSE_MODAL, OPEN_MODAL, removePostAsync } from '../../../../actions';
import { useServerRequest } from '../../../../hooks';
import { useNavigate } from 'react-router-dom';

const SpecialPanelContainer = ({ className, id, publishedAt, editButton }) => {
	const dispatch = useDispatch();
	const requestServer = useServerRequest();
	const navigate = useNavigate();

	const onPostRemove = (id) => {
		dispatch(
			OPEN_MODAL({
				text: 'Удалить статью?',
				onConfirm: () => {
					dispatch(removePostAsync(requestServer, id)).then(() => navigate('/'));
					dispatch(CLOSE_MODAL);
				},
				onCancel: () => dispatch(CLOSE_MODAL),
			}),
		);
	};

	return (
		<div className={className}>
			<div className="published-at">
				<Icon id="fa-solid fa-calendar" margin="0 6px 0 0" size="18px" />
				{publishedAt}
			</div>
			<div className="buttons">
				{editButton}
				<Icon
					id="fa-trash-can"
					margin="0 10px 0 0"
					size="21px"
					onClick={() => onPostRemove(id)}
				/>
			</div>
		</div>
	);
};

export const SpecialPanel = styled(SpecialPanelContainer)`
	display: flex;
	justify-content: space-between;
	margin: ${({ margin }) => margin};
	font-size: 18px;
	align-items: center;

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
`;
