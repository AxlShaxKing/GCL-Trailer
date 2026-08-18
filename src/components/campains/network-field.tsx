const nodes = [
  { left: 14, top: 20, delay: "0s", color: "sky" },
  { left: 35, top: 32, delay: "0.6s", color: "yellow" },
  { left: 55, top: 18, delay: "1.2s", color: "sky" },
  { left: 74, top: 30, delay: "1.8s", color: "red" },
  { left: 28, top: 65, delay: "2.4s", color: "sky" },
  { left: 52, top: 58, delay: "3s", color: "yellow" },
  { left: 82, top: 68, delay: "3.6s", color: "sky" },
] as const;

const lines = [
  [14, 20, 35, 32],
  [35, 32, 55, 18],
  [55, 18, 74, 30],
  [35, 32, 28, 65],
  [35, 32, 52, 58],
  [55, 18, 52, 58],
  [52, 58, 82, 68],
  [74, 30, 82, 68],
] as const;

export function NetworkField() {
  return (
    <div className="pointer-events-none absolute inset-0">
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="h-full w-full"
        aria-hidden="true"
      >
        {lines.map(([x1, y1, x2, y2], index) => (
          <line
            key={index}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="currentColor"
            strokeWidth="0.12"
            className="text-sky/30"
          />
        ))}
      </svg>

      {nodes.map((node, index) => {
        const color =
          node.color === "yellow"
            ? "bg-yellow"
            : node.color === "red"
              ? "bg-red"
              : "bg-sky";

        return (
          <span
            key={index}
            className={`absolute h-1.5 w-1.5 rounded-full ${color} animate-node`}
            style={{
              left: `${node.left}%`,
              top: `${node.top}%`,
              animationDelay: node.delay,
            }}
          />
        );
      })}
    </div>
  );
}