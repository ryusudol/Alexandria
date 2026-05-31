import { Form, Link, redirect } from "react-router";
import type { Route } from "./+types/join-page";

import { Particles } from "~/common/components/ui/particles";
import { Label } from "~/common/components/ui/label";
import { Input } from "~/common/components/ui/input";
import { Button } from "~/common/components/ui/button";
import { AppleIcon, GoogleIcon, XIcon } from "../components/icons";
import { Meteors } from "~/common/components/ui/meteors";
import { createSupabaseServerClient, redirectIfAuthenticated } from "~/lib/auth.server";

export async function loader({ request }: Route.LoaderArgs) {
  await redirectIfAuthenticated(request);
  return null;
}

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const confirmPassword = formData.get("confirmPassword") as string;
  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;

  if (password !== confirmPassword) {
    return {
      error: "Passwords do not match",
    };
  }

  const { supabase, headers } = createSupabaseServerClient(request);

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        first_name: firstName,
        last_name: lastName,
      },
    },
  });

  if (error) {
    return {
      error: error.message,
    };
  }

  return redirect("/dashboard", { headers });
}

export default function JoinPage({ actionData }: Route.ComponentProps) {
  return (
    <div className="relative grid min-h-svh">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <Link to="/" className="flex items-center gap-2 font-medium">
          Alexandria
        </Link>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <Form method="POST" className="flex flex-col gap-6">
              <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-2xl font-bold">Create an account</h1>
                <p className="text-muted-foreground text-sm text-balance">
                  Begin your micro-learning journey with just a few details
                </p>
                {actionData?.error && (
                  <div className="text-sm text-red-500 text-center">
                    {actionData.error}
                  </div>
                )}
              </div>
              <div className="grid gap-5">
                <div className="flex items-center justify-between gap-3">
                  <div className="grid gap-2">
                    <Label htmlFor="email">First Name</Label>
                    <Input
                      id="first-name"
                      name="firstName"
                      type="text"
                      placeholder="Michael"
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Last Name</Label>
                    <Input
                      id="last-name"
                      name="lastName"
                      type="text"
                      placeholder="Jackson"
                      required
                    />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="email@example.com"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="********"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="password">Confirm Password</Label>
                  <Input
                    id="confirm-password"
                    name="confirmPassword"
                    type="password"
                    placeholder="********"
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  Sign up
                </Button>
                <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
                  <span className="bg-background text-muted-foreground relative z-10 px-2">
                    Or
                  </span>
                </div>
                <div className="flex flex-col gap-3">
                  <Button variant="outline" type="button" className="w-full">
                    <GoogleIcon />
                    Continue with Google
                  </Button>
                  <Button variant="outline" className="w-full">
                    <XIcon />
                    Continue with 𝕏
                  </Button>
                  <Button variant="outline" type="button" className="w-full">
                    <AppleIcon />
                    Continue with Apple
                  </Button>
                </div>
              </div>
              <div className="text-center text-sm">
                Already have an account?{" "}
                <Link to="/auth/login" className="underline underline-offset-4">
                  Login
                </Link>
              </div>
            </Form>
          </div>
        </div>
      </div>
      <Particles className="absolute top-0 size-full" />
    </div>
  );
}
