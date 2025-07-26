import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import NotFound from "./Pages/NotFound";
import ProductDetials from "./Pages/ProductDetials";
import Profile from "./Pages/Profile";
import Cart from "./Pages/Cart";
const router= createBrowserRouter([
  {
    path: '', element: <Layout />, children: [
      { path: '', element: <Home /> },
      { path: 'productDetials/:id', element: <ProductDetials /> },
      {path:'cart',element:<Cart/>},
      {path:'profile',element:<Profile/>},
      {path:'*',element:<NotFound/>}
  ]}
])
const queryClient = new QueryClient()
export default function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        </QueryClientProvider>
    </>
  )
}
