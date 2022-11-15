import { ADMIN_ROUTE, BASKET_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, DEVICE_ROUTE, SHOP_ROUTE } from './utils/consts';
import Admin from "./pages/Admin";
import Basket from "./pages/Basket";
import Shop from "./pages/Shop";
import DevicePage from "./pages/DevicePage";
import Auth from "./pages/Auth";

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: Admin
  },
  {
    path: BASKET_ROUTE,
    Component: Basket
  }
];

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: Auth
  },
  {
    path: REGISTRATION_ROUTE,
    Component: Auth
  },
  {
    path: SHOP_ROUTE,
    Component: Shop
  },
  {
    path: DEVICE_ROUTE + '/:id',
    Component: DevicePage
  }
];