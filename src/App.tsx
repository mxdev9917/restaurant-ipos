import HomePage from './webbox/homepage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'flowbite'
import Authen from './restaurant/authen';
import Payment from './webbox/payment';
import HomeScreen from './restaurant/homescreen';
import ManageFood from './restaurant/managefood/managefood';
import ManageCategory from './restaurant/managefood/managecategory';
import ManageZone from './restaurant/managefood/managezone';
import ManageTables from './restaurant/managefood/managetables';
import Dashboard from './restaurant/managefood/dashboard';
import Dashboardv2 from './restaurant/managefood/dashboardv2';
import Test from './restaurant/test';

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
      path: "/home",
       element:<HomeScreen/>
     
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
      path: "/test",
      element:<Test/>
     
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
