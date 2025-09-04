import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MealDetails from "./pages/Details/MealDetails";
import RecipeApp from "./pages/Home/Home";
import Layout from "./pages/Layout";

let routes = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { index: true, element: <RecipeApp /> },
      { path: "meal/:id", element: <MealDetails /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={routes}></RouterProvider>;
}

export default App;
