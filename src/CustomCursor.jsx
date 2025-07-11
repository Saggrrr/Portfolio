import { useEffect } from "react";
import "./CustomCursor.css"; // we’ll create this next

function CustomCursor() {
  useEffect(() => {
    const cursor = document.createElement("div");
    cursor.className = "custom-cursor";
    document.body.appendChild(cursor);

    const move = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    window.addEventListener("mousemove", move);
    return () => {
      window.removeEventListener("mousemove", move);
      cursor.remove();
    };
  }, []);

  return null;
}

export default CustomCursor;
