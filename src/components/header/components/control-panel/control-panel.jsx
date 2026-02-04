import styled from 'styled-components';
import { Icon } from '../../../icon/icon';
import { Link, useNavigate } from 'react-router-dom';

const RightAligned = styled.div`
	display: flex;
	justify-content: flex-end;
`;

const StyledLink = styled(Link)`
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 20px;
	width: 100px;
	height: 32px;
	border: 1px solid #000;
	background-color: #eee;
`;

const StyledButton = styled.div`
	&: hover {
		cursor: pointer;
	}
`;

const ControlPanelContainer = ({ className }) => {
	const navigate = useNavigate();

	return (
		<div className={className}>
			<RightAligned>
				<StyledLink to="/login">Войти</StyledLink>
			</RightAligned>

			<RightAligned>
				<StyledButton onClick={() => navigate(-1)}>
					<Icon id="fa-solid fa-backward" margin="10px 0 0 0" />
				</StyledButton>

				<Link to="/post">
					<Icon id="fa-solid fa-file-lines" margin="10px 0 0 9px" />
				</Link>

				<Link to="/users">
					<Icon id="fa-solid fa-users" margin="10px 0 0 9px" />
				</Link>
			</RightAligned>
		</div>
	);
};

export const ControlPanel = styled(ControlPanelContainer)``;
