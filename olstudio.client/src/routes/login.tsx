import { Button } from "@/components/ui/button";
import { LoginForm } from "@/lib/auth/components/login-form";
import { FileRoute } from "@tanstack/react-router";

export const Route = new FileRoute('/login').createRoute({
  component: function Page() {
    return (
      <div className="flex min-h-full flex-1">
        <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Se connecter
              </h2>
              <p className="mt-2 text-sm leading-6 text-gray-500">
                Pas encore inscrit ?&nbsp;
                <Button asChild variant="link" className="p-0">
                  <a href="#">Créer un compte</a>
                </Button>
              </p>
            </div>

            <div className="mt-10">
              <div>
                <LoginForm />
              </div>
            </div>
          </div>
        </div>
        <div className="relative hidden w-0 flex-1 lg:block">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1496917756835-20cb06e75b4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
          />
        </div>
      </div>
    );
  },
});
