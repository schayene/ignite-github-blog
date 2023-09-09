import styled from "styled-components";

export const SearchFormContainer = styled.form`
  header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    margin-bottom: 0.75rem;

    h2 {
      color: ${(props) => props.theme["base-subtitle"]};
      font-size: 1.125rem;
      font-weight: bold;
    }

    span {
      color: ${(props) => props.theme["base-span"]};
      font-size: 0.875rem;
    }
  }

  input {
    width: 100%;
    padding: 0.75rem 1rem;
    border-radius: 6px;
    color: ${(props) => props.theme["base-text"]};
    border: 1px solid ${(props) => props.theme["base-border"]};
    background: ${(props) => props.theme["base-input"]};

    &::placeholder {
      opacity: 1;
      color: ${(props) => props.theme["base-label"]};
    }
  }
`;
