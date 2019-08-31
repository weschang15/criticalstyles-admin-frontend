import { useEffect, useRef, useState } from "react";

const INITIAL_STATE = false;

function useHover() {
  const ref = useRef();
  const [hovered, setHovered] = useState(INITIAL_STATE);
  const enter = () => setHovered(true);
  const leave = () => setHovered(false);

  useEffect(() => {
    const node = ref.current;

    node.addEventListener("mouseenter", enter);
    node.addEventListener("mouseleave", leave);
    return () => {
      node.removeEventListener("mouseenter", enter);
      node.removeEventListener("mouseleave", leave);
    };
  }, [ref]);

  return [ref, hovered];
}

export default useHover;
