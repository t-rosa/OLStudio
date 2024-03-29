import { Button } from "@/components/ui/button";
import { FileRoute, Link } from "@tanstack/react-router";

export const Route = new FileRoute('/').createRoute({
  component: function Page() {
    return (
      <div className="relative h-full isolate overflow-hidden">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Créez et gérez vos cartes facilement
              <br />
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8">
              Incididunt sint fugiat pariatur cupidatat consectetur sit cillum
              anim id veniam aliqua proident excepteur commodo do ea.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button asChild>
                <Link to="/register">Créer un compte</Link>
              </Button>
              <Button asChild variant="secondary">
                <Link to="/login">Se connecter</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  },
});
