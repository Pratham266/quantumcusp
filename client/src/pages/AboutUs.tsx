import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { About } from "@/components/About";

export default function AboutUs() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        <About />
      </main>
      <Footer />
    </div>
  );
}
