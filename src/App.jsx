import React from "react";
import { RouterProvider } from "react-router-dom";
import Signup from "./components/Signup";
import router from "./routes/router";

function App() {
  return (
    <div>
      <Signup />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
