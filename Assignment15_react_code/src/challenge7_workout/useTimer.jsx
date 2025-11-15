import { useState, useRef, useEffect } from "react";

export function useTimer() {
  const [seconds, setSeconds] = useState(0);
  const ref = useRef(null);

  const start = () => {
    if (ref.current) return;
    ref.current = setInterval(() => setSeconds((s) => s + 1), 1000);
  };

  const stop = () => {
    clearInterval(ref.current);
    ref.current = null;
  };

  const reset = () => {
    stop();
    setSeconds(0);
  };

  useEffect(() => stop, []);

  return { seconds, start, stop, reset };
}


