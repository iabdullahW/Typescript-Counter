import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState<number>(0);

  return (
   <div className="flex justify-center ">
     <div className="bg-gray-300 h-[25rem] w-[40rem] flex flex-col justify-center items-center gap-y-2 ">
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-4xl font-poppins">Counter TypeScript</h1>
        <br />
        <h1>{count}</h1>
        <br />
      </div>
      <div className="flex gap-2">
        <button
          className={`bg-red-500 text-white p-1 rounded-md ${
            count <= 0 && "opacity-50 cursor-not-allowed"
          }`}
          onClick={() => setCount(count - 1)}
          disabled={count <= 0}
        >
          Decrease
        </button>
        <button
          className="bg-blue-500 text-white p-1 rounded-md"
          onClick={() => setCount(0)}
        >
          Reset
        </button>
        <button
          className="bg-green-500 text-white p-1 rounded-md"
          onClick={() => setCount(count + 1)}
        >
          Increase
        </button>
      </div>
      {count <= 0 && (
        <p className="text-red-500 text-sm">Count cannot go below 0</p>
      )}
    </div>
   </div>
  );
};

export default App;
