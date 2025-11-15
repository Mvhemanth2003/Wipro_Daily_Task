import { useState } from "react";
import { useTimer } from "./useTimer";

export default function WorkoutTracker() {
  const { seconds, start, stop, reset } = useTimer();
  const [sets, setSets] = useState(0);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Workout Tracker</h2>
      <p>Sets: {sets}</p>
      <p>Rest Time: {seconds}s</p>

      <button onClick={start}>Start Rest</button>
      <button onClick={() => { setSets(sets + 1); reset(); }}>
        Finish Set
      </button>
      <button onClick={stop}>Stop</button>
    </div>
  );
}
