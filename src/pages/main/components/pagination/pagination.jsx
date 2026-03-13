import styled from 'styled-components';
import { Button } from '../../../../components';

const PaginationContainer = ({ className, page, lastPage, setPage }) => {
	const checkFirstPage = page === 1;
	const checkLastPage = page === lastPage;

	return (
		<div className={className}>
			<Button disabled={checkFirstPage} onClick={() => setPage(1)}>
				В начало
			</Button>

			<Button disabled={checkFirstPage} onClick={() => setPage(--page)}>
				Предыдущая
			</Button>

			<div className="current-page">Страница: {page}</div>

			<Button disabled={checkLastPage} onClick={() => setPage(++page)}>
				Следующая
			</Button>

			<Button disabled={checkLastPage} onClick={() => setPage(lastPage)}>
				В конец
			</Button>
		</div>
	);
};

export const Pagination = styled(PaginationContainer)`
	display: flex;
	justify-content: center;
	position: absolute;
	margin: 0 0 20px;
	padding: 0 35px;
	bottom: 140px;
	width: 100%;

	& .current-page,
	button {
		font-size: 18px;
		border-radius: 5px;
		margin: 0 5px;
	}

	& .current-page {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 32px;
		font-size: 18px;
		font-weight: 500;
		text-align: center;
		border: 1px solid #000;
		border-radius: 5px;
	}
`;
