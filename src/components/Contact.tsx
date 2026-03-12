import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => (
  <section id="contact" className="py-20 bg-muted">
    <div className="container">
      <h2 className="text-3xl md:text-4xl font-bold font-heading text-center">
        Get In <span className="text-primary">Touch</span>
      </h2>
      <p className="text-center text-muted-foreground mt-2">Request a quote or ask us anything.</p>

      <div className="grid md:grid-cols-2 gap-12 mt-12 max-w-4xl mx-auto">
        <div className="space-y-6">
          {[
            { icon: Phone, label: "Phone", value: "+26378 342 0554" },
            { icon: Mail, label: "Email", value: "info@natiousline.co.zw" },
            { icon: MapPin, label: "Location", value: "No9 Athol Flats Ground floor Corner 10 ave and fort street" },
          ].map((c) => (
            <div key={c.label} className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <c.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="font-medium font-heading text-sm">{c.label}</div>
                <div className="text-muted-foreground text-sm">{c.value}</div>
              </div>
            </div>
          ))}
        </div>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <Input placeholder="Your Name" />
          <Input placeholder="Email Address" type="email" />
          <Textarea placeholder="Tell us about your project..." rows={4} />
          <Button className="w-full">Send Message</Button>
        </form>
      </div>
    </div>
  </section>
);

export default Contact;
