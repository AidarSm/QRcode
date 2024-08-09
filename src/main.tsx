import { createRoot } from "react-dom/client";
import Layout from "./route/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import QrCodeGenerator from "./components/QrCodeGenerator";
import QrCodeScanner from "./components/QrCodeScanner";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <QrCodeGenerator /> },
      { path: "scan", element: <QrCodeScanner /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
