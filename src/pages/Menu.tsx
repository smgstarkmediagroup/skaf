import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DishCard from "@/components/DishCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import borschImage from "@/assets/borsch.jpg";
import breadImage from "@/assets/bread.jpg";
import cutletsImage from "@/assets/cutlets.jpg";

const Menu = () => {
  const handleVote = (dishName: string) => {
    toast.success(`Спасибо! Ваш голос за "${dishName}" учтён`, {
      description: "Завтра обязательно приготовим это блюдо",
    });
  };

  const soups = [
    {
      image: borschImage,
      title: "Борщ домашний",
      description: "Наваристый борщ со сметаной и свежим хлебом. Готовим по рецепту бабушки",
      price: "45 лей",
      votes: 127,
    },
    {
      image: borschImage,
      title: "Zama молдавская",
      description: "Традиционный молдавский суп с курицей и домашней лапшой",
      price: "50 лей",
      votes: 98,
    },
  ];

  const mainCourses = [
    {
      image: cutletsImage,
      title: "Котлеты от Нины Петровны",
      description: "Сочные котлеты с картофельным пюре. Как у мамы в детстве",
      price: "55 лей",
      votes: 156,
    },
    {
      image: cutletsImage,
      title: "Голубцы с мясом",
      description: "Нежные голубцы в томатном соусе со сметаной",
      price: "60 лей",
      votes: 134,
    },
  ];

  const bakery = [
    {
      image: breadImage,
      title: "Хлеб домашний",
      description: "Свежий хлеб из печи. Пахнет детством",
      price: "15 лей",
      votes: 89,
    },
    {
      image: breadImage,
      title: "Пирожки с картошкой",
      description: "Румяные пирожки с картофельной начинкой",
      price: "12 лей",
      votes: 112,
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4 text-foreground">Наше меню</h1>
            <p className="text-xl text-muted-foreground">
              У нас не подают блюда, у нас ими делятся
            </p>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-4 mb-12">
              <TabsTrigger value="all">Всё</TabsTrigger>
              <TabsTrigger value="soups">Супы</TabsTrigger>
              <TabsTrigger value="main">Горячее</TabsTrigger>
              <TabsTrigger value="bakery">Выпечка</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-16">
              <section>
                <h2 className="text-3xl font-bold mb-8 text-foreground">Супы</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {soups.map((dish, index) => (
                    <DishCard
                      key={index}
                      {...dish}
                      onVote={() => handleVote(dish.title)}
                    />
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-8 text-foreground">Горячие блюда</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {mainCourses.map((dish, index) => (
                    <DishCard
                      key={index}
                      {...dish}
                      onVote={() => handleVote(dish.title)}
                    />
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-8 text-foreground">Выпечка</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {bakery.map((dish, index) => (
                    <DishCard
                      key={index}
                      {...dish}
                      onVote={() => handleVote(dish.title)}
                    />
                  ))}
                </div>
              </section>
            </TabsContent>

            <TabsContent value="soups">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {soups.map((dish, index) => (
                  <DishCard
                    key={index}
                    {...dish}
                    onVote={() => handleVote(dish.title)}
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="main">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {mainCourses.map((dish, index) => (
                  <DishCard
                    key={index}
                    {...dish}
                    onVote={() => handleVote(dish.title)}
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="bakery">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {bakery.map((dish, index) => (
                  <DishCard
                    key={index}
                    {...dish}
                    onVote={() => handleVote(dish.title)}
                  />
                ))}
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-16 p-8 bg-primary text-primary-foreground rounded-2xl text-center">
            <h3 className="text-2xl font-bold mb-4">Что готовим завтра?</h3>
            <p className="text-lg opacity-90">
              Нажмите на сердечко рядом с любимым блюдом — и мы обязательно его приготовим!
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Menu;
