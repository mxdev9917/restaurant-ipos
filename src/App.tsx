import { lazy } from 'react';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import { AuthProvider } from './context/context'; // Import your AuthProvider
import 'flowbite';

// Lazy load components
const Authen = lazy(() => import('./restaurant/authen'));
const ManageFood = lazy(() => import('./restaurant/manage-food/foods/manage-food'));
const ManageCategory = lazy(() => import('./restaurant/manage-food/categories/manage-category'));
const ManageZone = lazy(() => import('./restaurant/manage-food/manage-zone'));
const ManageTables = lazy(() => import('./restaurant/manage-food/tables/managetables'));
const Dashboard = lazy(() => import('./restaurant/dashboard/dashboard'));
const ManageUser = lazy(() => import('./restaurant/manage-user'));
const SelectTatles = lazy(() => import('./restaurant/sale/selecttatle'));
const Carts = lazy(() => import('./restaurant/sale/carts'));
const Help = lazy(() => import('./restaurant/help'));
const Profile = lazy(() => import('./restaurant/profile'));
const SaleReport = lazy(() => import('./restaurant/report/salereport'));
const SettingBill = lazy(() => import('./restaurant/setting/bill'));
const UserManual = lazy(() => import('./restaurant/manual'));
const Printer = lazy(() => import('./restaurant/setting/printer'));
const Rate = lazy(() => import('./restaurant/setting/rateSetting/rate'));
const ManageKitchen = lazy(() => import('./restaurant/kitchen/manageKitchen'));
const Slideshow = lazy(() => import('./restaurant/slideshow'));

const router = createHashRouter(
  [
    { path: "/managefood", element: <ManageFood /> },
    { path: "/managecategory", element: <ManageCategory /> },
    { path: "/managezone", element: <ManageZone /> },
    { path: "/managetable", element: <ManageTables /> },
    { path: "/", element: <Authen /> },
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
    { path: "/manage/kitchen", element: <ManageKitchen /> },
    { path: "slideshow", element: <Slideshow /> },
  ],
  {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    }
  }
);


function App() {
  return (
    <AuthProvider>
      {/* Ensure no margin/padding on body and html */}
      <div className="h-screen w-full flex items-center justify-center overflow-hidden">
        <RouterProvider router={router} />
      </div>
    </AuthProvider>
  );
}

export default App;







