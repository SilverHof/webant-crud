import { RouteType } from "../types/RouteType";
import { PRIVATE_ROUTE_PATH } from "./PRIVATE_ROUTE_PATH";
import { HomePage } from "../../pages/private/HomePage/HomePage";
import { SettingsPage } from "../../pages/private/SettingsPage/SettingsPage";

export const privateRoutesArray: RouteType[] = [
   {
      path: PRIVATE_ROUTE_PATH.HOME,
      Component: HomePage,
   },
   {
      path: PRIVATE_ROUTE_PATH.SETTINGS,
      Component: SettingsPage,
   },
];
