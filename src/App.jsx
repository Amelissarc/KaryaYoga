import React, {useState, UseEffects} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { MainRoutes } from "./routes/MainRoutes";


export function App() {
  return (
    <div className="bodyContainer">
      <MainRoutes />
    </div>
  );
}
export default App;
