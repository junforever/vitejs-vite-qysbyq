import { IconContext } from 'react-icons';
import { BiSolidErrorAlt } from 'react-icons/bi';
export const LoadError = () => {
  return (
    <div className="flex flex-col items-center text-3xl text-white p-8">
      <p>UUUUUPS!......The new one break something or you did it?</p>
      <IconContext.Provider
        value={{
          className: 'mt-4 text-8xl',
        }}>
        <BiSolidErrorAlt />
      </IconContext.Provider>
    </div>
  );
};
