import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	grid-column: 1 span;
	@media ${({ theme }) => theme.breakpoint.lg} {
		grid-column: 2 span;
	}
`;

export const Title = styled.h1`
	width: 100%;
	text-align: center;
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	font-size: 1.25rem;
	padding: 0.5rem 0rem;
`;

export const TableBox = styled.div`
	position: relative;
	${({ theme }) => theme.mixins.flexBox("column", "flex-start", "flex-start")}
	box-shadow: ${({ theme }) => theme.boxShadow.style1};
	overflow: hidden;
	border-radius: 1rem;
`;

export const Row = styled.div`
	${({ theme }) => theme.mixins.flexBox("column", "flex-start", "flex-start")}
	width: 80%;
	min-width: 0;
	text-align: left;
	:first-child {
		text-align: center;
	}

	h1 {
		width: 100%;
		font-weight: ${({ theme }) => theme.fontWeight.bold};
		font-size: 1rem;
		padding: 0.5rem 0rem;
	}
	h2 {
		width: 100%;
		font-weight: ${({ theme }) => theme.fontWeight.medium};
		font-size: 1rem;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
`;

export const Column = styled.div`
	width: 100%;
	${({ theme }) => theme.mixins.gridBox("center", "space-between", "center")}
	padding: 0.5rem;
	grid-template-columns: 3rem repeat(4, 1fr);
	:nth-child(odd) {
		background: ${({ theme }) => theme.color.light};
	}
	:first-child {
		border-top-left-radius: 1rem;
		border-top-right-radius: 1rem;
		color: ${({ theme }) => theme.color.dark};
		background: ${({ theme }) => theme.color.bg};
	}
	:last-child {
		background: ${({ theme }) => theme.color.white};
		border-top: 1px solid ${({ theme }) => theme.color.bg};
		grid-template-columns: 1fr;
	}
`;

export const EmptyText = styled.span`
	width: 100%;
	height: 100%;
	display: block;
	text-align: center;
	align-items: center;
	line-height: 10rem;
	font-size: 1.5rem;
	font-weight: ${({ theme }) => theme.fontWeight.medium};
`;

export const Pagination = styled.div`
	width: 90%;
	${({ theme }) => theme.mixins.flexBox("row", "space-between", "center")}
	align-items: center;
`;

export const RowsPerPageSelect = styled.select`
	font-size: 1rem;
`;

export const ButtonBox = styled.div`
	width: 5rem;
	${({ theme }) => theme.mixins.flexBox("row", "space-between", "center")}
	align-items: center;

	> button {
		${({ theme }) => theme.mixins.flexBox("row", "center", "center")}
		:hover {
			cursor: pointer;
		}
	}
`;

export const PrevButton = styled.button``;

export const NextButton = styled.button``;

export const PageNum = styled.span``;
