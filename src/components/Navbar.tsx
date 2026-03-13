import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const WA_QUOTE_URL = "https://wa.me/263783420554?text=" + encodeURIComponent("Hi, I'd like to get a quote");

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = ["Home", "Services", "About", "Contact"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b">
      <div className="container flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2">
          <img src={logo} alt="Natiousline Investments" className="h-10 w-10 object-contain" width={40} height={40} decoding="async" />
          <span className="font-heading font-bold text-lg text-foreground">Natiousline</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              {l}
            </a>
          ))}
          <a href={WA_QUOTE_URL} target="_blank" rel="noopener noreferrer">
            <Button size="sm">Get a Quote</Button>
          </a>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-b pb-4">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)} className="block px-6 py-2 text-sm font-medium text-muted-foreground hover:text-primary">
              {l}
            </a>
          ))}
          <div className="px-6 pt-2">
            <a href={WA_QUOTE_URL} target="_blank" rel="noopener noreferrer">
              <Button size="sm" className="w-full">Get a Quote</Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
