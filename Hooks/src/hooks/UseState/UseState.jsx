import { useState } from "react";

export default function UseState() {
  const [color, setColor] = useState("Red");
  const [car, setCar] = useState({
    brand: "Ferrari",
    model: "Roma",
    year: 2023,
    color: "Red",
  });
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>My favourite color is {color}!</h1>
      <button
        onClick={() => {
          setColor("Blue");
        }}
      >
        Blue
      </button>
      <h1>My {car.brand}</h1>
      <h2>
        It is a {car.color} {car.model} from {car.year}
      </h2>
      <button
        onClick={() => {
          setCar((prev) => ({ ...prev, color: "Blue" }));
        }}
      >
        {" "}
        Blue
      </button>
      <h1>Count: {count}</h1>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          setCount((prev) => prev - 1);
        }}
      >
        Decrease
      </button>
    </>
  );
}
