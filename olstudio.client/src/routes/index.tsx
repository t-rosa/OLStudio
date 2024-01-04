import { Button } from "@/components/ui/button";
import { FileRoute, Link } from "@tanstack/react-router";

export const Route = new FileRoute('/').createRoute({
  component: function Page() {
    return (
      <div className="p-2">
        <h3>Home</h3>
        <Button asChild>
          <Link to="/login">Login</Link>
        </Button>
      </div>
    );
  },
});
