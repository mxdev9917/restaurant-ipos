import HomePage from './front-end/homepage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
       element:<HomePage/>
     
    },
    {
      path: "/detail/:name",
      // element:<DetailPage/>
     
    },
  ]);

  return (
    <div className="overflow-y-hidden bg-[url('/src/assets/images/list_bg.jpg')] max-h-[100vh] max-h-[100vh] ">
       <RouterProvider router={router} />
    </div>
  )
}

export default App
