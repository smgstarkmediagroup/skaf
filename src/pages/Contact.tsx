import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Спасибо за сообщение!", {
      description: "Мы свяжемся с вами в ближайшее время",
    });
    setFormData({ name: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4 text-foreground">Контакты</h1>
            <p className="text-xl text-muted-foreground">
              Приходите в гости — мы всегда рады!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2 text-foreground">Адрес</h3>
                      <p className="text-muted-foreground">
                        ул. Примерная 123, Кишинёв<br />
                        Молдова, MD-2001
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">
                        Остановка "Центральная", 5 минут от метро
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2 text-foreground">Телефон</h3>
                      <a href="tel:+37360000000" className="text-muted-foreground hover:text-primary">
                        +373 60 000 000
                      </a>
                      <p className="text-sm text-muted-foreground mt-2">
                        Звоните с 9:00 до 20:00
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-highlight/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-highlight" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2 text-foreground">Email</h3>
                      <a href="mailto:info@shkafcafe.md" className="text-muted-foreground hover:text-primary">
                        info@shkafcafe.md
                      </a>
                      <p className="text-sm text-muted-foreground mt-2">
                        Ответим в течение дня
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2 text-foreground">Режим работы</h3>
                      <div className="text-muted-foreground space-y-1">
                        <p>Понедельник - Пятница: 09:00 - 20:00</p>
                        <p>Суббота: 10:00 - 20:00</p>
                        <p>Воскресенье: 10:00 - 18:00</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div>
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6 text-foreground">
                    Хочу прийти на обед
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">
                        Ваше имя
                      </label>
                      <Input
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Как к вам обращаться?"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">
                        Телефон
                      </label>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+373..."
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">
                        Сообщение
                      </label>
                      <Textarea
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Хотите что-то спросить или забронировать столик?"
                        rows={4}
                      />
                    </div>

                    <Button type="submit" className="w-full" size="lg">
                      Отправить
                    </Button>

                    <p className="text-sm text-muted-foreground text-center">
                      Или просто приходите — мы всегда рады гостям!
                    </p>
                  </form>
                </CardContent>
              </Card>

              <div className="mt-6 p-6 bg-secondary/50 rounded-lg">
                <h3 className="font-bold mb-2 text-foreground">Как нас найти?</h3>
                <p className="text-sm text-muted-foreground">
                  Ищите вывеску "Шкаф Кафе" на углу улицы. 
                  У входа всегда пахнет свежей выпечкой — не пройдёте мимо!
                </p>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="mt-12 max-w-6xl mx-auto">
            <Card>
              <CardContent className="p-0">
                <div className="w-full h-96 bg-muted rounded-lg flex items-center justify-center">
                  <p className="text-muted-foreground">Карта Кишинёва</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
