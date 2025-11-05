import { Link } from "react-router-dom";
import { Coffee, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-4">
              <div className="relative">
                <Coffee className="h-8 w-8 text-primary" strokeWidth={2.5} />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full" />
              </div>
              <span className="text-2xl font-bold text-primary">ШкаF Кафе</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Вкусно, тепло, как дома. Место, где еда объединяет людей.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Навигация</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/menu" className="text-muted-foreground hover:text-primary transition-colors">
                  Меню
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  О нас
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-muted-foreground hover:text-primary transition-colors">
                  Новости
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                  Рецепты
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Контакты</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <a href="tel:+37360000000" className="hover:text-primary transition-colors">
                  +373 60 000 000
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <a href="mailto:info@shkafcafe.md" className="hover:text-primary transition-colors">
                  info@shkafcafe.md
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>ул. Примерная 123, Кишинёв</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Режим работы</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Пн-Пт: 09:00 - 20:00</li>
              <li>Сб: 10:00 - 20:00</li>
              <li>Вс: 10:00 - 18:00</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Шкаф Кафе. Все права защищены.</p>
          <p className="mt-2">#шкафкафе #домашняяеда #вкуснодомашнеетепло</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
