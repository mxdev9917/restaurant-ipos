import { createHashRouter, RouterProvider } from 'react-router-dom';
import { AuthProvider } from './context/context'; // Import your AuthProvider
import 'flowbite';
import Authen from './restaurant/authen';
import ManageFood from './restaurant/managefood/managefood';
import ManageCategory from './restaurant/managefood/managecategory';
import ManageZone from './restaurant/managefood/managezone';
import ManageTables from './restaurant/managefood/managetables';
// import Dashboardv2 from './restaurant/dashboardv2';
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

function App() {
  const router = createHashRouter(
    [  
      { path: "/managefood", element: <ManageFood /> },
      { path: "/managecategory", element: <ManageCategory /> },
      { path: "/managezone", element: <ManageZone /> },
      { path: "/managetable", element: <ManageTables /> },
      { path: "/", element: <Authen/> },
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/manageuser", element: <ManageUser /> },
      { path: "/sale", element: <SelectTatles /> },
      { path: "/cart/:id", element: <Carts /> },
      { path: "/help", element: <Help /> },
      { path: "/profile", element: <Profile /> },
    
      { path: "/salereport", element: <SaleReport /> },
      { path: "/setting/bill", element: <SettingBill /> },
      { path: "/setting/printer", element: <Printer /> },
      { path: "/setting/rate", element: <Rate /> },
      { path: "/manual", element: <UserManual /> },
    ],
    {
      future: {
        v7_normalizeFormMethod: true,  // Enable early adoption of the v7 form method normalization
        v7_skipActionErrorRevalidation: true,  // Enable early adoption of the v7 action error revalidation behavior
        v7_partialHydration: true, // Opt-in to v7 partial hydration behavior
        v7_fetcherPersist: true, // Opt-in to the new fetcher persistence behavior
        v7_relativeSplatPath: true, // Opt-in to the new relative splat path resolution behavior
      },
    }
  );

  return (

    <AuthProvider>
      <div>
        <RouterProvider router={router} />
      </div>
    </AuthProvider>

  );
}

export default App;
