import { useState } from "react";
import { Menu, X, Shield } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import logoImg from "@/assets/logo-batara.png";

const navLinks = [
  { label: "Home", href: "/", isRoute: true },
  { label: "Services & Technology", href: "/services", isRoute: true },
  { label: "Project Portfolio", href: "/mould-design", isRoute: true },
  { label: "About Us", href: "/about", isRoute: true },
  { label: "Technical Gallery", href: "/technical-gallery", isRoute: true },
];

const desktopLinkClass = "text-[13px] font-medium tracking-wider uppercase transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-px after:bg-primary after:origin-left after:transition-transform after:duration-300";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 lg:px-12 h-[68px] bg-card/95 backdrop-blur-xl border-b border-border">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-3 shrink-0">
        <img src={logoImg} alt="Batara Techno Solutions" className="h-12 w-auto" />
      </Link>

      {/* Desktop nav links */}
      <ul className="hidden lg:flex gap-9 list-none">
        {navLinks.map((link) => (
          <li key={link.label}>
            {link.isRoute ? (
              <NavLink
                to={link.href}
                end={link.href === "/"}
                className={({ isActive }) =>
                  `${desktopLinkClass} ${
                    isActive
                      ? "text-foreground after:scale-x-100"
                      : "text-silver after:scale-x-0 hover:text-foreground hover:after:scale-x-100"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ) : (
              <a
                href={link.href}
                className={`${desktopLinkClass} text-silver after:scale-x-0 hover:text-foreground hover:after:scale-x-100`}
              >
                {link.label}
              </a>
            )}
          </li>
        ))}
      </ul>

      {/* Desktop actions */}
      <div className="hidden lg:flex items-center gap-3">
        <a
          href="https://wa.me/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 border border-accent/30 rounded bg-accent/5 text-accent text-[13px] font-medium tracking-wide hover:bg-accent/10 hover:border-accent transition-all"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
          WhatsApp Us
        </a>
        <a
          href="#contact"
          className="flex items-center gap-2 px-5 py-2 bg-primary rounded text-primary-foreground text-[13px] font-semibold tracking-wide hover:bg-accent-orange-2 hover:-translate-y-px hover:shadow-[0_6px_20px_hsl(0_78%_48%/0.35)] transition-all relative overflow-hidden"
        >
          <Shield className="w-3.5 h-3.5" />
          Request Prototype
        </a>
      </div>

      {/* Mobile toggle */}
      <button className="lg:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
        {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="absolute top-[68px] left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border p-6 flex flex-col gap-4 lg:hidden">
          {navLinks.map((link) =>
            link.isRoute ? (
              <NavLink
                key={link.label}
                to={link.href}
                end={link.href === "/"}
                className={({ isActive }) =>
                  `text-sm font-medium uppercase tracking-wider transition-colors ${
                    isActive ? "text-foreground font-semibold" : "text-silver hover:text-foreground"
                  }`
                }
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </NavLink>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-silver uppercase tracking-wider hover:text-foreground transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ),
          )}
          <div className="flex flex-col gap-3 mt-4">
            <a
              href="https://wa.me/"
              className="flex items-center justify-center gap-2 px-4 py-3 border border-accent/30 rounded text-accent text-sm font-medium"
            >
              WhatsApp Us
            </a>
            <a
              href="#contact"
              className="flex items-center justify-center gap-2 px-4 py-3 bg-primary rounded text-primary-foreground text-sm font-semibold"
            >
              <Shield className="w-4 h-4" />
              Request Prototype
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
