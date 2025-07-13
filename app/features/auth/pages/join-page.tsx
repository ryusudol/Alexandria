import { GalleryVerticalEnd } from "lucide-react";
import { Form, Link } from "react-router";

import { Particles } from "~/common/components/ui/particles";
import { Label } from "~/common/components/ui/label";
import { Input } from "~/common/components/ui/input";
import { Button } from "~/common/components/ui/button";
import { AppleIcon, GoogleIcon, XIcon } from "../components/icons";

export default function JoinPage() {
  return (
    <div className="relative grid min-h-svh">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <Link to="/" className="flex items-center gap-2 font-medium">
            <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
              <GalleryVerticalEnd className="size-4" />
            </div>
            Alexandria
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <Form method="POST" className="flex flex-col gap-6">
              <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-2xl font-bold">Create an account</h1>
                <p className="text-muted-foreground text-sm text-balance">
                  Begin your micro-learning journey with just a few details
                </p>
              </div>
              <div className="grid gap-5">
                <div className="flex items-center justify-between gap-3">
                  <div className="grid gap-2">
                    <Label htmlFor="email">First Name</Label>
                    <Input
                      id="first-name"
                      type="text"
                      placeholder="Michael"
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Last Name</Label>
                    <Input
                      id="last-name"
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
                    type="email"
                    placeholder="email@example.com"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="********"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="password">Confirm Password</Label>
                  <Input
                    id="password"
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
      <Particles className="absolute h-full w-full" />
    </div>
  );
}
