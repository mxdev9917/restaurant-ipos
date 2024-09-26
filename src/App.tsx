import HomePage from './website/homepage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'flowbite'
import Authen from './restaurant/authen';
import Payment from './website/payment';
import ManageFood from './restaurant/managefood/managefood';
import ManageCategory from './restaurant/managefood/managecategory';
import ManageZone from './restaurant/managefood/managezone';
import ManageTables from './restaurant/managefood/managetables';
import Dashboardv2 from './restaurant/dashboardv2';
import Dashboard from './restaurant/dashboard';
import ManageUser from './restaurant/manageuser';
import SelectTatles from './restaurant/sale/selecttatle';
import Carts from './restaurant/sale/carts';
import Help from './restaurant/help';
import Profile from './restaurant/profile';
import SaleReport from './restaurant/report/salereport';
import SettingBill from './restaurant/setting/bill';
import UserManual from './restaurant/manual';
import Printer from './restaurant/setting/printer';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
       element:<HomePage/>
     
    },
    {
      path: "/authentication",
       element:<Authen/>
     
    },
    {
      path: "/payment",
       element:<Payment/>
     
    },
    {
      path: "/managefood",
      element:<ManageFood/>
     
    },
    {
      path: "/managecategory",
      element:<ManageCategory/>
     
    },
    {
      path: "/managezone",
      element:<ManageZone/>
     
    },
    {
      path: "/managetable",
      element:<ManageTables/>
     
    },
    {
      path: "/dashboard",
      element:<Dashboard/>
     
    },
    {
      path: "/dashboardv2",
      element:<Dashboardv2/>
     
    },
    {
      path: "/manageuser",
      element:<ManageUser/>
     
    },
    {
      path: "/sale",
      element:<SelectTatles/>
     
    },
    {
      path: "/cart",
      element:<Carts/>
     
    },
    {
      path: "/help",
      element:<Help/>
     
    },
    {
      path: "/profile",
      element:<Profile/>
     
    },
    {
      path: "/salereport",
      element:<SaleReport/>
     
    },
    {
      path: "/settingbill",
      element:<SettingBill/>
     
    },
    {
      path: "/printer",
      element:<Printer/>
     
    },
    {
      path: "/manual",
      element:<UserManual/>
     
    },

    // {
    //   path: "/detail/:name",
    //   // element:<DetailPage/>
     
    // },
  ]);

  return (
    <div >
       <RouterProvider router={router} />
    </div>
  )
}

export default App
