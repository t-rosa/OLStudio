import { ModeToggle } from "@/components/mode-toggle";
import { Outlet, RootRoute } from "@tanstack/react-router";

export const Route = new RootRoute({
  component: function Root() {
    return (
      <>
        <header className="flex items-center justify-between border-b py-4 px-4 sm:px-6 lg:px-20 xl:px-24">
          root
          <ModeToggle />
        </header>
        <Outlet />
      </>
    );
  },
});
