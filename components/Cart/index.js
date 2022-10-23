import React, { useEffect } from 'react';
import { cartData } from '../../data';
import CartElement from './CartElement';
import { useSelector, useDispatch } from 'react-redux';
import { setTotal, increaseTotal } from '../../cartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((store) => store.cart);
  const shippingCost = 19;

  useEffect(() => {
    const total = cartData.reduce((acc, curr) => acc + curr.discountPrice, 0);
    dispatch(setTotal(total));
  }, []);

  return (
    <section className="mx-auto max-w-[450px] rounded-lg bg-veryLightGray p-4 lg:order-2 lg:basis-1/2">
      <section>
        {cartData.map((data) => {
          return <CartElement key={data.product} {...data} />;
        })}
      </section>
      <section>
        <div className="mt-12 flex items-center justify-between border-t border-t-slate-400 py-1 font-bold text-slate-800">
          <p>Shipping</p>
          <p>${shippingCost}</p>
        </div>
        <div className="mt-4 flex items-center justify-between border-t border-t-slate-400 py-1 font-bold text-slate-800">
          <p>Total</p>
          <p>${(cart.total - shippingCost).toFixed(2)}</p>
        </div>
      </section>
    </section>
  );
};

export default Cart;
