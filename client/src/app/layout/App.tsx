import Header from '@/features/common/nav/MainNavBar';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <div className='px-[1.4rem] md:px-[4rem] lg:px-[6rem] xl:px-[8rem] 2xl:px-[12rem]'>
        <Outlet />
      </div>
    </>
  );
}

export default App;
