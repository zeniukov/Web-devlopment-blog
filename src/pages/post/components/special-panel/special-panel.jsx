import styled from 'styled-components';
import { Icon } from '../../../../components';

const SpecialPanelContainer = ({ className, publishedAt, editButton }) => {
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
					// disabled={isSaveButtonDisabled}
					// onClick={() => onRoleSave(id, selectedRoleId)}
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
