import {
  ProfileBiography,
  ProfileContainer,
  ProfileContent,
  ProfileInfo,
} from "./style";

import avatar from "../../assets/avatar.png";
import iconGoLink from "../../assets/icon-go-link.svg";
import iconGithub from "../../assets/icon-github.svg";
import iconCompany from "../../assets/icon-company.svg";
import iconUsers from "../../assets/icon-users.svg";

export function Profile() {
  return (
    <ProfileContainer>
      <img src={avatar} alt="" />

      <ProfileContent>
        <ProfileBiography>
          <h1>Cameron Williamson</h1>
          <a href="#">
            Github
            <img src={iconGoLink} alt="" />
          </a>
          <p>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </p>
        </ProfileBiography>

        <ProfileInfo>
          <span>
            <img src={iconGithub} alt="" /> cameronwll
          </span>
          <span>
            <img src={iconCompany} alt="" /> Rocketseat
          </span>
          <span>
            <img src={iconUsers} alt="" /> 32 seguidores
          </span>
        </ProfileInfo>
      </ProfileContent>
    </ProfileContainer>
  );
}
