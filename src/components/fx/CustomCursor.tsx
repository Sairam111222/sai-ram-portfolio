import { useEffect, useRef, useState } from "react";
import { useHydrated } from "@/hooks/useHydrated";

export function CustomCursor() {
  const hydrated = useHydrated();
  const [fine, setFine] = useState(false);
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    setFine(window.matchMedia("(hover: hover) and (pointer: fine)").matches);
  }, []);

  useEffect(() => {
    if (!fine) return;
    let rx = 0, ry = 0, x = 0, y = 0;
    let raf = 0;
    const onMove = (e: MouseEvent) => {
      x = e.clientX; y = e.clientY;
      if (dot.current) dot.current.style.transform = `translate(${x - 3}px, ${y - 3}px)`;
      const el = e.target as HTMLElement | null;
      setHover(!!el?.closest("a,button,[data-cursor='hover']"));
    };
    const loop = () => {
      rx += (x - rx) * 0.18;
      ry += (y - ry) * 0.18;
      if (ring.current) ring.current.style.transform = `translate(${rx - 18}px, ${ry - 18}px)`;
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(loop);
    document.documentElement.style.cursor = "none";
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
      document.documentElement.style.cursor = "";
    };
  }, [fine]);

  if (!hydrated || !fine) return null;

  return (
    <>
      <div
        ref={dot}
        className="pointer-events-none fixed left-0 top-0 z-[100] h-1.5 w-1.5 rounded-full"
        style={{ background: "var(--brand-cyan)", boxShadow: "0 0 12px var(--brand-cyan)" }}
      />
      <div
        ref={ring}
        className="pointer-events-none fixed left-0 top-0 z-[100] h-9 w-9 rounded-full border transition-[width,height,border-color,background] duration-200"
        style={{
          borderColor: hover ? "var(--brand-violet)" : "rgba(255,255,255,0.35)",
          background: hover ? "color-mix(in oklab, var(--brand-violet) 15%, transparent)" : "transparent",
        }}
      />
    </>
  );
}
