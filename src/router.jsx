import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Body from './body.jsx'
import Layout from './layout.jsx'
import AYH from './components/ayh.jsx'


const route = createBrowserRouter([
   {
    element:<Layout/>,
    children:[
        {
            path:'/',
            element:<Body/>
          },
          {
            path:'home',
            element:<AYH />
          }
       
    ]
   }
]);

const Routers = () => {
  return <RouterProvider router={route} />;
};

export default Routers;