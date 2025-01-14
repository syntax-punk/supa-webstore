import { Button } from '@/components/ui/button';
import { MoonIcon, ShoppingBasketIcon, SunIcon } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import { MainNav } from './Desktop';
import { MobileNav } from './Mobile';

export default function Header() {
  return (
    <header className='supports-backdrop-blur:bg-background/90 sticky top-0 z-50 w-full border-b bg-background/90 backdrop-blur mb-4 px-[1.4rem] md:px-[4rem] lg:px-[6rem] xl:px-[8rem] 2xl:px-[12rem]'>
      <div className='flex h-14 items-center'>
        <MainNav />
        <MobileNav />
        <div className='flex flex-1 items-center space-x-2 justify-end'>
          <div className='flex-none'>
            {/* <CommandMenu /> */}
            <div></div>
          </div>
          <CartNav />
          <ThemeToggle />
          {/* {authenticated ? <UserNav /> : <LoginDialog />} */}
        </div>
      </div>
    </header>
  );
}

export function CartNav() {
  return (
    <a href='/cart'>
      <Button size='icon' variant='outline' className='h-9'>
        <ShoppingBasketIcon className='h-4' />
      </Button>
    </a>
  );
}

// function LoginDialog() {
//    return (
//       <Link href="/login">
//          <Button className="font-medium flex gap-2">
//             <LogInIcon className="h-4" />
//             <p>Login</p>
//          </Button>
//       </Link>
//    )
// }

function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant='outline'
      size='icon'
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'dark' ? (
        <SunIcon className='h-4' />
      ) : (
        <MoonIcon className='h-4' />
      )}
    </Button>
  );
}
