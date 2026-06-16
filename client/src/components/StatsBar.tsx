import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const stats = [
  { value: "10+", label: "Products Shipped" },
  { value: "6", label: "Engineering Disciplines" },
  { value: "5★", label: "Client Satisfaction" },
  { value: "100%", label: "On-time Delivery" },
];

export function StatsBar() {
  const { elementRef, isVisible } = useIntersectionObserver();

  return (
    <section className="py-10 bg-primary/5 border-y border-primary/10">
      <div
        ref={elementRef}
        className={`max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        {stats.map((stat, i) => (
          <div key={stat.label} className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-primary mb-1">
              {stat.value}
            </div>
            <div className="text-sm text-muted-foreground font-medium">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
