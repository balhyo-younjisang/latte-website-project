import loadable from "@loadable/component";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Provider from "./provider";

const MainLayout = loadable(() => import("./layouts/MainLayout"));

const JoinPage = loadable(() => import("./pages/join"));

const App = () => {
  return (
    <RouterProvider
      router={createBrowserRouter(
        createRoutesFromElements(
          <Route element={<Provider />}>
            <Route element={<MainLayout />} loader={MainLayout.load}>
              <Route
                path="/join"
                element={<JoinPage />}
                loader={JoinPage.load}
              />
            </Route>
          </Route>
        )
      )}
    />
  );
};

export default App;
