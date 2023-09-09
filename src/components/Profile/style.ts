import styled from "styled-components";

export const ProfileContainer = styled.div`
  padding: 2rem;
  margin-top: -5.5rem;
  border-radius: 10px;

  display: grid;
  grid-template-columns: 9.25rem 1fr;
  grid-gap: 2rem;

  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);
  background: ${(props) => props.theme["base-profile"]};

  > img {
    width: 100%;
    max-width: 9.25rem;
    border-radius: 8px;
  }
`;

export const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
`;

export const ProfileBiography = styled.div`
  display: grid;
  grid-template-columns: 1fr 5rem;
  grid-template-areas: "title link" "description description";

  h1 {
    grid-area: title;
    color: ${(props) => props.theme["base-title"]};
    line-height: 1.3;
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  a {
    grid-area: link;
    color: ${(props) => props.theme.blue};
    text-transform: uppercase;
    font-size: 0.75rem;
    font-weight: bold;
    text-decoration: none;
    text-align: end;

    &:hover {
      text-decoration: underline;
      transition: text-decoration 0.2s;
    }

    img {
      height: auto;
      width: 0.75rem;
      margin-left: 5px;
      margin-bottom: -2px;
    }
  }

  p {
    grid-area: description;
  }
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;

  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    img {
      width: 1.125rem;
    }
  }
`;
