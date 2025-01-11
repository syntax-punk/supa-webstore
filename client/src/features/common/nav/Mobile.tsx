import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import Config from '@/config/site';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import { headerNavLinks } from './navConfig';
import { NavLink } from 'react-router-dom';

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant='ghost'
          className='mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden'
        >
          <Menu className='h-5' />
          <span className='sr-only'>Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side='left' className='pr-0'>
        <SheetTitle>
          <NavLink
            to='/'
            className='flex items-center'
            onClick={() => setOpen(false)}
          >
            <div className='relative z-20 flex items-center text-lg font-medium'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='mr-2 h-6 w-6'
              >
                <path d='M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3' />
              </svg>
              {Config.name}
            </div>
          </NavLink>
        </SheetTitle>
        <ScrollArea className='my-4 h-[calc(100vh-8rem)] pb-10 pl-6'>
          <div className='flex flex-col space-y-3 pt-6'>
            {headerNavLinks.map(({ title, path }) => (
              <NavLink
                key={title}
                to={path}
                onClick={() => {
                  console.log('-> MobileLink onClick');
                  setOpen?.(false);
                }}
                className='font-medium text-foreground/70'
              >
                {title}
              </NavLink>
            ))}
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
