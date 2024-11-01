import { useState } from "react";
import "./App.css";
import UseState from "./hooks/useState/UseState";
import UseEffect from "./hooks/UseEffect/UseEffect";
import UseRef from "./hooks/UseRef/UseRef";
import UseMemo from "./hooks/UseMemo/UseMemo";
import UseCallback from "./hooks/UseCallback/UseCallback";
import Profile from "./components/Profile";
import Footer from "./components/Footer";
import UseReducer from "./hooks/UseReducer/UseReducer";
import UseLayoutEffect from "./hooks/UseLayoutEffect/UseLayoutEffect";
import CustomHook from "./hooks/CustomHook/CustomHook";
export default function App() {
  return (
    <>
      {/* <UseState /> */}
      {/* <UseEffect /> */}
      {/* <UseRef /> */}
      {/* <UseMemo /> */}
      {/* <UseCallback /> */}
      {/* <Profile />
      <Footer /> */}
      {/* <UseReducer /> */}
      {/* <UseLayoutEffect /> */}
      <CustomHook />
    </>
  );
}
