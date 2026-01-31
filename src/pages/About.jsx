import { Link } from "react-router-dom";

function About() {
  return (
    <div>
      <h1>About Digital Detox Timer</h1>

      <p>
        This application helps users take short breaks from screens
        and track completed detox sessions.
      </p>

      <div className="nav-buttons">
        <Link to="/">
          <button>Go to Timer</button>
        </Link>
      </div>
    </div>
  );
}

export default About;
