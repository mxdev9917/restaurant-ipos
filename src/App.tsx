import HomePage from './webbox/homepage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'flowbite'
import Authen from './restaurant/authen';
import Payment from './webbox/payment';
import HomeScreen from './restaurant/homescreen';

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
