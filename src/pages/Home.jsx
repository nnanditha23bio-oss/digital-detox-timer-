import { useState, useEffect } from "react";

function Home() {
  const [time, setTime] = useState(5);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    if (time === 0) {
      setFinished(true);
      localStorage.setItem("detoxCompleted", "true"); // ✅ IMPORTANT
      return;
    }

    const timer = setTimeout(() => {
      setTime(time - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [time]);

  return (
    <div>
      <h1>Digital Detox Timer</h1>

      {!finished ? (
        <p>Time remaining: {time}</p>
      ) : (
        <h2>✅ Detox session completed</h2>
      )}
    </div>
  );
}

export default Home;
