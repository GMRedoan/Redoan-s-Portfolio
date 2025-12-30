import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../HomeLayout/Home";
import Project01 from "../Pages/Project01";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        index: true, 
        element: <Home></Home>
      },
      {
        path: '/project01',
        element: <Project01></Project01>
      }
    ]
  },
]);

export default router;