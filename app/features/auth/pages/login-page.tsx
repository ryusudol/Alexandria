import { GalleryVerticalEnd } from "lucide-react";
import { Form, Link } from "react-router";

import { Button } from "~/common/components/ui/button";
import { Input } from "~/common/components/ui/input";
import { Label } from "~/common/components/ui/label";
import { Particles } from "~/common/components/ui/particles";
import { AppleIcon, GoogleIcon, XIcon } from "../components/icons";

export default function LoginPage() {
  return (
    <div className="relative grid min-h-svh">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <a href="#" className="flex items-center gap-2 font-medium">
            <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
              <GalleryVerticalEnd className="size-4" />
            </div>
            Acme Inc.
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <Form method="POST" className="flex flex-col gap-6">
              <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-2xl font-bold">Login to your account</h1>
                <p className="text-muted-foreground text-sm text-balance">
                  Enter your email and password below to login
                </p>
              </div>
              <div className="grid gap-5">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" required />
                </div>
                <Button type="submit" className="w-full">
                  Login
                </Button>
                <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
                  <span className="bg-background text-muted-foreground relative z-10 px-2">
                    Or
                  </span>
                </div>
                <div className="flex flex-col gap-3">
                  <Button variant="outline" type="button" className="w-full">
                    <GoogleIcon />
                    Login with Google
                  </Button>
                  <Button variant="outline" className="w-full">
                    <XIcon />
                    Login with 𝕏
                  </Button>
                  <Button variant="outline" type="button" className="w-full">
                    <AppleIcon />
                    Login with Apple
                  </Button>
                </div>
              </div>
              <div className="text-center text-sm">
                Don&apos;t have an account?{" "}
                <Link to="/auth/join" className="underline underline-offset-4">
                  Sign up
                </Link>
              </div>
            </Form>
          </div>
        </div>
      </div>
      <Particles className="absolute h-full w-full" />
    </div>
  );
}
