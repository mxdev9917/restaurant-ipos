
import { IPOS_BASE_URL } from '../../../utils/connection';

interface FoodItemSaleProps {
  onClick: (id:string,name: string) => void;
  foodId: string;
  foodName: string;
  foodImg: string
}

const FoodItemSale: React.FC<FoodItemSaleProps> = ({ onClick, foodName, foodId, foodImg }) => {
  const handleClick = () => {
    onClick(foodId,foodName);
  };




  return (
    <button
    onClick={handleClick}
    aria-label={`View food item: ${foodName}`}
    className="relative flex justify-center items-end w-full h-full rounded-md shadow-lg transition-transform duration-200 hover:scale-105"
  >
    <img
      src={`${IPOS_BASE_URL}${foodImg}`}
      alt={foodName}
      className="w-full h-full object-cover rounded-md"
    />
    <div className="absolute bottom-0 w-full bg-gradient-to-t from-black to-transparent p-2 text-center text-white font-semibold rounded-md">
      {foodName}
    </div>
  </button>
  


  );
};

export default FoodItemSale;
