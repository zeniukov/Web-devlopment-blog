import styled from 'styled-components';
import { Icon } from '../../../icon/icon';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../../../button/button';
import { ROLE } from '../../../../constants';
import {
	selectUserRole,
	selectUserLogin,
	selectUserSession,
} from '../../../../selectors/';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../../../actions';
import { checkAccess } from '../../../../utils';

const RightAligned = styled.div`
	display: flex;
	justify-content: flex-end;
`;

const UserName = styled.div`
	font-size: 20px;
	font-weight: bold;
	height: 32px;
`;

const ControlPanelContainer = ({ className }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const roleId = useSelector(selectUserRole);
	const login = useSelector(selectUserLogin);
	const session = useSelector(selectUserSession);

	const onLogout = () => {
		dispatch(logout(session));
		sessionStorage.removeItem('userData');
	};

	const isAdmin = checkAccess([ROLE.ADMIN], roleId);

	return (
		<div className={className}>
			<RightAligned>
				{roleId === ROLE.GUEST ? (
					<Button>
						<Link to="/login">Войти</Link>
					</Button>
				) : (
					<>
						<UserName>{login}</UserName>
						<Icon
							id="ffa-solid fa-right-from-bracket"
							margin="0 0 0 10px"
							onClick={onLogout}
						/>
					</>
				)}
			</RightAligned>

			<RightAligned>
				<Icon
					id="fa-solid fa-backward"
					margin="10px 0 0 0"
					onClick={() => navigate(-1)}
				/>
				{isAdmin && (
					<>
						<Link to="/post">
							<Icon id="fa-solid fa-file-lines" margin="10px 0 0 9px" />
						</Link>
						<Link to="/users">
							<Icon id="fa-solid fa-users" margin="10px 0 0 9px" />
						</Link>
					</>
				)}
			</RightAligned>
		</div>
	);
};

export const ControlPanel = styled(ControlPanelContainer)``;
