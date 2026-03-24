import { Link } from "react-router-dom";
import logoImg from "@/assets/logo-batara.png";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "/about", isRoute: true },
  { label: "Services", href: "/services", isRoute: true },
  { label: "Technical Gallery", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => {
  return (
    <footer className="relative z-[1] bg-card border-t border-border py-12 px-8 md:px-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src={logoImg} alt="Batara Techno Solutions" className="h-8 w-auto" />
        </div>
        <div className="flex gap-8">
          {footerLinks.map((link) =>
            link.isRoute ? (
              <Link key={link.label} to={link.href} className="text-silver text-xs uppercase tracking-wider hover:text-foreground transition-colors">
                {link.label}
              </Link>
            ) : (
              <a key={link.label} href={link.href} className="text-silver text-xs uppercase tracking-wider hover:text-foreground transition-colors">
                {link.label}
              </a>
            )
          )}
        </div>
        <p className="font-mono text-[10px] text-silver tracking-wider">
          © 2025 Batara Techno Solutions. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
