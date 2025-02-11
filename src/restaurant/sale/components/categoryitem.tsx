import { Button } from "flowbite-react";
import { IPOS_BASE_URL } from "../../../utils/connection";

interface CategoryItemProps {
    categoryName: string;
    categoryId: string;
    categoryImg:string
}

const CategoryItem: React.FC<CategoryItemProps> = ({ categoryName,categoryImg }) => {
    return (
        <Button className="flex  items-center  min-w-40 h-12 sm:h-14  text-black focus:ring-1 focus:ring-orange-500">
            <img className="w-9 sm:w-10 mr-2 rounded-md" src={`${IPOS_BASE_URL}${categoryImg}`} alt="" />
           <p  className="h-10 flex items-center text-lg"> {categoryName}</p>
        </Button>
    );
}

export default CategoryItem;
