import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const products = [
    {
      id: 1,
      name: "Элегантное черное платье",
      price: "45 000",
      originalPrice: "60 000",
      image: "/img/56973f36-0308-4405-afae-c779d13ae4a8.jpg",
      rating: 5,
      category: "Платья"
    },
    {
      id: 2,
      name: "Дизайнерская сумка",
      price: "85 000",
      originalPrice: "120 000",
      image: "/img/88e22dea-29b2-43a8-9228-03e26afed09f.jpg",
      rating: 5,
      category: "Аксессуары"
    },
    {
      id: 3,
      name: "Золотое колье с бриллиантами",
      price: "150 000",
      originalPrice: "200 000",
      image: "/img/15bb1374-8651-42b7-a8e5-4724e3c9e2c2.jpg",
      rating: 5,
      category: "Украшения"
    }
  ];

  const reviews = [
    {
      name: "Анна Петрова",
      rating: 5,
      text: "Невероятное качество! Платье села идеально, ткань премиальная. Рекомендую!",
      date: "15 июня 2024"
    },
    {
      name: "Мария Сидорова",
      rating: 5,
      text: "Обслуживание на высшем уровне. Быстрая доставка, товар в идеальном состоянии.",
      date: "28 мая 2024"
    }
  ];

  return (
    <div className="min-h-screen bg-premium-cream font-open-sans">
      {/* Header */}
      <header className="border-b border-premium-blue/20 bg-premium-cream/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <h1 className="text-2xl font-montserrat font-bold text-premium-darkBlue">SELUN</h1>
              <nav className="hidden md:flex space-x-6">
                <a href="#home" className="text-premium-darkBlue hover:text-premium-blue transition-colors">Главная</a>
                <a href="#catalog" className="text-premium-darkBlue hover:text-premium-blue transition-colors">Каталог</a>
                <a href="#delivery" className="text-premium-darkBlue hover:text-premium-blue transition-colors">Доставка</a>
                <a href="#reviews" className="text-premium-darkBlue hover:text-premium-blue transition-colors">Отзывы</a>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <Icon name="Search" size={20} className="text-premium-darkBlue cursor-pointer hover:text-premium-blue transition-colors" />
              <Icon name="Heart" size={20} className="text-premium-darkBlue cursor-pointer hover:text-premium-blue transition-colors" />
              <Icon name="ShoppingBag" size={20} className="text-premium-darkBlue cursor-pointer hover:text-premium-blue transition-colors" />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 bg-gradient-to-br from-premium-cream to-premium-lightBlue">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-6xl font-montserrat font-light text-premium-darkBlue mb-6 animate-fade-in">
            Премиальная мода
          </h2>
          <p className="text-xl text-premium-darkGray mb-8 max-w-2xl mx-auto animate-fade-in">
            Откройте мир изысканной элегантности с коллекцией SELUN
          </p>
          <Button className="bg-premium-navy text-premium-white hover:bg-premium-darkBlue px-8 py-3 text-lg font-medium transition-all hover:scale-105">
            Смотреть коллекцию
          </Button>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-16">
        <div className="container mx-auto px-6">
          <h3 className="text-4xl font-montserrat font-light text-center text-premium-darkBlue mb-12">
            Избранные товары
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="group cursor-pointer border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="aspect-square overflow-hidden bg-premium-gray">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <Badge variant="outline" className="text-premium-blue border-premium-blue mb-3">
                    {product.category}
                  </Badge>
                  <h4 className="text-xl font-montserrat font-medium text-premium-darkBlue mb-2">
                    {product.name}
                  </h4>
                  <div className="flex items-center mb-3">
                    {[...Array(product.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-premium-blue fill-current" />
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-montserrat font-semibold text-premium-darkBlue">
                        {product.price} ₽
                      </span>
                      <span className="text-sm text-premium-darkGray line-through">
                        {product.originalPrice} ₽
                      </span>
                    </div>
                    <Button variant="outline" className="border-premium-blue text-premium-blue hover:bg-premium-blue hover:text-premium-white">
                      В корзину
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Section */}
      <section id="delivery" className="py-16 bg-premium-lightBlue">
        <div className="container mx-auto px-6">
          <h3 className="text-4xl font-montserrat font-light text-center text-premium-darkBlue mb-12">
            Доставка и условия
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-premium-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Truck" size={32} className="text-premium-blue" />
              </div>
              <h4 className="text-xl font-montserrat font-medium text-premium-darkBlue mb-3">
                Бесплатная доставка
              </h4>
              <p className="text-premium-darkGray">
                При заказе от 50 000 ₽ доставляем бесплатно по всей России
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-premium-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" size={32} className="text-premium-blue" />
              </div>
              <h4 className="text-xl font-montserrat font-medium text-premium-darkBlue mb-3">
                Гарантия качества
              </h4>
              <p className="text-premium-darkGray">
                30 дней на возврат и обмен без вопросов
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-premium-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Clock" size={32} className="text-premium-blue" />
              </div>
              <h4 className="text-xl font-montserrat font-medium text-premium-darkBlue mb-3">
                Быстрая доставка
              </h4>
              <p className="text-premium-darkGray">
                Доставка в течение 1-3 рабочих дней по Москве
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-16">
        <div className="container mx-auto px-6">
          <h3 className="text-4xl font-montserrat font-light text-center text-premium-darkBlue mb-12">
            Отзывы клиентов
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {reviews.map((review, index) => (
              <Card key={index} className="p-6 border-none shadow-lg">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-premium-blue/10 rounded-full flex items-center justify-center mr-4">
                      <Icon name="User" size={20} className="text-premium-blue" />
                    </div>
                    <div>
                      <h4 className="font-montserrat font-medium text-premium-darkBlue">
                        {review.name}
                      </h4>
                      <div className="flex items-center">
                        {[...Array(review.rating)].map((_, i) => (
                          <Icon key={i} name="Star" size={14} className="text-premium-blue fill-current mr-1" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-premium-darkGray mb-3 italic">
                    "{review.text}"
                  </p>
                  <p className="text-sm text-premium-darkGray">
                    {review.date}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-premium-darkBlue text-premium-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h5 className="text-2xl font-montserrat font-bold text-premium-blue mb-4">
                SELUN
              </h5>
              <p className="text-premium-white/70">
                Премиальная мода для утонченных натур
              </p>
            </div>
            <div>
              <h6 className="font-montserrat font-medium mb-4">Каталог</h6>
              <ul className="space-y-2 text-premium-white/70">
                <li><a href="#" className="hover:text-premium-blue transition-colors">Платья</a></li>
                <li><a href="#" className="hover:text-premium-blue transition-colors">Аксессуары</a></li>
                <li><a href="#" className="hover:text-premium-blue transition-colors">Украшения</a></li>
              </ul>
            </div>
            <div>
              <h6 className="font-montserrat font-medium mb-4">Поддержка</h6>
              <ul className="space-y-2 text-premium-white/70">
                <li><a href="#" className="hover:text-premium-blue transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-premium-blue transition-colors">Доставка</a></li>
                <li><a href="#" className="hover:text-premium-blue transition-colors">Возврат</a></li>
              </ul>
            </div>
            <div>
              <h6 className="font-montserrat font-medium mb-4">Следите за нами</h6>
              <div className="flex space-x-4">
                <Icon name="Instagram" size={24} className="text-premium-white/70 hover:text-premium-blue cursor-pointer transition-colors" />
                <Icon name="Facebook" size={24} className="text-premium-white/70 hover:text-premium-blue cursor-pointer transition-colors" />
                <Icon name="Twitter" size={24} className="text-premium-white/70 hover:text-premium-blue cursor-pointer transition-colors" />
              </div>
            </div>
          </div>
          <div className="border-t border-premium-white/20 mt-8 pt-8 text-center text-premium-white/70">
            <p>&copy; 2024 SELUN. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;