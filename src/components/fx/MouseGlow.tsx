import { useEffect, useState } from "react";
import { useHydrated } from "@/hooks/useHydrated";

export function MouseGlow() {
  const hydrated = useHydrated();
  const [pos, setPos] = useState({ x: -1000, y: -1000 });
  const [fine, setFine] = useState(false);

  useEffect(() => {
    setFine(window.matchMedia("(hover: hover) and (pointer: fine)").matches);
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  if (!hydrated || !fine) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-[5] transition-opacity"
      style={{
        background: `radial-gradient(600px circle at ${pos.x}px ${pos.y}px, rgba(139,92,246,0.12), transparent 45%)`,
      }}
    />
  );
}
