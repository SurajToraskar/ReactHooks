import { useCallback, useState } from "react";

export default function UseCallback() {
  const [count, setCount] = useState(0);
  return (
    <>
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
