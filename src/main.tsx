import { createRoot } from "react-dom/client";
import Layout from "./route/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import QrCodeGenerator from "./components/QrCodeGenerator";
import QrCodeScanner from "./components/QrCodeScanner";
import GenerateHistory from "./components/GenerateHistory";
import ScanHistory from "./components/ScanHistory";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <QrCodeGenerator /> },
      { path: "scan", element: <QrCodeScanner /> },
      { path: "scan/history", element: <ScanHistory/> },
      { path: "generator/history", element: <GenerateHistory/> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
