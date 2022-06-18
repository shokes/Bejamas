import { BsCartDash } from 'react-icons/bs';
import { GoDash } from 'react-icons/go';
import a from '../Images/a.png';
import b from '../Images/b.png';
import e from '../Images/e.png';
import j from '../Images/j.png';
import m from '../Images/m.png';
import s from '../Images/s.png';
import g from '../Images/-.png';

const Header = function () {
  return (
    <section>
      <nav className='flex items-center justify-between mb-7'>
        <div>
          <span className='flex gap-x-1 relative'>
            <img src={b} alt='b' />
            <img src={e} alt='e' />
            <img src={j} alt='j' />
            <img src={a} alt='a' />
            <img src={m} alt='m' />
            <img src={a} alt='a' />
            <img src={s} alt='s' />
            <GoDash
              className='absolute h-[2rem]
    -right-[1.2rem]
    top-[0.4rem]'
            />
          </span>
        </div>
        <div className='relative'>
          <BsCartDash className='w-[54px] h-[37.97px]' />
          <span className='absolute text-white bg-black font-[700] leading-[21.76px] text-[20px] px-1 right-0'>
            0
          </span>
        </div>
      </nav>
      <div className='border-[#E4E4E4] border-b-4 w-full '></div>
    </section>
  );
};

export default Header;
