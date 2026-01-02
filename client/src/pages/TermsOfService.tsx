import { Helmet } from "react-helmet-async";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Terms of Service | QuantumCusp</title>
        <meta
          name="description"
          content="Terms of Service for QuantumCusp. Understand your rights and obligations when using our services."
        />
        <link rel="canonical" href="https://quantumcusp.co/terms-of-service" />
      </Helmet>

      <Navigation />

      <main className="pt-24 pb-16 px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight mb-8">Terms of Service</h1>
        <p className="text-muted-foreground mb-8">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing and using the website and services of QuantumCusp ("we," "us," or "our"), you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">2. Services Description</h2>
            <p className="text-muted-foreground leading-relaxed">
              QuantumCusp provides custom software development, AI solutions, consulting, and related IT services. We reserve the right to modify, suspend, or discontinue any aspect of our services at any time without prior notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">3. User Obligations</h2>
            <p className="text-muted-foreground leading-relaxed">
              You agree to use our website and services only for lawful purposes. You must not use our website to transmit or post any material which is defamatory, offensive, or of an obscene or menacing character, or which may cause annoyance, inconvenience, or needless anxiety.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">4. Intellectual Property</h2>
            <p className="text-muted-foreground leading-relaxed">
              All content included on this site, such as text, graphics, logos, button icons, images, audio clips, digital downloads, data compilations, and software, is the property of QuantumCusp or its content suppliers and protected by international copyright laws.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-2">
              For custom software development projects, intellectual property rights will be governed by the specific Master Services Agreement (MSA) or contract signed between QuantumCusp and the Client.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">5. Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed">
              In no event shall QuantumCusp, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">6. Termination</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may terminate or suspend your access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">7. Governing Law</h2>
            <p className="text-muted-foreground leading-relaxed">
              These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">8. Changes to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">9. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about these Terms, please contact us at:
            </p>
            <p className="text-primary font-medium mt-2">
              support@quantumcusp.co
            </p>
          </section>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
