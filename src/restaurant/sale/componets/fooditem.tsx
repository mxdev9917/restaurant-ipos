import { Button } from "flowbite-react";
import { Link } from "react-router-dom";

function FoodItemSale({ onClick }) {
    const id = 1; // This could be a prop if you want to use dynamic IDs

    function handleClick() {
        onClick(id); // Call the function passed in as a prop
        console.log(id); // Log the ID or any other action you need
    }

    return (
        <button 
            onClick={handleClick} 
            className="flex relative justify-center items-end w-full h-full bg-[url('https://i.pinimg.com/736x/99/21/54/9921542f53d08550ee649e68a1cfc88d.jpg')] bg-cover rounded-md shadow-inner"
        >
            <div className="flex justify-center font-bold text-black bg-white opacity-55 w-full h-6"></div>
            <p className="w-[90%] h-6 absolute flex font-semibold justify-center text-">ຜັດເຜັດທະເລ</p>
        </button>
    );
}

export default FoodItemSale;
