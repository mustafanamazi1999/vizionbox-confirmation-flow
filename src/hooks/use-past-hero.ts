import { useEffect, useState } from "react";

export function usePastHero() {
  const [past, setPast] = useState(false);
  useEffect(() => {
    const el = document.getElementById("hero-sentinel");
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => setPast(!e.isIntersecting),
      { threshold: 0 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return past;
}
