import HomePage from './website/homepage';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import 'flowbite';
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
import Rate from './restaurant/setting/rate';
import Profiles from './website/profile';
import SignUp from './website/signup';
import OTPVerification from './website/otp_verification';
function App() {
  const router = createHashRouter([
    {
      path: "/",
      element: <HomePage />
    },
    {
      path: "/authentication",
      element: <Authen />
    },
    {
      path: "/payment",
      element: <Payment />
    },
    {
      path: "/managefood",
      element: <ManageFood />
    },
    {
      path: "/managecategory",
      element: <ManageCategory />
    },
    {
      path: "/managezone",
      element: <ManageZone />
    },
    {
      path: "/managetable",
      element: <ManageTables />
    },
    {
      path: "/dashboard",
      element: <Dashboard />
    },
    {
      path: "/dashboardv2",
      element: <Dashboardv2 />
    },
    {
      path: "/manageuser",
      element: <ManageUser />
    },
    {
      path: "/sale",
      element: <SelectTatles />
    },
    {
      path: "/cart/:id",
      element: <Carts />
    },
    {
      path: "/help",
      element: <Help />
    },
    {
      path: "/profile",
      element: <Profile />
    },
    {
      path: "/profiles",
      element: <Profiles />
    },
    {
      path: "/sign-up",
      element: <SignUp />
    },
    {
      path: "/verification",
      element: <OTPVerification />
    },
    {
      path: "/salereport",
      element: <SaleReport />
    },
    {
      path: "/setting/bill",
      element: <SettingBill />
    },
    {
      path: "/setting/printer",
      element: <Printer />
    },
    {
      path: "/setting/rate",
      element: <Rate />
    },
    {
      path: "/manual",
      element: <UserManual />
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
