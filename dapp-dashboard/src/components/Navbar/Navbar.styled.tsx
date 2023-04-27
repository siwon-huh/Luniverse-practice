import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

export const Container = styled.div`
	${({ theme }) => theme.mixins.flexBox("row", "center", "center")}
	width: 100%;
	height: ${({ theme }) => theme.height.navbar};
	position: fixed;
	top: 0;
	background: ${({ theme }) => theme.color.dark};
	z-index: ${({ theme }) => theme.zIndex.navbar};
`;

export const Nav = styled.nav`
	${({ theme }) => theme.mixins.flexBox("row", "flex-start", "center")}
	position: relative;
	width: 100%;
	height: ${({ theme }) => theme.height.navbar};
	padding: 1rem 3rem;
`;

export const Logo = styled(LinkR)`
	${({ theme }) => theme.mixins.flexBox("row", "center", "center")}
	height: ${({ theme }) => theme.height.navbar};
	text-decoration: none;
`;

export const LogoImgBox = styled.div`
	width: 2.5rem;
	height: 2.5rem;
	margin-right: 0.5rem;
	background-color: ${({ theme }) => theme.color.primary};
	border-radius: 50%;
	overflow: hidden;
`;

export const LogoImg = styled.img`
	height: 100%;
	object-fit: cover;
`;

export const LogoH1 = styled.h1`
	font-size: 1.25rem;
	font-weight: ${({ theme }) => theme.fontWeight.semiBold};
	color: ${({ theme }) => theme.color.white};

	/* @media ${({ theme }) => theme.breakpoint.sm} {
		
	} */
`;

export const EmptyBox = styled.div`
	width: 100%;
	height: ${({ theme }) => theme.height.navbar};
`;
