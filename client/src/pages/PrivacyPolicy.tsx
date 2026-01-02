import { Helmet } from "react-helmet-async";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Privacy Policy | QuantumCusp</title>
        <meta
          name="description"
          content="Privacy Policy for QuantumCusp. Learn how we collect, use, and protect your data."
        />
        <link rel="canonical" href="https://quantumcusp.co/privacy-policy" />
      </Helmet>

      <Navigation />

      <main className="pt-24 pb-16 px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight mb-8">Privacy Policy</h1>
        <p className="text-muted-foreground mb-8">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">1. Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              Welcome to QuantumCusp ("we," "our," or "us"). We respect your privacy and are committed to protecting your personal data. This Privacy Policy outlines our practices regarding the collection, use, and disclosure of your information when you use our website (quantumcusp.co) and our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">2. Information We Collect</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We may collect the following types of information:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>
                <strong>Personal Data:</strong> Name, email address, phone number, and business details when you contact us or request a quote.
              </li>
              <li>
                <strong>Usage Data:</strong> Information about how you access and use our website, including your IP address, browser type, pages visited, and time spent on pages.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">3. How We Use Your Data</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We use your data for the following purposes:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>To provide and maintain our services.</li>
              <li>To notify you about changes to our services.</li>
              <li>To provide customer support.</li>
              <li>To gather analysis or valuable information so that we can improve our services.</li>
              <li>To monitor the usage of our services.</li>
              <li>To contact you with newsletters, marketing or promotional materials (you can opt-out at any time).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">4. Data Sharing & Disclosure</h2>
            <p className="text-muted-foreground leading-relaxed">
              We do not sell your personal data. We may share your information with trusted third-party service providers who assist us in operating our website and conducting our business, provided that those parties agree to keep this information confidential. We may also disclose your information when required by law to comply with a judicial proceeding, court order, or legal process.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">5. Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              The security of your data is important to us, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">6. Cookies</h2>
            <p className="text-muted-foreground leading-relaxed">
              We use cookies and similar tracking technologies to track the activity on our services and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">7. Changes to This Privacy Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">8. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at:
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
