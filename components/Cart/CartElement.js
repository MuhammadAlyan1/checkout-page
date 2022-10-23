import Image from 'next/image';
import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { useSelector, useDispatch } from 'react-redux';
import { increaseTotal, decreaseTotal } from '../../cartSlice';

const CartElement = ({ image, product, originalPrice, discountPrice }) => {
  const [amount, setAmount] = useState(1);
  const dispatch = useDispatch();
  const cart = useSelector((store) => store.cart);

  const handleIncreaseAmount = () => {
    dispatch(increaseTotal(discountPrice));
    setAmount((prev) => prev + 1);
  };

  const handleDecreaseAmount = () => {
    if (amount === 1) return;

    dispatch(decreaseTotal(discountPrice));
    setAmount((prev) => prev - 1);
  };

  return (
    <section className="flex gap-6 py-4">
      <div className="max-w-[175px] basis-1/2 overflow-hidden rounded-xl">
        <Image src={image} layout="responsive" className="rounded-xl" />
      </div>
      <div className="flex max-w-[200px] basis-1/2 flex-col">
        <h3 className="text-lg font-bold text-slate-800">{product}</h3>
        <div className="flex items-center gap-4">
          <p className="text-lg font-bold tracking-wider text-orange">
            ${discountPrice}
          </p>
          <p className="text-slate-900 line-through">${originalPrice}</p>
        </div>
        <div className="mt-auto flex w-[130px] items-center justify-between rounded-xl border border-slate-500 px-2 py-3">
          <button
            className="rounded-md bg-lightGray p-1"
            onClick={() => handleDecreaseAmount()}
          >
            <AiOutlineMinus />
          </button>
          <p className="text-2xl">{amount}</p>
          <button
            className="rounded-md bg-lightGray p-1"
            onClick={() => handleIncreaseAmount()}
          >
            <AiOutlinePlus />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CartElement;
