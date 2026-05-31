import type { Route } from "./+types/dashboard-page";
import { requireAuth } from "~/lib/auth.server";

export async function loader({ request }: Route.LoaderArgs) {
  await requireAuth(request);
  return null;
}

export default function DashboardPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Welcome to Alexandria</h1>
      <p>Your dashboard is ready! Authentication is working.</p>
    </div>
  );
}