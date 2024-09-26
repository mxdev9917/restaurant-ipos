import React from 'react';
interface FoodItemSaleProps {
    onClick: (id: number, name: string) => void;
}

const FoodItemSale: React.FC<FoodItemSaleProps> = ({ onClick }) => {
    // Handle click event
    const handleClick = () => {
        onClick(1, 'ຜັດເຜັດທະເລ'); // Call the function passed in as a prop
        console.log(1); // Log the ID or any other action you need
    };

    return (
        <button 
            onClick={handleClick}
            aria-label="View food item: ຜັດເຜັດທະເລ"
            className="flex relative justify-center items-end w-full h-full bg-[url('https://i.pinimg.com/736x/99/21/54/9921542f53d08550ee649e68a1cfc88d.jpg')] bg-cover rounded-md shadow-inner"
        >
            <div className="flex justify-center font-bold text-black bg-white opacity-55 w-full h-6"></div>
            <p className="w-[90%] h-6 absolute flex font-semibold justify-center text-base">ຜັດເຜັດທະເລ</p>
        </button>
    );
}

export default FoodItemSale;
