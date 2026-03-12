import { useState } from "react";
import { Printer, Shirt, CreditCard, Flag, Sticker, BookOpen } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";

import cards1 from "@/assets/services/cards-1.jpg";
import cards2 from "@/assets/services/cards-2.jpg";
import cards3 from "@/assets/services/cards-3.jpg";
import cards4 from "@/assets/services/cards-4.jpg";
import banners1 from "@/assets/services/banners-1.jpg";
import banners2 from "@/assets/services/banners-2.jpg";
import banners3 from "@/assets/services/banners-3.jpg";
import banners4 from "@/assets/services/banners-4.jpg";
import tshirts1 from "@/assets/services/tshirts-1.jpg";
import tshirts2 from "@/assets/services/tshirts-2.jpg";
import tshirts3 from "@/assets/services/tshirts-3.jpg";
import tshirts4 from "@/assets/services/tshirts-4.jpg";
import stickers1 from "@/assets/services/stickers-1.jpg";
import stickers2 from "@/assets/services/stickers-2.jpg";
import stickers3 from "@/assets/services/stickers-3.jpg";
import stickers4 from "@/assets/services/stickers-4.jpg";
import flyers1 from "@/assets/services/flyers-1.jpg";
import flyers2 from "@/assets/services/flyers-2.jpg";
import flyers3 from "@/assets/services/flyers-3.jpg";
import flyers4 from "@/assets/services/flyers-4.jpg";
import booklets1 from "@/assets/services/booklets-1.jpg";
import booklets2 from "@/assets/services/booklets-2.jpg";
import booklets3 from "@/assets/services/booklets-3.jpg";
import booklets4 from "@/assets/services/booklets-4.jpg";

const services = [
  { icon: CreditCard, title: "Business Cards", desc: "Premium quality cards that make a lasting first impression.", images: [cards1, cards2, cards3, cards4] },
  { icon: Flag, title: "Banners & Posters", desc: "Large format printing for events, promotions, and branding.", images: [banners1, banners2, banners3, banners4] },
  { icon: Shirt, title: "T-Shirt Printing", desc: "Custom apparel with vibrant, durable prints.", images: [tshirts1, tshirts2, tshirts3, tshirts4] },
  { icon: Sticker, title: "Stickers & Labels", desc: "Vinyl and paper stickers in any shape or size.", images: [stickers1, stickers2, stickers3, stickers4] },
  { icon: Printer, title: "Flyers & Brochures", desc: "High-impact marketing materials for your business.", images: [flyers1, flyers2, flyers3, flyers4] },
  { icon: BookOpen, title: "Booklets & Menus", desc: "Professionally bound booklets and restaurant menus.", images: [booklets1, booklets2, booklets3, booklets4] },
];

const Services = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
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
              <CardContent>
                <div className="grid grid-cols-2 gap-2">
                  {s.images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedImage(img)}
                      className="overflow-hidden rounded-md aspect-square cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <img
                        src={img}
                        alt={`${s.title} sample ${i + 1}`}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                        loading="lazy"
                      />
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-3xl p-2 bg-background">
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Zoomed service sample"
              className="w-full h-auto rounded-md"
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Services;
