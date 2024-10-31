import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function Contact() {
  const { phone, name } = useContext(AppContext);
  return (
    <div>
      <h2>Contact</h2>
      <h3>Phone :{phone}</h3>
      <h3>Name :{name}</h3>
    </div>
  );
}
