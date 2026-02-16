import { Main } from "../../pages/Main";
import { Routes, Route } from "react-router-dom";
import { NotFoundPage } from "../../pages/NotFoundPage";
import { Header } from "../Header";

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={
        <>
          <Header />
          <Main />
        </>
      }
      />
      <Route path='*' element={
        <NotFoundPage />
      } />
    </Routes>
  )
}

export default AppRouter;