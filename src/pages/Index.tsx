import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Briefcase" className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">STAFFMAN</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">Преимущества</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-blue-600 transition-colors">Как работает</a>
            <a href="#pricing" className="text-gray-600 hover:text-blue-600 transition-colors">Тарифы</a>
            <a href="#reviews" className="text-gray-600 hover:text-blue-600 transition-colors">Отзывы</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Контакты</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-white/20 text-white border-white/30">🚀 Новое поколение HR</Badge>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Найди персонал
                  <span className="block text-blue-200">в один клик</span>
                </h1>
                <p className="text-xl text-blue-100 max-w-lg">
                  Революционное приложение для поиска линейного персонала. Как Яндекс.Го, только для найма сотрудников.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8">
                  <Icon name="Smartphone" className="mr-2 h-5 w-5" />
                  Скачать приложение
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 text-lg px-8">
                  Узнать больше
                </Button>
              </div>
              <div className="flex items-center space-x-8 text-blue-100">
                <div className="text-center">
                  <div className="text-2xl font-bold">1000+</div>
                  <div className="text-sm">Работодателей</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">5000+</div>
                  <div className="text-sm">Соискателей</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">30 сек</div>
                  <div className="text-sm">Средний поиск</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <img 
                  src="/img/0ba8398b-21db-4eda-91fd-b865b4580511.jpg" 
                  alt="STAFFMAN App Interface" 
                  className="w-full rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">Почему выбирают STAFFMAN</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Мы изменили подход к поиску персонала, сделав его максимально простым и эффективным
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Zap" className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Мгновенный поиск</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Найдите нужного специалиста за 30 секунд. Система автоматически подберет кандидатов по вашим критериям.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Icon name="CheckCircle" className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl">Проверенные кандидаты</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Все соискатели проходят верификацию. Рейтинги, отзывы и документы помогают выбрать лучших.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Wallet" className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Прозрачные цены</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Никаких скрытых комиссий. Фиксированная стоимость услуг и гибкие тарифные планы.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">Как это работает</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Простой процесс в 3 шага для быстрого поиска персонала
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <div className="absolute top-10 left-1/2 w-full h-0.5 bg-blue-200 hidden md:block transform translate-x-10"></div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Создайте заявку</h3>
              <p className="text-gray-600">
                Укажите тип персонала, количество человек, время и место работы
              </p>
            </div>
            <div className="text-center">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <div className="absolute top-10 left-1/2 w-full h-0.5 bg-blue-200 hidden md:block transform translate-x-10"></div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Получите кандидатов</h3>
              <p className="text-gray-600">
                Система найдет подходящих специалистов и пришлет их профили
              </p>
            </div>
            <div className="text-center">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Начните работу</h3>
              <p className="text-gray-600">
                Выберите лучших кандидатов и начните сотрудничество
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">Тарифные планы</h2>
            <p className="text-xl text-gray-600">
              Выберите подходящий план для вашего бизнеса
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 border-gray-200">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Базовый</CardTitle>
                <CardDescription>Для малого бизнеса</CardDescription>
                <div className="text-4xl font-bold mt-4">
                  399₽
                  <span className="text-lg font-normal text-gray-600">/заявка</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Icon name="Check" className="h-5 w-5 text-green-600 mr-2" />
                    До 5 человек в заявке
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="h-5 w-5 text-green-600 mr-2" />
                    Базовый отбор кандидатов
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="h-5 w-5 text-green-600 mr-2" />
                    Email поддержка
                  </li>
                </ul>
                <Button className="w-full">Выбрать план</Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-600 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-blue-600">Популярный</Badge>
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Стандарт</CardTitle>
                <CardDescription>Для растущих компаний</CardDescription>
                <div className="text-4xl font-bold mt-4">
                  699₽
                  <span className="text-lg font-normal text-gray-600">/заявка</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Icon name="Check" className="h-5 w-5 text-green-600 mr-2" />
                    До 20 человек в заявке
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="h-5 w-5 text-green-600 mr-2" />
                    Расширенный отбор
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="h-5 w-5 text-green-600 mr-2" />
                    Приоритетная поддержка
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="h-5 w-5 text-green-600 mr-2" />
                    Аналитика и отчеты
                  </li>
                </ul>
                <Button className="w-full">Выбрать план</Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Премиум</CardTitle>
                <CardDescription>Для крупного бизнеса</CardDescription>
                <div className="text-4xl font-bold mt-4">
                  1299₽
                  <span className="text-lg font-normal text-gray-600">/заявка</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Icon name="Check" className="h-5 w-5 text-green-600 mr-2" />
                    Безлимитно человек
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="h-5 w-5 text-green-600 mr-2" />
                    VIP отбор кандидатов
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="h-5 w-5 text-green-600 mr-2" />
                    Персональный менеджер
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="h-5 w-5 text-green-600 mr-2" />
                    Интеграция с HR системами
                  </li>
                </ul>
                <Button className="w-full">Выбрать план</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">Отзывы клиентов</h2>
            <p className="text-xl text-gray-600">
              Что говорят наши пользователи
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="flex space-x-1">
                    {[1,2,3,4,5].map((star) => (
                      <Icon key={star} name="Star" className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  "За 20 минут нашли 3 грузчиков для переезда. Все пришли вовремя, работали отлично. Очень удобно!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                  <div>
                    <div className="font-semibold">Алексей Петров</div>
                    <div className="text-sm text-gray-600">ИП, логистика</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="flex space-x-1">
                    {[1,2,3,4,5].map((star) => (
                      <Icon key={star} name="Star" className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  "Использую уже полгода для склада. Качество подбора персонала на высоте, все проверенные люди."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                  <div>
                    <div className="font-semibold">Мария Иванова</div>
                    <div className="text-sm text-gray-600">Директор склада</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="flex space-x-1">
                    {[1,2,3,4,5].map((star) => (
                      <Icon key={star} name="Star" className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  "Отличная альтернатива кадровым агентствам. Быстро, недорого и эффективно. Рекомендую!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                  <div>
                    <div className="font-semibold">Сергей Козлов</div>
                    <div className="text-sm text-gray-600">Владелец ресторана</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">Часто задаваемые вопросы</h2>
            <p className="text-xl text-gray-600">
              Ответы на самые популярные вопросы
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-white rounded-lg border">
                <AccordionTrigger className="px-6 text-left">
                  Как быстро можно найти персонал?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  В среднем подходящие кандидаты находятся за 30 секунд. Время может варьироваться в зависимости от специфики заявки и региона.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white rounded-lg border">
                <AccordionTrigger className="px-6 text-left">
                  Какие гарантии качества персонала?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  Все кандидаты проходят верификацию документов и имеют рейтинговую систему на основе отзывов работодателей. Мы предоставляем гарантию замены в случае неудовлетворительной работы.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white rounded-lg border">
                <AccordionTrigger className="px-6 text-left">
                  Какие виды персонала можно найти?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  Мы специализируемся на линейном персонале: грузчики, разнорабочие, кладовщики, фасовщики, уборщики, курьеры, промоутеры и другие специальности.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-white rounded-lg border">
                <AccordionTrigger className="px-6 text-left">
                  Как происходит оплата?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  Оплата происходит после успешного подбора персонала. Принимаем банковские карты, электронные кошельки и банковские переводы для юридических лиц.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-white rounded-lg border">
                <AccordionTrigger className="px-6 text-left">
                  В каких регионах работает сервис?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  В настоящее время STAFFMAN работает в Москве, Санкт-Петербурге и основных городах России. Постоянно расширяем географию присутствия.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Download App */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Скачайте приложение STAFFMAN
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Начните использовать революционный способ поиска персонала прямо сейчас
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8">
                <Icon name="Smartphone" className="mr-2 h-5 w-5" />
                App Store
              </Button>
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8">
                <Icon name="Smartphone" className="mr-2 h-5 w-5" />
                Google Play
              </Button>
            </div>
            <div className="mt-8">
              <img 
                src="/img/85f36ae7-64eb-41e4-9088-08e0225f15bc.jpg" 
                alt="People using STAFFMAN app" 
                className="mx-auto rounded-2xl shadow-2xl max-w-md w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">Связаться с нами</h2>
            <p className="text-xl text-gray-600">
              Остались вопросы? Мы всегда готовы помочь
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Phone" className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Телефон</h3>
              <p className="text-gray-600">+7 (495) 123-45-67</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Mail" className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-600">info@staffman.ru</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="MessageCircle" className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Поддержка</h3>
              <p className="text-gray-600">Онлайн-чат 24/7</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Briefcase" className="h-8 w-8 text-blue-400" />
                <span className="text-2xl font-bold">STAFFMAN</span>
              </div>
              <p className="text-gray-400">
                Революционный сервис поиска персонала в один клик
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Продукт</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#features" className="hover:text-white transition-colors">Преимущества</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Тарифы</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#contact" className="hover:text-white transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Помощь</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Документация</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Карьера</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Пресс-центр</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 STAFFMAN. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;