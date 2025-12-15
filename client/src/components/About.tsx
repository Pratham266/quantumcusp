import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-card">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 block">
            About Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-8">
            Building the Future, <span className="text-primary">Together</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6 text-lg leading-relaxed text-muted-foreground"
        >
          <p data-testid="text-about-1">
            QuantumCusp is a technology company focused on helping businesses operate
            smarter, grow faster, and prepare for the future. We combine strategic
            thinking with technical excellence to deliver solutions that create real,
            measurable value.
          </p>
          <p data-testid="text-about-2">
            Our team brings together expertise across digital product development,
            cloud architecture, artificial intelligence, and business automation.
            We believe in technology that serves business goals — not technology
            for its own sake.
          </p>
          <p data-testid="text-about-3">
            Founded on the principle that every business deserves access to
            enterprise-grade technology solutions, we partner with organizations
            of all sizes to build the digital capabilities they need to thrive
            in an increasingly connected world.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: "50+", label: "Projects Delivered" },
            { value: "98%", label: "Client Satisfaction" },
            { value: "24/7", label: "Support Available" },
            { value: "5+", label: "Years Experience" },
          ].map((stat, index) => (
            <div key={stat.label} data-testid={`stat-${index}`}>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
