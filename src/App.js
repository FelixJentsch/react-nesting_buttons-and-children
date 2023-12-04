import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>Press me!</Button>
      <Button>No, press me instead!</Button>
      <Button>Try me!</Button>
      <Button>Do something!</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
