import { BrowserRouter, Route, Routes } from "react-router-dom";
import { publicRoute } from "./Route";

export default function MainRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {publicRoute.map(({ element, path }) => {
          return <Route element={element} path={path} key={path} />;
        })}
      </Routes>
    </BrowserRouter>
  );
}
