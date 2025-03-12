import { Suspense, lazy } from 'react';
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
const ManageKitchen =lazy(()=> import('./restaurant/kitchen/manageKitchen'));

const router = createHashRouter(
  [
    { path: "/managefood", element: <Suspense fallback={<div>Loading...</div>}><ManageFood /></Suspense> },
    { path: "/managecategory", element: <Suspense fallback={<div>Loading...</div>}><ManageCategory /></Suspense> },
    { path: "/managezone", element: <Suspense fallback={<div>Loading...</div>}><ManageZone /></Suspense> },
    { path: "/managetable", element: <Suspense fallback={<div>Loading...</div>}><ManageTables /></Suspense> },
    { path: "/", element: <Suspense fallback={<div>Loading...</div>}><Authen /></Suspense> },
    { path: "/dashboard", element: <Suspense fallback={<div>Loading...</div>}><Dashboard /></Suspense> },
    { path: "/manageuser", element: <Suspense fallback={<div>Loading...</div>}><ManageUser /></Suspense> },
    { path: "/sale", element: <Suspense fallback={<div>Loading...</div>}><SelectTatles /></Suspense> },
    { path: "/cart/:id", element: <Suspense fallback={<div>Loading...</div>}><Carts /></Suspense> },
    { path: "/help", element: <Suspense fallback={<div>Loading...</div>}><Help /></Suspense> },
    { path: "/profile", element: <Suspense fallback={<div>Loading...</div>}><Profile /></Suspense> },
    { path: "/salereport", element: <Suspense fallback={<div>Loading...</div>}><SaleReport /></Suspense> },
    { path: "/setting/bill", element: <Suspense fallback={<div>Loading...</div>}><SettingBill /></Suspense> },
    { path: "/setting/printer", element: <Suspense fallback={<div>Loading...</div>}><Printer /></Suspense> },
    { path: "/setting/rate", element: <Suspense fallback={<div>Loading...</div>}><Rate /></Suspense> },
    { path: "/manual", element: <Suspense fallback={<div>Loading...</div>}><UserManual /></Suspense> },
    { path: "/manage/kitchen", element: <Suspense fallback={<div>Loading...</div>}><ManageKitchen /></Suspense> },
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
      <div>
        <RouterProvider router={router} />
      </div>
    </AuthProvider>
  );
}

export default App;
