import styled from "styled-components";
import {
  BaseCardHeader,
  BaseCardInfo,
} from "../../../../layouts/DefaultLayout/style";

export const ProfileContainer = styled(BaseCardHeader)`
  display: grid;
  grid-template-columns: 9.25rem 1fr;
  grid-gap: 2rem;

  > img {
    width: 100%;
    max-width: 9.25rem;
    border-radius: 8px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;

    > img {
      display: none;
    }
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

    img {
      display: none;
      height: 4rem;
    }
  }

  a {
    grid-area: link;
    text-align: end;
  }

  p {
    grid-area: description;
  }

  @media (max-width: 768px) {
    h1 {
      display: flex;
      gap: 1rem;

      img {
        display: block;
      }
    }
  }
`;

export const ProfileInfo = styled(BaseCardInfo)``;
