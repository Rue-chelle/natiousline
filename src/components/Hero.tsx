import heroImg from "@/assets/hero-print.jpg";
import { Button } from "@/components/ui/button";

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
          <Button size="lg">Our Services</Button>
          <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
