import { useState, useEffect } from "react"; 
import { Link } from "react-router-dom";


function Home() {
  const [time, setTime] = useState(10);
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

      <div className="nav-buttons">
  <Link to="/about">
    <button>⬅ About</button>
  </Link>

  {finished && (
    <Link to="/stats">
      <button>View Stats ➡</button>
    </Link>
  )}
</div>

    </div> 
  );
}

export default Home;
