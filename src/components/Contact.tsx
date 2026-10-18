import { useState } from "react";
import emailjs from "@emailjs/browser";

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

import { Mail, Linkedin, MapPin } from "lucide-react";
import { toast } from "sonner";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const name = formData.name.trim();
    const email = formData.email.trim();
    const message = formData.message.trim();

    // Check for empty fields
    if (!name || !email || !message) {
      toast.error("Please fill in all fields");
      return;
    }

    // Validate Gmail address only
    const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/i;

    if (!gmailRegex.test(email)) {
      toast.error("Please enter a valid Gmail address ending with @gmail.com");
      return;
    }

    setLoading(true);

    try {
      await emailjs.send(
        "service_ikdegj5",
        "template_pzahdea",
        {
          name,
          email,
          message,
        },
        "QbThD2_C1E1ZT2Dy1"
      );

      toast.success("Your message has been sent successfully!");

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("EMAIL ERROR:", error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-3 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold">
            Contact Me
          </h2>

          <div className="w-20 h-1 bg-gradient-accent mx-auto rounded-full" />

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Let's work together to create
            something amazing!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="flex flex-col gap-5 md:gap-6">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=gokulshanmugam2056@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card className="p-3 shadow-soft hover:shadow-medium hover:scale-105 hover:-translate-y-1 transition-all duration-300 flex items-center gap-3 cursor-pointer">
                <div className="p-2 bg-accent-teal/10 rounded-lg">
                  <Mail className="w-5 h-5 text-accent-teal" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-sm text-muted-foreground">
                    gokulshanmugam2056@gmail.com
                  </p>
                </div>
              </Card>
            </a>

            <a
              href="https://www.linkedin.com/in/gokul-shanmugam-225414272/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card className="p-3 shadow-soft hover:shadow-medium hover:scale-105 hover:-translate-y-1 transition-all duration-300 flex items-center gap-3 cursor-pointer">
                <div className="p-2 bg-gray-200 dark:bg-gray-700 rounded-lg">
                  <Linkedin className="w-5 h-5 text-black dark:text-white" />
                </div>
                <div>
                  <p className="font-medium">LinkedIn</p>
                  <p className="text-sm text-muted-foreground">
                    gokulshanmugam2056
                  </p>
                </div>
              </Card>
            </a>

            <a
              href="https://www.google.com/maps/place/Gokul+Control+Panels/@11.5159815,77.1693829,19.36z/data=!4m6!3m5!1s0x3ba8d900425043c9:0xb905e01e90bc130!8m2!3d11.5157519!4d77.1692991!16s%2Fg%2F11z3bflzmx?entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card className="p-3 shadow-soft hover:shadow-medium hover:scale-105 hover:-translate-y-1 transition-all duration-300 flex items-center gap-3 cursor-pointer">
                <div className="p-2 bg-accent-coral/10 rounded-lg">
                  <MapPin className="w-5 h-5 text-accent-coral" />
                </div>
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-sm text-muted-foreground">
                    Sathyamangalam, Tamil Nadu
                  </p>
                </div>
              </Card>
            </a>
          </div>

          {/* Contact Form */}
          <Card className="p-4 shadow-soft">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 space-y-1">
                  <label htmlFor="name" className="text-sm font-medium">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Please provide your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="flex-1 space-y-1">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Feel free to reach out..."
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={loading}
                className="w-full gradient-primary text-primary-foreground shadow-glow hover:scale-105 transition-smooth"
              >
                {loading ? "Sending..." : "Send Message 🚀"}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};