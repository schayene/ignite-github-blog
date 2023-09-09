import styled from "styled-components";

export const DefaultLayoutContainer = styled.main`
  width: 100%;
  max-width: 54rem;
  margin: -5.5rem auto 0;
  padding: 0 1rem;
`;

export const BaseCardHeader = styled.div`
  padding: 2rem;
  border-radius: 10px;

  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);
  background: ${(props) => props.theme["base-profile"]};

  h1 {
    color: ${(props) => props.theme["base-title"]};
    line-height: 1.3;
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  a,
  nav span {
    color: ${(props) => props.theme.blue};
    text-transform: uppercase;
    font-size: 0.75rem;
    font-weight: bold;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
      transition: text-decoration 0.2s;
    }

    img {
      height: auto;
      margin-bottom: -2px;
    }
  }

  a img {
    width: 0.75rem;
    margin-left: 5px;
  }

  span img {
    margin-right: 5px;
  }

  @media (max-width: 560px) {
    padding: 1.5rem;
  }
`;

export const BaseCardInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 1.5rem;

  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    img {
      width: 1.125rem;
    }
  }
`;
