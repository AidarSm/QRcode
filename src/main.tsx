import { createRoot } from "react-dom/client";
import Layout from "./route/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import QrCodeGenerator from "./components/QrCodeGenerator";
import QrCodeScanner from "./components/QrCodeScanner";
import GenerateHistory from "./components/GenerateHistory";
import ScanHistory from "./components/ScanHistory";
import NotFoundPage from "./components/NotFoundPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
	 errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <QrCodeGenerator /> },
      { path: "scan", element: <QrCodeScanner /> },
      { path: "scan/history", element: <ScanHistory/> },
      { path: "generator/history", element: <GenerateHistory/> },
    ],
  },
],  {
	basename: "/QRcode", // Указываем базовый путь
 });

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
