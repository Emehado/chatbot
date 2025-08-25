import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/api/hello")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <>
      <p className="font-bold text-amber-300 bg-indigo-400 p-4 text-3xl">
        {message}
      </p>
    </>
  );
}

export default App;
