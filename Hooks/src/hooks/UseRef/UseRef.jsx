import { useRef, useState, useEffect } from "react";

export default function UseRef() {
  //   const [count, setCount] = useState(0);
  const [value, setValue] = useState(0);
  const count = useRef(0);
  useEffect(() => {
    count.current = count.current + 1;
  });

  const inputElement = useRef();

  return (
    <>
      <button onClick={() => setValue((prev) => prev - 1)}>-1</button>
      <h1>{value}</h1>
      <button onClick={() => setValue((prev) => prev + 1)}>+1</button>
      <h1>Render Count:{count.current}</h1>
      <input ref={inputElement} type="text" />
      <button
        onClick={() => {
          console.log(inputElement.current);
          inputElement.current.style.backgroundColor = "red";
        }}
      >
        Click here
      </button>
    </>
  );
}
