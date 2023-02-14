import { Flagment } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import Main from "./components/layouts/Main";
import Banner from "./components/movie/banner/Banner";
import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";

function App() {
  return (
    <div>
      <Routes>
        <Route element={<Main></Main>}>
          <Route
            path="/"
            element={
              <>
                <Banner></Banner>
                <HomePage></HomePage>
              </>
            }
          ></Route>
          <Route path="/movies" element={<MoviesPage></MoviesPage>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
