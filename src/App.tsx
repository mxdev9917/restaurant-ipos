import { createHashRouter, RouterProvider } from 'react-router-dom';
import { AuthProvider } from './context/context'; // นำเข้า AuthProvider
import 'flowbite';

// นำเข้าคอมโพเนนต์ทั้งหมดที่คุณต้องการใช้
import HomePage from './website/homepage';
import Authen from './website/authen';
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
import SignUp from './website/signup';
import OTPVerification from './website/otp_verification';
import Authentication from './admins/authentication';
import UserAdmin from './admins/user-admin/manage-user-admin';
import Customers from './admins/customers/customer';
import CustomerDetail from './admins/customers/customer-detail';
import Tamplace from './admins/tamplace';
import RestaurantApproval from './admins/approval/restaurant-approval';
import RestaurantDetail from './admins/approval/restaurant-detail';
import Profiles from './website/profile/profile';


function App() {
  const router = createHashRouter([
    // admin
    {
      path: "/admin/approval/restaurant/detail",
      element: <RestaurantDetail />
    },
    {
      path: "/admin/approval/restaurant",
      element: <RestaurantApproval />
    },
    {
      path: "/admin/tamplace",
      element: <Tamplace />
    },
    {
      path: "/admin",
      element: <Authentication />
    },
    {
      path: "/admin/users",
      element: <UserAdmin />
    },
    {
      path: "/admin/customers",
      element: <Customers />
    },
    {
      path: "/admin/customer/detail/:id",
      element: <CustomerDetail />
    },
    // end admin
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

    // website 
    {
      path: "/profiles",
      element: <Profiles />
    },






  ], {
    future: {
      v7_normalizeFormMethod: true,  // Enable early adoption of the v7 form method normalization
      v7_skipActionErrorRevalidation: true,  // Enable early adoption of the v7 action error revalidation behavior
    },
  });

  return (
    <AuthProvider> {/* ห่อหุ้มแอปด้วย AuthProvider */}
      <div>
        <RouterProvider router={router} />
      </div>
    </AuthProvider>
  );
}

export default App;
