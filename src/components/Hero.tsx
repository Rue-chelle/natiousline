import heroImg from "@/assets/hero-print.jpg";
import { Button } from "@/components/ui/button";

const WA_URL = "https://wa.me/263783420554";

const Hero = () => (
  <section id="home" className="relative min-h-[90vh] flex items-center pt-16">
    <div className="absolute inset-0">
      <img src={heroImg} alt="Print shop" className="w-full h-full object-cover" fetchPriority="high" width={1615} height={1024} />
      <div className="absolute inset-0 bg-foreground/70" />
    </div>
    <div className="container relative z-10 py-20">
      <div className="max-w-2xl animate-fade-in-up">
        <h1 className="text-4xl md:text-6xl font-extrabold font-heading text-primary-foreground leading-tight">
          Your Home of <span className="text-primary">Perfection</span>
        </h1>
        <p className="mt-4 text-lg text-primary-foreground/80 max-w-lg">
          Professional printing services for business cards, banners, t-shirts, stickers, and more. Quality you can trust.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a href="#services">
            <Button size="lg">Our Services</Button>
          </a>
          <a href={`${WA_URL}?text=${encodeURIComponent("Hi, I'd like to inquire about your services")}`} target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              Contact Us
            </Button>
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
