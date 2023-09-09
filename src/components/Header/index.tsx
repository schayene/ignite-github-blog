import { HeaderContainer } from "./style";

import logoImage from "../../assets/logo.svg";
import coverImage from "../../assets/cover.png";

export function Header() {
  return (
    <HeaderContainer cover={coverImage}>
      <img src={logoImage} alt="" />
    </HeaderContainer>
  );
}
