export const paths = {
  HOME: "/",
  ABOUT: "/about",
  CATALOG: "/catalog",
  COLLECTIONS: "/collections",
  GIFTBOX: "/giftbox",
  PRODUCTGIFTBOX: "/giftbox/:id",
  CONTACTS: "/contacts",
  CARTPAGE: '/cart',
  NOT_FOUND: "/404",
  PRODUCT: "/product/:id",
  PRIVACYPOLICY: "/privacypolicy",
  TERMSCONDITION: "/termscondition"
};

export type PathKeys =
  | "HOME"
  | "ABOUT"
  | "CATALOG"
  | "COLLECTIONS"
  | "GIFTBOX"
  | "PRODUCTGIFTBOX"
  | "CONTACTS"
  | "CARTPAGE"
  | "NOT_FOUND"
  | "PRODUCT"
  | "PRIVACYPOLICY"
  | "TERMSCONDITION"

export const navItems = ["About", "Collections", "Gift Box", "Contacts"];