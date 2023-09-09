import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Issue } from "./pages/Issue";
import { Issues } from "./pages/Issues";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Issues />} />
        <Route path="/issue/:number" element={<Issue />} />
      </Route>
    </Routes>
  );
}
