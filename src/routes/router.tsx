import { lazy, Suspense } from "react";
import { Outlet, Navigate, useRoutes } from "react-router-dom";
import Layout from "../layout/layout";
import { paths } from "../config/path.ts";

export const Home = lazy(() => import("../pages/index.tsx"));
export const About = lazy(() => import("../pages/about.tsx"));
export const Products = lazy(() => import("../pages/products.tsx"));
export const PageNotFound = lazy(() => import("../pages/pageNotFound.tsx"));

function Router() {
  const routes = useRoutes([
    {
      element: (
        <Layout>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </Layout>
      ),
      children: [
        { path: paths.HOME, element: <Home />, index: true },
        { path: paths.ABOUT, element: <About /> },
        { path: paths.PRODUCTS, element: <Products /> },
      ],
    },
    {
      path: paths.NOT_FOUND,
      element: <PageNotFound />,
    },
    {
      path: "*",
      element: <Navigate to={paths.NOT_FOUND} replace />,
    },
  ]);

  return routes;
}

export default Router;
