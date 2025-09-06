import { useEffect, useState } from "react";

function useCountTo(to: number, duration = 1500) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    let start = 0;
    const steps = Math.min(60, Math.round(duration / 16));
    const increment = to / steps;
    const id = setInterval(() => {
      start += increment;
      if (start >= to) {
        setValue(to);
        clearInterval(id);
      } else {
        setValue(Math.round(start));
      }
    }, duration / steps);
    return () => clearInterval(id);
  }, [to, duration]);
  return value;
}

function StatItem({label, value}:{label:string; value:number}){
  const v = useCountTo(value);
  return (
    <div className="bg-white rounded-lg p-6 text-center">
      <div className="text-2xl font-extrabold">{v >= 100000 ? '₹' + (v/100000).toFixed(2) + 'L' : v}</div>
      <div className="text-sm text-foreground/70 mt-1">{label}</div>
    </div>
  );
}

export default function StatsCounter({ stats }:{stats:{label:string;value:number}[]}){
  return (
    <div className="grid grid-cols-3 gap-4">
      {stats.map((s, i) => (
        <StatItem key={i} label={s.label} value={s.value} />
      ))}
    </div>
  );
}
