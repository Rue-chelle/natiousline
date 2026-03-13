import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";

const WA_BASE = "https://wa.me/263783420554";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi, my name is ${name}${email ? ` (${email})` : ""}. ${message}`;
    window.open(`${WA_BASE}?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <section id="contact" className="py-20 bg-muted">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mt-2">Request a quote or ask us anything.</p>

        <div className="grid md:grid-cols-2 gap-12 mt-12 max-w-4xl mx-auto">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="font-medium font-heading text-sm">Phone</div>
                <a href={WA_BASE} target="_blank" rel="noopener noreferrer" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                  +26378 342 0554
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="font-medium font-heading text-sm">Email</div>
                <a href="mailto:info@natiousline.co.zw" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                  info@natiousline.co.zw
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="font-medium font-heading text-sm">Location</div>
                <div className="text-muted-foreground text-sm">No9 Athol Flats Ground floor Corner 10 ave and fort street</div>
              </div>
            </div>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <Input placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} required />
            <Input placeholder="Email Address" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <Textarea placeholder="Tell us about your project..." rows={4} value={message} onChange={(e) => setMessage(e.target.value)} required />
            <Button type="submit" className="w-full">Send Message</Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
