export function AnimatedBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full opacity-40 blur-3xl animate-blob"
        style={{ background: "radial-gradient(closest-side, #8b5cf6, transparent)" }} />
      <div className="absolute top-1/3 -right-40 h-[560px] w-[560px] rounded-full opacity-30 blur-3xl animate-blob"
        style={{ background: "radial-gradient(closest-side, #22d3ee, transparent)", animationDelay: "-8s" }} />
      <div className="absolute bottom-0 left-1/4 h-[520px] w-[520px] rounded-full opacity-25 blur-3xl animate-blob"
        style={{ background: "radial-gradient(closest-side, #10b981, transparent)", animationDelay: "-14s" }} />
      <div className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />
    </div>
  );
}
