import { useState } from "react";
import emailjs from "@emailjs/browser";

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

import { Mail, MapPin } from "lucide-react";
import { toast } from "sonner";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // Handle Input Change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle Form Submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields");
      return;
    }

    setLoading(true);

    try {
            await emailjs.send(
        "service_ikdegj5",
        "template_pzahdea",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "QbThD2_C1E1ZT2Dy1"
      );

      toast.success("Message sent successfully!");

      // Reset form
      setFormData({
        name: "",
        email: "",
        message: "",
      });

    } catch (error) {
      console.error("EMAIL ERROR:", error);

      toast.error("Error: Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-12 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center space-y-3 mb-12">

          <h2 className="text-4xl md:text-5xl font-bold">
            Contact Me
          </h2>

          <div className="w-20 h-1 bg-gradient-accent mx-auto rounded-full"></div>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Let's work together to create something amazing!
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Contact Info */}
          <div className="flex flex-col gap-5 md:gap-6">

            {/* Email */}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=gokulshanmugam2056@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card className="p-3 shadow-soft hover:shadow-medium transition-smooth flex items-center gap-3 cursor-pointer">

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

            {/* LinkedIn */}
            <Card className="p-3 shadow-soft hover:shadow-medium transition-smooth flex items-center gap-3">

              <div className="p-2 bg-accent-blue/10 rounded-lg">

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-accent-blue"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 11.27h-3v-5.5c0-1.32-1.08-2.4-2.4-2.4s-2.4 1.08-2.4 2.4v5.5h-3v-10h3v1.44c.79-1.17 2.1-1.94 3.6-1.94 2.48 0 4.5 2.02 4.5 4.5v6z" />
                </svg>

              </div>

              <div>

                <p className="font-medium">
                  LinkedIn
                </p>

                <a
                  href="https://www.linkedin.com/in/gokul-shanmugam-225414272/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:underline"
                >
                  gokulshanmugam2056
                </a>

              </div>

            </Card>

            {/* Location */}
            <Card className="p-3 shadow-soft hover:shadow-medium transition-smooth flex items-center gap-3">

              <div className="p-2 bg-accent-coral/10 rounded-lg">
                <MapPin className="w-5 h-5 text-accent-coral" />
              </div>

              <div>

                <p className="font-medium">
                  Location
                </p>

                <p className="text-sm text-muted-foreground">
                  Tamil Nadu, India
                </p>

              </div>

            </Card>

          </div>

          {/* Contact Form */}
          <Card className="p-4 shadow-soft">

            <form
              onSubmit={handleSubmit}
              className="space-y-4"
            >

              {/* Name + Email */}
              <div className="flex flex-col md:flex-row gap-4">

                {/* Name */}
                <div className="flex-1 space-y-1">

                  <label
                    htmlFor="name"
                    className="text-sm font-medium"
                  >
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

                {/* Email */}
                <div className="flex-1 space-y-1">

                  <label
                    htmlFor="email"
                    className="text-sm font-medium"
                  >
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

              {/* Message */}
              <div className="space-y-1">

                <label
                  htmlFor="message"
                  className="text-sm font-medium"
                >
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

              {/* Submit Button */}
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