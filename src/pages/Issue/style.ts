import styled from "styled-components";
import {
  BaseCardHeader,
  BaseCardInfo,
} from "../../layouts/DefaultLayout/style";

export const IssueContainer = styled.section``;

export const IssueHeader = styled(BaseCardHeader)`
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 1.25rem;
  }
`;

export const IssueInfo = styled(BaseCardInfo)``;

export const IssueContent = styled.article`
  padding: 2.5rem 2rem;

  img {
    max-width: 100%;
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.blue};

    &:hover {
      text-decoration: underline;
      transition: text-decoration 0.2s;
    }
  }

  p {
    margin-bottom: 1rem;
  }

  h2,
  h3 {
    color: ${(props) => props.theme["base-subtitle"]};
  }

  pre {
    background: ${(props) => props.theme["base-post"]};
    border-radius: 2px;
    padding: 1rem 0.5rem;
    margin-bottom: 1rem;
  }

  @media (max-width: 560px) {
    padding: 2rem 1.5rem;
  }
`;
