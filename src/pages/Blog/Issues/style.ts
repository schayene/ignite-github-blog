import styled from "styled-components";

export const IssuesContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 2rem;

  margin: 3rem 0;
`;

export const IssueCard = styled.div`
  padding: 2rem;
  height: 16.25rem;
  border-radius: 10px;
  background: ${(props) => props.theme["base-post"]};
  border: 2px solid transparent;
  cursor: pointer;

  header {
    margin-bottom: 1.25rem;

    display: flex;
    justify-content: space-between;

    h2 {
      font-size: 1.25rem;
      font-weight: bold;
      color: ${(props) => props.theme["base-title"]};
    }

    span {
      padding-block: 0.3rem;
      min-width: 4rem;
      font-size: 0.875rem;
      text-align: right;
      color: ${(props) => props.theme["base-span"]};
    }
  }

  p {
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }

  &:hover {
    border-color: ${(props) => props.theme["base-label"]};
    transition: border-color 0.2s;
  }
`;
