import React from 'react';

// Define the props type for the tableItem component
interface TableItemProps {
  onEdit: (str: string) => void; // Type for the onEdit function
}

// Define the TableItem component
const tableItem: React.FC<TableItemProps> = ({ onEdit }) => {
  // Define handleClick function with proper typing
  const handleClick = (str: string) => {
    onEdit(str); // Call the onEdit function with a string parameter
  };


  return (
        <div className="flex flex-col  w-full h-full bg-cover bg-white shadow-xl rounded-lg">
            <div className="w-full h-fit flex justify-end p-2">
                <button onClick={()=>handleClick('edit')} className=" bg-slate-100 p-1 opacity-50 rounded-md mr-2">
                    <svg className="w-7 h-7 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z" />
                    </svg>
                </button>
                <button className=" bg-slate-100 p-1 opacity-50 rounded-md">
                    <svg className="w-6 h-6 text-red-600 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z" />
                    </svg>

                </button>
                
            </div>
           <div className=' w-full h-full flex justify-center items-center text-3xl text-orange-500 font-bold pb-7' >ໂຕະ1</div>

        </div>
    )
}

export default tableItem
