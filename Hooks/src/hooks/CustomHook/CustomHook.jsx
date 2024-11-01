import { useEffect, useState } from "react";
import useLocalStorage from "./useLocalStorage";

export default function CustomHook() {
  //   const [name, setName] = useState(
  //     localStorage.getItem("username") ? localStorage.getItem("username") : ""
  //   );

  //   useEffect(() => {
  //     localStorage.setItem("username", name);
  //   }, [name]);
  const [name, setName] = useLocalStorage("username", "");
  const [id, setId] = useLocalStorage("userId", "");
  return (
    <>
      <input
        type="text"
        value={name}
        placeholder="Enter your name"
        onChange={(e) => setName(e.target.value)}
      />
      <h2>Username: {name}</h2>
      <input
        type="text"
        value={id}
        placeholder="Enter your Id"
        onChange={(e) => setId(e.target.value)}
      />
      <h2>Id: {id}</h2>
    </>
  );
}
