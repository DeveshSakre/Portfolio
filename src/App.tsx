import { lazy, Suspense } from "react";
import "./App.css";
import { LoadingProvider } from "./context/LoadingProvider";

const MainContainer = lazy(() => import("./components/MainContainer"));

const App = () => {
  return (
    <LoadingProvider>
      <Suspense fallback={<div className="app-suspense-fallback" />}>
        <MainContainer />
      </Suspense>
    </LoadingProvider>
  );
};

export default App;
