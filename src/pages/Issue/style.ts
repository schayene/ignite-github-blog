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

  @media (max-width: 560px) {
    padding: 2rem 1.5rem;
  }
`;
