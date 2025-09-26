import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ConfigProvider } from "antd";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router.tsx";
import "antd/dist/reset.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#F65F42",
          colorLink: "#F65F42",
        },
      }}
    >
      <RouterProvider router={router} />
    </ConfigProvider>
  </StrictMode>
);
