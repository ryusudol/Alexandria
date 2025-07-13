import { Link } from "react-router";
import { Button } from "./ui/button";
import {
  NavigationMenu,
  // NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  // NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import { Separator } from "./ui/separator";

export default function NavBar() {
  return (
    <div className="h-16 container flex items-center justify-between mx-auto py-3 sticky top-0 z-50">
      <div className="flex items-center gap-2">
        <Link to="/" className="text-2xl">
          Alexandria
        </Link>
        <Separator orientation="vertical" className="!h-6 ml-3 bg-border" />
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link to="/introduction">Introduction</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link to="/pricing">Pricing</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="flex gap-2">
        <Button variant="ghost" asChild>
          <Link to="/auth/login">Login</Link>
        </Button>
        <Button className="font-medium" asChild>
          <Link to="/auth/join">Join</Link>
        </Button>
      </div>
    </div>
  );
}

// function ListItem({
//   title,
//   children,
//   href,
//   ...props
// }: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
//   return (
//     <li {...props}>
//       <NavigationMenuLink asChild>
//         <Link to={href}>
//           <div className="text-sm leading-none font-medium">{title}</div>
//           <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
//             {children}
//           </p>
//         </Link>
//       </NavigationMenuLink>
//     </li>
//   );
// }
