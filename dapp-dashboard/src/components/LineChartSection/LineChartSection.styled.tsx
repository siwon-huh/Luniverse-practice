import styled from "styled-components";

export const Container = styled.section`
	${({ theme }) => theme.mixins.flexBox("column", "center", "center")};
	width: 100%;
	height: 20rem;
	border-radius: 1rem;
	padding: 2rem;
	overflow: hidden;
	box-shadow: ${({ theme }) => theme.boxShadow.style1};
	grid-column: 1 span;
	@media ${({ theme }) => theme.breakpoint.lg} {
		grid-column: 2 span;
	}
`;

export const Title = styled.h1`
	color: ${({ theme }) => theme.color.dark};
	font-size: 1.25rem;
	font-weight: ${({ theme }) => theme.fontWeight.semiBold};
	margin-bottom: 1rem;
`;
