import { useState } from "react";
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields");
      return;
    }

    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("message", formData.message);
    data.append("_captcha", "false"); 
    data.append("_template", "table");

    try {
      await fetch("https://formsubmit.co/gokulshanmugam2056@gmail.com", {
        method: "POST",
        body: data,
      });

      toast.success("✅ Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      toast.error("❌ Failed to send message. Try again later.");
    }
  };

  return (
    <section id="contact" className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-3 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold">Contact Me</h2>
          <div className="w-20 h-1 bg-gradient-accent mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Let's work together to create something amazing!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info with vertical spacing */}
          <div className="flex flex-col gap-5 md:gap-6"> {/* Added vertical gap */}
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
                  <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 11.27h-3v-5.5c0-1.32-1.08-2.4-2.4-2.4s-2.4 1.08-2.4 2.4v5.5h-3v-10h3v1.44c.79-1.17 2.1-1.94 3.6-1.94 2.48 0 4.5 2.02 4.5 4.5v6z"/>
                </svg>
              </div>
              <div>
                <p className="font-medium">LinkedIn</p>
                <p className="text-sm text-muted-foreground">
                  <a
                    href="https://www.linkedin.com/in/gokul-shanmugam-225414272/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    gokulshanmugam2056
                  </a>
                </p>
              </div>
            </Card>

            {/* Location */}
            <Card className="p-3 shadow-soft hover:shadow-medium transition-smooth flex items-center gap-3">
              <div className="p-2 bg-accent-coral/10 rounded-lg">
                <MapPin className="w-5 h-5 text-accent-coral" />
              </div>
              <div>
                <p className="font-medium">Location</p>
                <p className="text-sm text-muted-foreground">Tamil Nadu, India</p>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="p-4 shadow-soft">
            <form onSubmit={handleSubmit} className="space-y-2">
              <div className="flex flex-col md:flex-row gap-2">
                <div className="flex-1 space-y-1">
                  <label htmlFor="name" className="text-sm font-medium">Your Name</label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="please provide your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="border-border/50 focus:border-primary transition-smooth"
                  />
                </div>
                <div className="flex-1 space-y-1">
                  <label htmlFor="email" className="text-sm font-medium">Email Address</label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="border-border/50 focus:border-primary transition-smooth"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="feel free to reach out me..."
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="border-border/50 focus:border-primary transition-smooth resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full gradient-primary text-primary-foreground shadow-glow hover:scale-105 transition-smooth"
              >
                Send Message 🚀
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};
