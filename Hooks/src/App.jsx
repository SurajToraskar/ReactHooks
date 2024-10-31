import { useState } from "react";
import "./App.css";
import UseState from "./hooks/useState/UseState";
import UseEffect from "./hooks/UseEffect/UseEffect";
import UseRef from "./hooks/UseRef/UseRef";
import UseMemo from "./hooks/UseMemo/UseMemo";
import UseCallback from "./hooks/UseCallback/UseCallback";
import Profile from "./components/Profile";
import Footer from "./components/Footer";
export default function App() {
  return (
    <>
      {/* <UseState /> */}
      {/* <UseEffect /> */}
      {/* <UseRef /> */}
      {/* <UseMemo /> */}
      {/* <UseCallback /> */}
      <Profile />
      <Footer />
    </>
  );
}
