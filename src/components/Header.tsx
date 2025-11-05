import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Coffee, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Главная" },
    { path: "/menu", label: "Меню" },
    { path: "/about", label: "О нас" },
    { path: "/news", label: "Новости" },
    { path: "/blog", label: "Рецепты" },
    { path: "/contact", label: "Контакты" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/90">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 transition-transform hover:scale-105">
            <div className="relative">
              <Coffee className="h-8 w-8 text-primary" strokeWidth={2.5} />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full" />
            </div>
            <span className="text-2xl font-bold text-primary">ШкаF Кафе</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === item.path
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild variant="default" className="shadow-[var(--shadow-soft)]">
              <a href="tel:+37360000000">Позвонить</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-2 px-4 rounded-lg transition-colors ${
                  location.pathname === item.path
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-secondary"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="w-full mt-2">
              <a href="tel:+37360000000">Позвонить</a>
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
