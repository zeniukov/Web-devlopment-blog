import { Icon, Input } from '../../../../components';
import styled from 'styled-components';

const SearchContainer = ({ className, onChange, searchPhrase }) => {
	return (
		<div className={className}>
			<Input
				value={searchPhrase}
				placeholder="Поиск по заголовкам..."
				onChange={onChange}
			/>
			<Icon inactive="true" id="fa-solid fa-magnifying-glass" size="21px" />
		</div>
	);
};

export const Search = styled(SearchContainer)`
	display: flex;
	justify-content: center;
	align-items: center;
	// position: relative;
	width: 340px;
	height: 40px;
	margin: 40px auto 0;
	border: 2px solid #000;
	border-radius: 5px;

	& > input {
		padding: 5px;
		border: none;
		margin: 0 0 0 3px;
	}

	& > div {
		margin: 0 10px;
		// position: absolute;
		// right: 9px;
	}
`;
