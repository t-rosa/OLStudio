import { Route as rootRoute } from "./routes/__root"
import { Route as LoginRoute } from "./routes/login"
import { Route as IndexRoute } from "./routes/index"

declare module "@tanstack/react-router" {
  interface FileRoutesByPath {
    "/": {
      parentRoute: typeof rootRoute
    }
    "/login": {
      parentRoute: typeof rootRoute
    }
  }
}

Object.assign(IndexRoute.options, {
  path: "/",
  getParentRoute: () => rootRoute,
})

Object.assign(LoginRoute.options, {
  path: "/login",
  getParentRoute: () => rootRoute,
})

export const routeTree = rootRoute.addChildren([IndexRoute, LoginRoute])
