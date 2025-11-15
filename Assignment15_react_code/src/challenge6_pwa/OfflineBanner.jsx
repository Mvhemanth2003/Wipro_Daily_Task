import { useEffect, useState } from "react";

export default function OfflineBanner() {
  const [online, setOnline] = useState(navigator.onLine);

  useEffect(() => {
    window.addEventListener("online", () => setOnline(true));
    window.addEventListener("offline", () => setOnline(false));
  }, []);

  if (online) return null;

  return (
    <div style={{ background: "orange", padding: "10px", textAlign: "center" }}>
      You are offline!
    </div>
  );
}