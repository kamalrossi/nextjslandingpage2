import { tw, css } from 'twind/css';
import Button from '@/components/button';


import aliexpress from '@/constants/svg/aliexpress.svg';
import amazon from '@/constants/svg/amazon.svg';
import uniqlo from '@/constants/svg/uniqlo.svg';
import wallmart from '@/constants/svg/wallmart.svg';

const headerStyle = css`
  background-color: #ffffff;
  min-height: calc(100vh - 6rem);
`;

const Header = () => (
  <header className={tw(headerStyle)}>
    <div className={tw(`max-w-4xl mx-auto py-16 px-14 sm:px-6 lg:px-8`)}>
      <h1 className={tw(`font-sans font-bold text-4xl md:text-5xl lg:text-8xl text-center leading-snug text-gray-800`)}>
       Green Wallet, Everyone's Choice
      </h1>
      <div className={tw(`max-w-xl mx-auto`)}>
        <p className={tw(`mt-10 text-gray-500 text-center text-xl lg:text-3xl`)}>
          Shopping is one swipe away now!
        </p>
      </div>
      <div className={tw(`mt-10 flex justify-center items-center w-full mx-auto`)}>
        <Button primary>Try</Button>
        <span className={tw(`mx-2`)}>or</span>
        <Button>Register</Button>
      </div>
    </div>
    <div className={tw(`flex justify-center w-full`)}>
      <div className={tw(`mt-4 w-full`)}>
      
      </div>
    </div>
  </header>
);

export default Header;
