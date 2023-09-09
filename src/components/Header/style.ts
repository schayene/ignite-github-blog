import styled from "styled-components";

interface HeaderContainerProps {
  cover: string;
}

export const HeaderContainer = styled.header<HeaderContainerProps>`
  width: 100%;
  height: 18.5rem;

  background: url(${(props) => props.cover}) no-repeat center;
  background-size: cover;

  padding: 4rem 0 8.375rem;

  display: flex;
  justify-content: center;

  img {
    width: 100%;
    max-width: 9.25rem;
  }
`;
