import { lazy, Suspense } from "react";
import { Outlet, Navigate, useRoutes, Link } from "react-router-dom";
import Layout from "../layout/layout";
import { paths } from "../config/path.ts";

export const Home = lazy(() => import("../pages/index.tsx"));
export const About = lazy(() => import("../pages/about.tsx"));
export const Catalog = lazy(() => import("../pages/catalog.tsx"));
export const Collections = lazy(() => import("../pages/collections.tsx"));
export const GiftBox = lazy(() => import("../pages/giftBox.tsx"));
export const GiftBoxItem = lazy(() => import("../pages/giftBoxItem.tsx"));
export const Contacts = lazy(() => import("../pages/contacts.tsx"));
export const PageNotFound = lazy(() => import("../pages/pageNotFound.tsx"));
export const CartPage = lazy(() => import("../pages/CartPage.tsx"));
export const ProductPage = lazy(() => import("../pages/productItem.tsx"));
export const PrivacyPolicy = lazy(() => import("../pages/privacyPolicy.tsx"));
export const TermsCondition = lazy(() => import("../pages/termsCondition.tsx"));

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
        { path: paths.PRODUCTGIFTBOX, element: <GiftBoxItem /> },
        { path: paths.CONTACTS, element: <Contacts /> },
        { path: paths.CARTPAGE, element: <CartPage />, handle: {crumb: () => <Link to="/messages">Messages</Link>} },
        { path: paths.PRODUCT, element: <ProductPage /> },
        { path: paths.PRIVACYPOLICY, element: <PrivacyPolicy /> },
        { path: paths.TERMSCONDITION, element: <TermsCondition /> },
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
