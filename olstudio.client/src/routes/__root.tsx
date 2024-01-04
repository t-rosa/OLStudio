import { ModeToggle } from "@/components/mode-toggle";
import { Outlet, RootRoute } from "@tanstack/react-router";

export const Route = new RootRoute({
  component: function Root() {
    return (
      <div className="flex h-full flex-col">
        <header className="flex items-center justify-between border-b py-4 px-4 sm:px-6 lg:px-20 xl:px-24">
          <h1 className="font-semibold text-xl">OLStudio</h1>
          <ModeToggle />
        </header>

        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    );
  },
});
