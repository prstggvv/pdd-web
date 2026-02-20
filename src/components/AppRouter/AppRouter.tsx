import { Suspense, useEffect } from "react";
import { Main } from "../../pages/Main";
import { Routes, Route } from "react-router-dom";
import { NotFoundPage } from "../../pages/NotFoundPage";
import { Header } from "../Header";

interface IAppRouterProps {
  onAppReady?: () => void;
}

const MainWrapper = ({ onReady, children }: { onReady?: () => void; children: React.ReactNode }) => {
  useEffect(() => {
    onReady?.();
  }, [onReady]);

  return <>{children}</>;
};

const AppRouter = ({ onAppReady }: IAppRouterProps) => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Header />
            <Suspense fallback={null}>
              <MainWrapper onReady={onAppReady}>
                <Main />
              </MainWrapper>
            </Suspense>
          </>
        }
      />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRouter;