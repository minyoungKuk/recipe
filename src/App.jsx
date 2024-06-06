import React from "react";
import { RouterProvider } from "react-router-dom";
import GlobalModal from "./components/GlobalModal";
import router from "./routes/router";

function App() {
  return (
    <div>
      <GlobalModal />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
