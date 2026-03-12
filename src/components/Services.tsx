import { Printer, Shirt, CreditCard, Flag, Sticker, BookOpen } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const services = [
  { icon: CreditCard, title: "Business Cards", desc: "Premium quality cards that make a lasting first impression." },
  { icon: Flag, title: "Banners & Posters", desc: "Large format printing for events, promotions, and branding." },
  { icon: Shirt, title: "T-Shirt Printing", desc: "Custom apparel with vibrant, durable prints." },
  { icon: Sticker, title: "Stickers & Labels", desc: "Vinyl and paper stickers in any shape or size." },
  { icon: Printer, title: "Flyers & Brochures", desc: "High-impact marketing materials for your business." },
  { icon: BookOpen, title: "Booklets & Menus", desc: "Professionally bound booklets and restaurant menus." },
];

const Services = () => (
  <section id="services" className="py-20 bg-muted">
    <div className="container">
      <h2 className="text-3xl md:text-4xl font-bold font-heading text-center">
        Our <span className="text-primary">Services</span>
      </h2>
      <p className="text-center text-muted-foreground mt-2 max-w-md mx-auto">
        We offer a wide range of professional printing solutions.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {services.map((s) => (
          <Card key={s.title} className="group hover:shadow-lg hover:border-primary/40 transition-all duration-300">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                <s.icon className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="font-heading">{s.title}</CardTitle>
              <CardDescription>{s.desc}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
