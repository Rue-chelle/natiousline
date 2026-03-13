import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="py-8 border-t">
    <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2">
        <img src={logo} alt="Natiousline" className="h-8 w-8 object-contain" width={32} height={32} loading="lazy" decoding="async" />
        <span className="font-heading font-semibold text-sm">Natiousline Investments</span>
      </div>
      <p className="text-xs text-muted-foreground">
        © {new Date().getFullYear()} Natiousline Investments. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
