import { lazy, Suspense } from "react";
import { Outlet, Navigate, useRoutes } from "react-router-dom";
import Layout from "../layout/layout";
import { paths } from "../config/path.ts";

export const Home = lazy(() => import("../pages/index.tsx"));
export const About = lazy(() => import("../pages/about.tsx"));
export const Catalog = lazy(() => import("../pages/catalog.tsx"));
export const Collections = lazy(() => import("../pages/collections.tsx"));
export const GiftBox = lazy(() => import("../pages/giftBox.tsx"));
export const Contacts = lazy(() => import("../pages/contacts.tsx"));
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
        { path: paths.CATALOG, element: <Catalog /> },
        { path: paths.COLLECTIONS, element: <Collections /> },
        { path: paths.GIFTBOX, element: <GiftBox /> },
        { path: paths.CONTACTS, element: <Contacts /> },
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
