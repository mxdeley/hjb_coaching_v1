import Image from "next/image";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../../@/components/ui/navigation-menu";
import Link from "next/link";
import { cn } from "../../@/lib/utils";
import { FaTiktok, FaInstagram } from "react-icons/fa6";
import { Separator } from "../../@/components/ui/separator";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

const Header = () => {
  return (
    <div className="w-full flex justify-center py-1 fixed top-0 z-50 bg-transparent">
      <header className="flex items-center justify-between bg-transparent text-gray-50 max-w-7xl w-full">
        <div className="bg-transparent">
          <Image
            src="./logo.svg"
            alt="logo"
            width="100"
            height="39"
            className="bg-transparent"
          />
        </div>
        <nav>
          <NavigationMenu>
            <NavigationMenuList className="flex items-center justify-center gap-6">
              <NavigationMenuItem className="text-sm font-medium">
                <Link href="/about">About</Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Programmes</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {components.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Nutrition</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {components.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem className="text-sm font-medium">
                <Link href="/success-stories">Success Stories</Link>
              </NavigationMenuItem>
              <NavigationMenuItem className="text-sm font-medium">
                <Link href="/blog">Blog</Link>
              </NavigationMenuItem>

              <NavigationMenuItem className="text-sm font-medium flex gap-2 items-center text-center">
                <Link href="https://www.instagram.com/hjb_fit/">
                  <FaInstagram size={20} />
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem className="text-sm font-medium flex gap-2 items-center text-center">
                <Link href="https://www.tiktok.com/@harrison_bickford?lang=en">
                  <FaTiktok size={20} />
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>
      </header>
    </div>
  );
};

export default Header;

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
