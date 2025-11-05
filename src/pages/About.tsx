import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, ChefHat } from "lucide-react";
import teamImage from "@/assets/team.jpg";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="py-12">
        <div className="container mx-auto px-4">
          {/* Hero */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4 text-foreground">О нас</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Мы не ресторан. Мы — семейное кафе, где готовят с душой, по-домашнему и по-честному. 
              Здесь важно не просто вкусно накормить, а подарить ощущение тепла, уюта и заботы, как в семье.
            </p>
          </div>

          {/* Team Photo */}
          <div className="mb-16 max-w-4xl mx-auto">
            <img
              src={teamImage}
              alt="Команда Шкаф Кафе"
              className="w-full rounded-2xl shadow-[var(--shadow-warm)]"
            />
          </div>

          {/* Story */}
          <div className="max-w-3xl mx-auto mb-16 space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              <strong className="text-foreground">Шкаф Кафе</strong> появился из простого желания — готовить 
              для людей так, как готовят дома. Без лишних понтов, без модных блюд, просто вкусно и с душой.
            </p>
            
            <p>
              Мы начали с борща и котлет, которые готовила Нина Петровна — наш шеф-повар и просто 
              замечательный человек. Люди приходили на обед и оставались — не только поесть, 
              но и поговорить, пошутить, поделиться новостями.
            </p>
            
            <p>
              Сегодня <strong className="text-foreground">Шкаф Кафе</strong> — это место, 
              где пахнет домашней едой, где тебя помнят и ждут. 
              Здесь не нужно надевать маску — можно просто быть собой.
            </p>

            <p className="text-2xl font-semibold text-foreground text-center italic mt-8">
              "Сначала поешь, потом поговорим"
            </p>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center">
              <CardContent className="pt-12 pb-8">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-foreground">С душой</h3>
                <p className="text-muted-foreground">
                  Каждое блюдо готовим так, как готовили бы для своей семьи. 
                  Наш секретный ингредиент — душа.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-12 pb-8">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent/10 flex items-center justify-center">
                  <ChefHat className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-foreground">Честно</h3>
                <p className="text-muted-foreground">
                  Только свежие продукты, никаких полуфабрикатов. 
                  Готовим каждый день — для вас.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-12 pb-8">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-highlight/10 flex items-center justify-center">
                  <Users className="h-8 w-8 text-highlight" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-foreground">Вместе</h3>
                <p className="text-muted-foreground">
                  Мы верим, что еда объединяет людей. 
                  Приходите — познакомимся и поделимся теплом.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Team */}
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-foreground">Наша команда</h2>
            <p className="text-lg text-muted-foreground mb-8">
              В нашей команде работают люди, которые искренне любят то, что делают. 
              Для нас готовить — это не просто работа, это способ делиться теплом и радостью.
            </p>
            <div className="space-y-4 text-left">
              <div className="p-6 bg-card rounded-lg border border-border">
                <h4 className="text-xl font-bold mb-2 text-foreground">Нина Петровна — шеф-повар</h4>
                <p className="text-muted-foreground">
                  "Главное — готовить с любовью. Тогда и борщ получится вкуснее"
                </p>
              </div>
              <div className="p-6 bg-card rounded-lg border border-border">
                <h4 className="text-xl font-bold mb-2 text-foreground">Андрей — помощник повара</h4>
                <p className="text-muted-foreground">
                  "Каждое утро начинаю с теста для хлеба. Люди должны чувствовать запах свежей выпечки"
                </p>
              </div>
              <div className="p-6 bg-card rounded-lg border border-border">
                <h4 className="text-xl font-bold mb-2 text-foreground">Мария — официант</h4>
                <p className="text-muted-foreground">
                  "Я знаю любимые блюда наших постоянных гостей. Они для нас — семья"
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
