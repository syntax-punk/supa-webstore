import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import config from '@/config/site';
import { NavLink } from 'react-router-dom';
import { headerNavLinks } from './navConfig';

export function MainNav() {
  return (
    <div className="hidden md:flex gap-4">
      <a href="/" className="flex items-center">
        <span className="hidden font-medium sm:inline-block">
          {config.name}
        </span>
      </a>
      <NavMenu />
    </div>
  );
}

export function NavMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {headerNavLinks.map(({ title, path }) => (
          <NavigationMenuItem key={title}>
            <NavigationMenuLink
              className={navigationMenuTriggerStyle()}
              asChild
            >
              <NavLink to={path} className="font-normal text-foreground/70">
                {title}
              </NavLink>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
