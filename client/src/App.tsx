import "./index.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { MainLayout } from "./layouts/Main";
import { LoginRoute } from "./routes/Login";
import { RegisterRoute } from "./routes/Register";
import { RootRoute } from "./routes/Root";
import { Toaster } from "react-hot-toast";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <RootRoute />,
      },
      {
        path: "/login",
        element: <LoginRoute />,
      },
      {
        path: "/register",
        element: <RegisterRoute />,
      },
    ],
  },
]);

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <RouterProvider router={router} />;
      <Toaster />
    </QueryClientProvider>
  );
}
