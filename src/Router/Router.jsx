import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../LandigPage/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children:[
      {
        index: true, 
        element: <Home/>
      }
     ]
  },
]);

export default router;