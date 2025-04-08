import React from "react";
import { createRoot } from "react-dom/client";
import Admin from "./components/Admin";


const App = ()=>{
  return (
    <>
      <Admin/>
    </>
  )
}




createRoot(document.getElementById('root')).render(<App/>);