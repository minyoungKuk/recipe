import React from "react";
import { RouterProvider } from "react-router-dom";
import GlobalModal from "./components/GlobalModal";
import SignUp from "./components/Signup";
import router from "./routes/router";

function App() {
  return (
    <div>
      <SignUp />
      <GlobalModal />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
