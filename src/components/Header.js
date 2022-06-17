import { BsCartDash } from 'react-icons/bs';
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
          <span className='flex gap-x-1'>
            <img src={b} alt='b' />
            <img src={e} alt='e' />
            <img src={j} alt='j' />
            <img src={a} alt='a' />
            <img src={m} alt='m' />
            <img src={a} alt='a' />
            <img src={s} alt='s' />
          </span>
        </div>
        <div>
          <BsCartDash className='w-[54px] h-[37.97px]' />
        </div>
      </nav>
      <div className='border-[#E4E4E4] border-b-4 w-full '></div>
    </section>
  );
};

export default Header;
