import styled from "styled-components";

export const Title = styled.h1`
    font-size: 1.25rem;
    font-weight: ${({ theme }) => theme.fontWeight.medium};
`;

export const Row = styled.div`
    ${({ theme }) => theme.mixins.flexBox("row", "flex-start", "flex-start")};
    gap: 2rem;
`;

export const Column = styled.div`
    ${({ theme }) =>
        theme.mixins.flexBox("column", "flex-start", "flex-start")};
`;

export const Splitter = styled.div`
    width: 100%;
    height: 1px;
    background-color: black;
`;

export const ContentBox = styled.div`
    border-radius: 1rem;
    background: ${({ theme }) => theme.color.light};
    padding: 1rem;
    box-shadow: ${({ theme }) => theme.boxShadow.style1};
`;

export const H1 = styled.h1`
    color: ${({ theme }) => theme.color.secondary};
    font-size: 1.5rem;
    font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export const H2 = styled.h2`
    color: ${({ theme }) => theme.color.dark};
    font-size: 1.25rem;
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
`;

export const H3 = styled.h2`
    color: ${({ theme }) => theme.color.lightDark};
    font-size: 1rem;
    font-weight: ${({ theme }) => theme.fontWeight.medium};
`;

export const Span = styled.span``;
