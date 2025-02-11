import React from 'react';

interface FoodItemSaleProps {
  onClick: (name: string) => void;
  foodId: string;
  foodName: string;
}

const FoodItemSale: React.FC<FoodItemSaleProps> = ({ onClick, foodName }) => {
  const handleClick = () => {
    onClick(foodName);
  };

  return (
    <button
      onClick={handleClick}
      aria-label="View food item: ຜັດເຜັດທະເລ"
      className="relative flex justify-center items-end w-full h-full bg-[url('https://i.pinimg.com/736x/99/21/54/9921542f53d08550ee649e68a1cfc88d.jpg')] bg-cover rounded-md shadow-lg transition-transform duration-200 hover:scale-105"
    >
      <div className="absolute bottom-0 w-full bg-gradient-to-t from-black to-transparent p-2 text-center text-white font-semibold rounded-md ">
        {foodName}
      </div>
    </button>
  );
};

export default FoodItemSale;
