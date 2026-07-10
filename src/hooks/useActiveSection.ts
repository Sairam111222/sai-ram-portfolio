import { useEffect, useState } from "react";

export function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0] ?? "");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const visible = new Map<string, number>();

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            visible.set(id, e.isIntersecting ? e.intersectionRatio : 0);
          });
          let bestId = active;
          let bestRatio = 0;
          for (const [k, v] of visible) {
            if (v > bestRatio) { bestRatio = v; bestId = k; }
          }
          if (bestRatio > 0) setActive(bestId);
        },
        { threshold: [0.25, 0.5, 0.75], rootMargin: "-20% 0px -40% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ids.join(",")]);

  return active;
}
