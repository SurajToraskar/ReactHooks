import { useEffect, useLayoutEffect } from "react";

export default function UseLayoutEffect() {
  useEffect(() => {
    console.log("Message from useEffect");
  }, []);

  useLayoutEffect(() => {
    console.log("Message from useLayoutEffect");
  }, []);
  return (
    <>
      <h1>Test Message</h1>
    </>
  );
}
