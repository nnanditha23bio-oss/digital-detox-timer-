import { useEffect, useState } from "react";

function Stats() {
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    const status = localStorage.getItem("detoxCompleted");
    if (status === "true") {
      setCompleted(true);
    }
  }, []);

  return (
    <div>
      <h1>Detox Stats</h1>

      {completed ? (
        <p>✅ You have completed at least one detox session!</p>
      ) : (
        <p>Detox session completed today!</p>
      )}
    </div>
  );
}

export default Stats;
