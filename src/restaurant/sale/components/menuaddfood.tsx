import { useState } from "react";
import { createMenuItemService } from "../../../services/sale/create-menu-item";
import { alertSuccessV3 } from "../../../utils/alert";
import LoadingSpinner from "../../../utils/LoadingSpinner";
import { useAuth } from "../../../context/context";
interface menuProps {
  handleClickCloseModle: () => void;
  isCheckModelEvenMenu: boolean;
  foodName: string;
  foodID: string;
  tableID: String;

}

const MenuAddFood: React.FC<menuProps> = ({ isCheckModelEvenMenu, handleClickCloseModle, foodName, foodID, tableID }) => {
  const [qty, setQty] = useState(1);
  const [description, setDescription] = useState("");
  const[loading,setLoading]=useState(false);
   const { token } = useAuth();
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    let newQty = String(qty);
    let newFoodID = String(foodID);
    let newTableID = String(tableID)
    try {
      setLoading(true)
      const res = await createMenuItemService.MenuItemService(newTableID, newFoodID, newQty, description,token||"");
      if (res.status === "200") {
        alertSuccessV3("ສັ່ງເມນູສຳເລັດ", "success");
      }
    } catch (error) {
      console.error("Submit Error:", error);
    }finally{
      setLoading(false);
    }



  };
  const handleChangeQty = (e: any) => {
    setQty(e.target.value);
  };
  const handleChangeDescription = (e: any) => {
    setDescription(e.target.value);
  };



  return (
    <div className={`${isCheckModelEvenMenu == true ? "block" : "hidden"} flex flex-col w-80 h-fit bg-white rounded-lg shadow-lg p-3`}>
      <div className="flex justify-between items-center border-b-2">
        <p className="text-xl pb-2 text-gray-700 font-semibold">
          {foodName}
        </p>
        <button
          onClick={handleClickCloseModle}
          className=" text-red-500"
        >
          ຍົກເລິກ
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        <label
          htmlFor="number-input"
          className="block my-2 text-sm font-medium text-gray-900 "
        >
          ຈຳນວນ:
        </label>
        <input
          onChange={handleChangeQty}
          value={qty}
          type="number"
          min={1}
          id="number-input"
          aria-describedby="helper-text-explanation"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-none focus:right-0 block w-full p-2.5  "
          placeholder="1"
          required
        />
        <label
          htmlFor="message"
          className="block my-2 text-sm font-medium text-gray-900 "
        >
          ລາຍລະອຽດ:
        </label>
        <textarea
          onChange={handleChangeDescription}
          value={description}
          id="message"
          rows={5}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-none focus:right-0 block w-full p-2.5  "
          placeholder="..."
        ></textarea>
        <button
          type="submit"
          className="text-white my-2 bg-orange-500 hover:bg-orange-600 focus:ring-2 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center  "
        >
          {loading ?
            <LoadingSpinner text="ສົ່ງຄົວ" />
            :
            "ສົ່ງຄົວ"
          }
        </button>
      </form>
    </div>
  );
}


export default MenuAddFood;