import {
  type RouteConfig,
  index,
  prefix,
  route,
} from "@react-router/dev/routes";

export default [
  index("./common/pages/home-page.tsx"),
  ...prefix("auth", [
    route("login", "features/auth/pages/login-page.tsx"),
    route("join", "features/auth/pages/join-page.tsx"),
  ]),
  ...prefix("dashboard", [
    index("features/dashboard/pages/dashboard-page.tsx"),
  ]),
] satisfies RouteConfig;
