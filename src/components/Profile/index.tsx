import { api } from "../../lib/api";
import { useEffect, useState } from "react";
import {
  ProfileBiography,
  ProfileContainer,
  ProfileContent,
  ProfileInfo,
} from "./style";

import iconGoLink from "../../assets/icon-go-link.svg";
import iconGithub from "../../assets/icon-github.svg";
import iconUsers from "../../assets/icon-users.svg";
import iconBook from "../../assets/icon-book.svg";

interface User {
  name: string;
  login: string;
  avatar_url: string;
  bio: string;
  html_url: string;
  followers: number;
  public_repos: number;
}

export function Profile() {
  const [user, setUser] = useState<User>({} as User);

  function fetchUser() {
    api.get("users/schayene").then((response) => {
      setUser(response.data);
    });
  }

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <ProfileContainer>
      <img src={user.avatar_url} alt="" />

      <ProfileContent>
        <ProfileBiography>
          <h1>{user.name}</h1>
          <a href={user.html_url} rel="noreferrer" target="_blank">
            Github
            <img src={iconGoLink} alt="" />
          </a>
          <p>{user.bio}</p>
        </ProfileBiography>

        <ProfileInfo>
          <span>
            <img src={iconGithub} alt="" /> {user.login}
          </span>
          <span>
            <img src={iconUsers} alt="" /> {user.followers} seguidores
          </span>
          <span>
            <img src={iconBook} alt="" /> {user.public_repos} repositórios
          </span>
        </ProfileInfo>
      </ProfileContent>
    </ProfileContainer>
  );
}
