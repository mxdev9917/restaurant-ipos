import React from 'react';

interface FoodItemSaleProps {
  onClick: (id: number, name: string) => void;
}

const FoodItemSale: React.FC<FoodItemSaleProps> = ({ onClick }) => {
  const handleClick = () => {
    onClick(1, 'ຜັດເຜັດທະເລ');
    console.log(1);
  };

  return (
    <button
      onClick={handleClick}
      aria-label="View food item: ຜັດເຜັດທະເລ"
      className="relative flex justify-center items-end w-full h-40 sm:h-48 md:h-52 lg:h-56 bg-[url('https://i.pinimg.com/736x/99/21/54/9921542f53d08550ee649e68a1cfc88d.jpg')] bg-cover rounded-md shadow-inner"
    >
      <div className="flex justify-center font-bold text-black bg-white opacity-55 w-full h-6"></div>
      <p className="w-[90%] h-6 absolute flex font-semibold justify-center text-base">ຜັດເຜັດທະເລ</p>
    </button>
  );
};

export default FoodItemSale;
