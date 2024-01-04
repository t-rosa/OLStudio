import { Outlet, RootRoute } from "@tanstack/react-router";

export const Route = new RootRoute({
  component: function Root() {
    return (
      <>
        <header className="border-b py-4">root</header>
        <Outlet />
      </>
    );
  },
});
