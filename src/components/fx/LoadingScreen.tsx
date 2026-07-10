import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setShow(false), 1100);
    return () => clearTimeout(t);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[200] grid place-items-center bg-background"
        >
          <div className="flex flex-col items-center gap-6">
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="grid h-16 w-16 place-items-center rounded-2xl gradient-border glass animate-pulse-ring"
            >
              <span className="text-2xl font-bold text-gradient font-display">S</span>
            </motion.div>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 160 }}
              transition={{ duration: 0.9, ease: "easeInOut" }}
              className="h-[2px] rounded-full"
              style={{ background: "var(--gradient-primary)" }}
            />
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Loading</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
