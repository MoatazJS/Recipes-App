import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MealDetails from "./pages/Details/MealDetails";
import RecipeApp from "./pages/Home/Home";
import Layout from "./pages/Layout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
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
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={routes}></RouterProvider>
    </QueryClientProvider>
  );
}

export default App;
