import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../components/ui/navigation-menu";

export const Header = () => {
  return (
    <header className="w-full bg-gray-800 p-4">
      <NavigationMenu className="flex justify-center">
        <NavigationMenuList className="flex gap-8">
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/"
              className="text-white hover:text-gray-400"
            >
              Accueil
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/calendar"
              className="text-white hover:text-gray-400"
            >
              Calendrier
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/stock"
              className="text-white hover:text-gray-400"
            >
              Stocks
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/project"
              className="text-white hover:text-gray-400"
            >
              Projets
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
