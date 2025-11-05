import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, ChefHat } from "lucide-react";
import borschImage from "@/assets/borsch.jpg";
import cutletsImage from "@/assets/cutlets.jpg";
import breadImage from "@/assets/bread.jpg";

const Blog = () => {
  const recipes = [
    {
      title: "Борщ как у бабушки",
      image: borschImage,
      time: "2 часа",
      difficulty: "Средне",
      description: "Настоящий домашний борщ — это искусство. Делимся секретами Нины Петровны, которые передавались из поколения в поколение.",
      ingredients: [
        "Свекла — 2 шт.",
        "Капуста — 300г",
        "Картофель — 3 шт.",
        "Мясо (говядина) — 500г",
        "Лук, морковь",
        "Томатная паста",
        "Чеснок, зелень",
      ],
    },
    {
      title: "Котлеты от Нины Петровны",
      image: cutletsImage,
      time: "1 час",
      difficulty: "Легко",
      description: "Сочные, нежные котлеты — любимое блюдо наших гостей. Секрет в том, чтобы готовить с любовью.",
      ingredients: [
        "Фарш мясной — 500г",
        "Лук — 1 шт.",
        "Яйцо — 1 шт.",
        "Хлеб замоченный",
        "Соль, перец",
        "Растительное масло",
      ],
    },
    {
      title: "Домашний хлеб из печи",
      image: breadImage,
      time: "3 часа",
      difficulty: "Сложно",
      description: "Аромат свежего хлеба — это то, что делает дом домом. Научим печь настоящий хлеб с хрустящей корочкой.",
      ingredients: [
        "Мука — 500г",
        "Вода тёплая — 300мл",
        "Дрожжи — 10г",
        "Соль — 10г",
        "Сахар — 1 ч.л.",
        "Растительное масло",
      ],
    },
  ];

  const tips = [
    "Всегда используйте свежие продукты — это основа вкуса",
    "Не спешите — хорошей еде нужно время",
    "Добавьте щепотку любви в каждое блюдо",
    "Пробуйте в процессе — доверяйте своему вкусу",
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4 text-foreground">Рецепты с душой</h1>
            <p className="text-xl text-muted-foreground">
              Попробуй у нас — приготовь дома
            </p>
          </div>

          {/* Tips Section */}
          <div className="bg-secondary/50 rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-2">
              <ChefHat className="h-6 w-6 text-primary" />
              Советы от Нины Петровны
            </h2>
            <ul className="space-y-3">
              {tips.map((tip, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-muted-foreground">{tip}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Recipes */}
          <div className="space-y-12">
            {recipes.map((recipe, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="aspect-square md:aspect-auto">
                    <img
                      src={recipe.image}
                      alt={recipe.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="p-8 flex flex-col justify-between">
                    <div>
                      <div className="flex gap-2 mb-4">
                        <Badge variant="secondary">
                          <Clock className="h-3 w-3 mr-1" />
                          {recipe.time}
                        </Badge>
                        <Badge variant="outline">{recipe.difficulty}</Badge>
                      </div>
                      
                      <h3 className="text-3xl font-bold mb-4 text-foreground">
                        {recipe.title}
                      </h3>
                      
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {recipe.description}
                      </p>
                      
                      <div>
                        <h4 className="font-bold mb-3 text-foreground">Ингредиенты:</h4>
                        <ul className="space-y-2">
                          {recipe.ingredients.map((ingredient, i) => (
                            <li key={i} className="flex items-start gap-2 text-muted-foreground">
                              <span className="text-primary">•</span>
                              {ingredient}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <Button className="w-full md:w-auto">
                        Полный рецепт
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center bg-primary text-primary-foreground rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-4">
              Хотите научиться готовить вживую?
            </h2>
            <p className="text-xl mb-6 opacity-90">
              Приходите на наши мастер-классы! Готовим вместе, делимся секретами и пробуем результат.
            </p>
            <Button size="lg" variant="secondary">
              Записаться на мастер-класс
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
