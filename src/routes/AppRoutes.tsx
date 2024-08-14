import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "../pages/Home";
import { DefaultLayout } from "../config/layout/DefaultLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <DefaultLayout>
        <Home />
      </DefaultLayout>
    ),
  },
]);

export function AppRoutes() {
  return <RouterProvider router={router} />;
}
