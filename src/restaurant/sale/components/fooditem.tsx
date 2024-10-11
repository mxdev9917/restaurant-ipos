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
      className="relative flex justify-center items-end w-full h-full bg-[url('https://i.pinimg.com/736x/99/21/54/9921542f53d08550ee649e68a1cfc88d.jpg')] bg-cover rounded-md shadow-lg transition-transform duration-200 hover:scale-105"
    >
      <div className="absolute bottom-0 w-full bg-gradient-to-t from-black to-transparent p-2 text-center text-white font-semibold">
        ຜັດເຜັດທະເລ
      </div>
    </button>
  );
};

export default FoodItemSale;
