import { useState, useEffect } from "react";

function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-indigo-900 via-purple-900 to-black">
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-10 text-center">
        <h1 className="text-white text-2xl mb-4 font-semibold">
          Digital Clock
        </h1>

        <h2 className="text-cyan-400 text-6xl font-bold tracking-widest">
          {time.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",})}
        </h2>
      </div>
    </div>
  );
}

export default App;