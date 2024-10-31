import { useCallback, useState } from "react";
import Header from "../../components/Header";
export default function UseCallback() {
  const [count, setCount] = useState(0);
  const newFn = useCallback(() => {}, []);
  return (
    <>
      <Header newFn={newFn} />
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        Click Here
      </button>
    </>
  );
}
