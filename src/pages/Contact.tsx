import { Navigation } from "@/components/Navigation";
import { Contact as ContactSection } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-16">
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};

export default Contact;