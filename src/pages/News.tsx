import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, ChefHat } from "lucide-react";

const News = () => {
  const news = [
    {
      title: "Мастер-класс по приготовлению борща",
      date: "15 ноября 2024",
      category: "Мастер-класс",
      description: "Нина Петровна научит готовить настоящий домашний борщ. Приходите с семьёй — будет тепло и вкусно!",
      icon: <ChefHat className="h-6 w-6" />,
    },
    {
      title: "Вечер знакомств за ужином",
      date: "22 ноября 2024",
      category: "Событие",
      description: "Приглашаем на уютный вечер, где можно познакомиться с новыми людьми за вкусной едой и хорошими разговорами.",
      icon: <Users className="h-6 w-6" />,
    },
    {
      title: "Новое блюдо в меню: Мамалыга",
      date: "10 ноября 2024",
      category: "Меню",
      description: "По многочисленным просьбам добавили в меню традиционную молдавскую мамалыгу. Готовим по старому рецепту!",
      icon: <ChefHat className="h-6 w-6" />,
    },
  ];

  const stories = [
    {
      title: "Как прошёл вечер борща",
      date: "8 ноября 2024",
      description: "В прошлую субботу собрались друзья и гости Шкафа на вечер борща. Было тепло, вкусно и очень по-домашнему. Спасибо всем, кто пришёл!",
    },
    {
      title: "Кофе и разговоры по воскресеньям",
      date: "5 ноября 2024",
      description: "Каждое воскресенье у нас особенная атмосфера — приходят постоянные гости, завариваем свежий кофе и просто болтаем о жизни. Присоединяйтесь!",
    },
  ];

  const people = [
    {
      name: "Владимир",
      quote: "Хожу сюда каждый обед уже два года. Это как вторая столовая — только вкуснее и теплее.",
    },
    {
      name: "Елена",
      quote: "Привела сюда маму — она сказала, что котлеты как в её детстве. Высшая похвала!",
    },
    {
      name: "Нина Петровна (повар)",
      quote: "Готовлю для людей так, как готовила бы для своих детей. Главное — с душой.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4 text-foreground">Новости и жизнь кафе</h1>
            <p className="text-xl text-muted-foreground">
              Что происходит в Шкафе — события, люди, истории
            </p>
          </div>

          {/* Upcoming Events */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-foreground">Скоро у нас</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {news.map((item, index) => (
                <Card key={index} className="hover:shadow-[var(--shadow-warm)] transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        {item.icon}
                      </div>
                      <Badge variant="secondary">{item.category}</Badge>
                    </div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      {item.date}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Stories */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-foreground">Фото-истории</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {stories.map((story, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20" />
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Calendar className="h-4 w-4" />
                      {story.date}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-foreground">{story.title}</h3>
                    <p className="text-muted-foreground">{story.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* People of Shkaf */}
          <section>
            <h2 className="text-3xl font-bold mb-8 text-foreground">Люди Шкафа</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Короткие рассказы о наших постоянных гостях и сотрудниках
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {people.map((person, index) => (
                <Card key={index} className="bg-secondary/50">
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-3xl font-bold text-primary mb-3">
                        {person.name[0]}
                      </div>
                      <h3 className="text-xl font-bold text-foreground">{person.name}</h3>
                    </div>
                    <p className="text-muted-foreground italic">"{person.quote}"</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default News;
