import Head from 'next/head';
import { useSelector, useDispatch } from 'react-redux';
import Cart from '../components/Cart';
import UserInformation from '../components/userInformation';

export default function Home() {
  const dispatch = useDispatch();
  const cart = useSelector((store) => store.cart);
  return (
    <div>
      <Head>
        <title>Checkout</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="mx-auto max-w-[480px] p-4 text-4xl lg:mt-[5%] lg:max-w-[1100px]">
        Checkout
      </h1>
      <div className="mx-auto max-w-[480px] lg:flex lg:max-w-[1100px] lg:flex-wrap-reverse">
        <Cart />
        <UserInformation />
      </div>
    </div>
  );
}
