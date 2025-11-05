import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Clock, Users } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DishCard from "@/components/DishCard";
import heroImage from "@/assets/hero-cafe.jpg";
import borschImage from "@/assets/borsch.jpg";
import breadImage from "@/assets/bread.jpg";
import cutletsImage from "@/assets/cutlets.jpg";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImage})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background/60" />
          </div>
          
          <div className="relative z-10 container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
              ШкаF Кафе
            </h1>
            <p className="text-xl md:text-3xl mb-4 text-foreground/90">
              Вкусно, тепло, как дома
            </p>
            <p className="text-lg md:text-xl mb-8 text-muted-foreground max-w-2xl mx-auto">
              Место, где еда объединяет людей. Домашний уют прямо за вашим столом.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8 shadow-[var(--shadow-warm)]">
                <Link to="/menu">
                  Посмотреть меню <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary" className="text-lg px-8">
                <Link to="/contact">Записаться на мастер-класс</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">С душой</h3>
                <p className="text-muted-foreground">
                  Наш секретный ингредиент — душа. Готовим с любовью и теплом.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                  <Clock className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">Свежее каждый день</h3>
                <p className="text-muted-foreground">
                  Готовим только из свежих продуктов. Никаких полуфабрикатов.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-highlight/10 flex items-center justify-center">
                  <Users className="h-8 w-8 text-highlight" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">Как дома</h3>
                <p className="text-muted-foreground">
                  Уютная атмосфера, где можно быть собой и познакомиться с друзьями.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Today's Menu */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-4 text-foreground">
              Что сегодня в меню
            </h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              Загляни в Шкаф — там пахнет обедом
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <DishCard
                image={borschImage}
                title="Борщ домашний"
                description="Наваристый борщ со сметаной и свежим хлебом"
                price="45 лей"
                votes={127}
              />
              
              <DishCard
                image={breadImage}
                title="Свежая выпечка"
                description="Хлеб и пирожки из печи, как у бабушки"
                price="15 лей"
                votes={89}
              />
              
              <DishCard
                image={cutletsImage}
                title="Котлеты от Нины"
                description="Сочные котлеты с картофельным пюре"
                price="55 лей"
                votes={156}
              />
            </div>

            <div className="text-center mt-12">
              <Button asChild size="lg" variant="outline">
                <Link to="/menu">Посмотреть всё меню</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4">
              Что готовим завтра — борщ или zama?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Голосуй и приходи пробовать!
            </p>
            <Button asChild size="lg" variant="secondary" className="text-lg px-8">
              <Link to="/menu">
                <Heart className="mr-2" />
                Проголосовать за блюдо дня
              </Link>
            </Button>
          </div>
        </section>

        {/* About Preview */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6 text-foreground">
                Мы не ресторан
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Мы просто любим готовить вкусно, с теплом и по-честному. 
                Каждое блюдо — это частичка дома, которую мы готовы разделить с вами. 
                Сначала поешь, потом поговорим.
              </p>
              <Button asChild size="lg" variant="outline">
                <Link to="/about">Узнать нашу историю</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
