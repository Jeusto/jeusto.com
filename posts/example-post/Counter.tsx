import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <p>You clicked {count} times</p>
      <button
        style={{
          backgroundColor: "teal",
          color: "white",
          borderRadius: "5px",
          padding: "10px",
          margin: "10px",
          fontWeight: "bold",
          cursor: "pointer",
          border: "none",
          outline: "none",
        }}
        onClick={() => setCount(count + 1)}
      >
        Click
      </button>
    </div>
  );
}
