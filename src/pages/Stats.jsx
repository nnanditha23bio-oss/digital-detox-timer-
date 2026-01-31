import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


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
        <p>✅ You have completed One detox session! Congartulations!</p> 
      ) : (
        <p>Detox session completed today!</p>
      )}
      <div className="nav-buttons">
  <Link to="/">
    <button>← Back to Timer</button>
  </Link>
</div>

    </div>
  );
}

export default Stats; 
