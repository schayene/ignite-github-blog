import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { DefaultLayoutContainer } from "./style";

export function DefaultLayout() {
  return (
    <>
      <Header />
      <DefaultLayoutContainer>
        <Outlet />
      </DefaultLayoutContainer>
    </>
  );
}
