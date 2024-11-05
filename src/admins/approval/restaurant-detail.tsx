import Sidebar_Nav from "../components/sidebar-nav";
import Restaurantpayment from "../components/restaurant-payment";
import RestaurantInfo from "../components/restaurant-info";
import { useState } from 'react';
import { ImMenu2 } from "react-icons/im";




function RestaurantDetail() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { title: 'Profile', content: <RestaurantInfo /> },
    { title: 'Payment', content: <Restaurantpayment /> },
  ];
  const headers = ["InvoiceID", "Date", "Payment Method", "Price", "Status"];
  const data = [
    { id: "1256", date: "01/11/2024", method: "Bank Transfer", price: "150,000", status: "Paid" },
    { id: "1563", date: "01/11/2034", method: "BCEL", price: "150,000", status: "Paid" },
    { id: "1356", date: "01/11/2022", method: "Bank Transfer", price: "150,000", status: "Paid" },
  ];
  return (
    <div className="flex flex-col min-h-screen">
      <Sidebar_Nav />
      <div className="sm:ml-64 flex-1">
        <div className="flex flex-col">

          <div className="flex space-x-4 border-b">
            {tabs.map((tab, index) => (
              <button
                key={index}
                className={`py-2 px-4 text-sm font-medium ${activeTab === index
                  ? 'border-b-2 border-orange-500 text-orborder-orange-500'
                  : 'text-gray-600 hover:text-orborder-orange-500'
                  }`}
                onClick={() => setActiveTab(index)}
              >
                {tab.title}
              </button>
            ))}
          </div>
          <div className="p-4">
            <p>{tabs[activeTab].content}</p>
          </div>


          <div className="flex mx-5 mt-3 gap-2 border-b items-end">
            <ImMenu2 className="text-3xl text-gray-500" />
            <p className="text-orange-500">ຂໍ້ມູນຮ້ານ</p>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  {headers.map((header, index) => (
                    <th
                      key={index}
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {data.map((row, index) => (
                  <tr key={index} className="hover:bg-gray-100">
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">{row.id}</td>
                    <td className="px-6 py-4">{row.date}</td>
                    <td className="px-6 py-4">{row.method}</td>
                    <td className="px-6 py-4">{row.price}</td>
                    <td className="px-6 py-4">{row.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RestaurantDetail;


