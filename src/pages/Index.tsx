import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена",
      description: "Мы свяжемся с вами в ближайшее время",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const scrollToForm = () => {
    document.getElementById("application-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white text-black">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
        <div className="container mx-auto px-8 lg:px-16 py-5 flex items-center justify-between">
          <a href="#hero" className="flex items-center">
            <img src="https://cdn.poehali.dev/files/Group 18 (1).png" alt="Delaem" className="h-8 md:h-10" />
          </a>
          <div className="hidden md:flex items-center gap-12">
            <a href="#about" className="text-xs uppercase tracking-wider font-semibold hover:text-[#5443ff] transition-colors">О клубе</a>
            <a href="#who" className="text-xs uppercase tracking-wider font-semibold hover:text-[#5443ff] transition-colors">Для кого</a>
            <a href="#program" className="text-xs uppercase tracking-wider font-semibold hover:text-[#5443ff] transition-colors">Программа</a>
            <Button onClick={scrollToForm} className="bg-[#5443ff] text-white hover:bg-black transition-all font-semibold px-8 py-5 text-xs uppercase tracking-wider">
              Подать заявку
            </Button>
          </div>
        </div>
      </nav>

      <section id="hero" className="min-h-screen flex items-center px-8 lg:px-16 pt-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white -z-10"></div>
        <div className="container mx-auto max-w-7xl animate-slide-up">
          <div className="max-w-6xl">
            <div className="text-xs uppercase tracking-widest font-semibold text-gray-500 mb-8">
              B2B ЭКСПЕРТЫ / ДЕЙСТВИЕ / РЕЗУЛЬТАТ
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-12 leading-[0.9] tracking-tighter">
              Клуб B2B-экспертов,<br />
              которые <span className="text-[#5443ff]">не говорят</span>,<br />
              а <span className="relative inline-block">
                делают
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-[#5443ff]"></div>
              </span>
            </h1>
            
            <div className="flex flex-col lg:flex-row gap-16 mb-16">
              <div className="lg:w-1/2">
                <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8 font-light">
                  Гибридный клуб для тех, кто хочет упаковать экспертизу, продавать дороже и выстроить системные B2B-продажи
                </p>
                <Button onClick={scrollToForm} size="lg" className="bg-[#5443ff] text-white hover:bg-black text-sm uppercase tracking-wider px-12 py-7 transition-all font-semibold">
                  Подать заявку в клуб
                </Button>
              </div>
              
              <div className="lg:w-1/2 space-y-6">
                <div className="border-l-2 border-[#5443ff] pl-6">
                  <p className="text-lg font-light">Чётко понимаешь, за что тебе платят</p>
                </div>
                <div className="border-l-2 border-[#5443ff] pl-6">
                  <p className="text-lg font-light">Продаёшь ценность, а не «часы и услуги»</p>
                </div>
                <div className="border-l-2 border-[#5443ff] pl-6">
                  <p className="text-lg font-light">Растёшь через действия, а не разговоры</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 pt-12 border-t border-gray-200">
              <div>
                <div className="text-5xl md:text-6xl font-bold text-[#5443ff] mb-3">16</div>
                <p className="text-sm uppercase tracking-wider text-gray-600">Лет опыта участников</p>
              </div>
              <div>
                <div className="text-5xl md:text-6xl font-bold text-[#5443ff] mb-3">500+</div>
                <p className="text-sm uppercase tracking-wider text-gray-600">Реализованных проектов</p>
              </div>
              <div>
                <div className="text-5xl md:text-6xl font-bold text-[#5443ff] mb-3">3</div>
                <p className="text-sm uppercase tracking-wider text-gray-600">Офлайн встречи в год</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-40 px-8 lg:px-16 bg-black text-white relative overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#5443ff] rounded-full blur-[150px] opacity-20 animate-float"></div>
        <div className="container mx-auto max-w-7xl relative">
          <div className="text-xs uppercase tracking-widest font-semibold text-gray-500 mb-12">
            О КЛУБЕ / ФИЛОСОФИЯ
          </div>
          
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-20 leading-tight max-w-5xl tracking-tight">
            Почему Delaem — это не очередной клуб
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <p className="text-3xl md:text-4xl font-light leading-relaxed mb-12 text-gray-300">
                Рынок B2B перегружен разговорами, стратегиями и теориями — и беден на действие.
              </p>
              <p className="text-xl text-gray-500 font-light">
                Мы намеренно вынесли это в название.
              </p>
            </div>
            
            <div className="space-y-12">
              <div>
                <p className="text-sm text-gray-600 mb-6 uppercase tracking-wider">В Delaem:</p>
                <ul className="space-y-6 text-xl md:text-2xl font-light">
                  <li className="flex items-start gap-4 pb-6 border-b border-gray-800">
                    <span className="text-gray-600">×</span>
                    <span>не обсуждаем «как правильно»</span>
                  </li>
                  <li className="flex items-start gap-4 pb-6 border-b border-gray-800">
                    <span className="text-gray-600">×</span>
                    <span>не собираем мотивационные чаты</span>
                  </li>
                  <li className="flex items-start gap-4 pb-6 border-b border-gray-800">
                    <span className="text-gray-600">×</span>
                    <span>не копим знания ради знаний</span>
                  </li>
                </ul>
              </div>
              
              <div className="pt-8">
                <p className="text-5xl md:text-6xl font-bold tracking-tight">Мы <span className="text-[#5443ff]">delaem</span>.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="who" className="py-40 px-8 lg:px-16">
        <div className="container mx-auto max-w-7xl">
          <div className="text-xs uppercase tracking-widest font-semibold text-gray-500 mb-12">
            АУДИТОРИЯ / УЧАСТНИКИ
          </div>
          
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-24 leading-tight max-w-5xl tracking-tight">
            Delaem — для B2B-экспертов, которые уже в деле
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl">
            <div>
              <p className="text-2xl md:text-3xl font-semibold mb-12 text-[#5443ff]">Подходит, если ты:</p>
            </div>
            
            <div className="space-y-8 text-xl md:text-2xl font-light">
              <div className="pb-8 border-b border-gray-200">
                <span>продаёшь B2B-услуги или решения</span>
              </div>
              <div className="pb-8 border-b border-gray-200">
                <span>чувствуешь потолок в росте или доходе</span>
              </div>
              <div className="pb-8 border-b border-gray-200">
                <span>не до конца понимаешь, как упаковать и объяснить ценность</span>
              </div>
              <div className="pb-8 border-b border-gray-200">
                <span>устал(а) быть «исполнителем» вместо эксперта</span>
              </div>
              <div className="pb-8 border-b border-gray-200">
                <span>хочешь среду с реальными задачами</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-40 px-8 lg:px-16 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-xs uppercase tracking-widest font-semibold text-gray-500 mb-12">
            ЗАПРОСЫ / БОЛИ
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-24 max-w-4xl tracking-tight">
            С чем приходят в Delaem
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl">
            {[
              "Я эксперт, но не понимаю, кому и за что меня покупают",
              "Как сформулировать сильный B2B-оффер",
              "Как продавать дороже без впаривания",
              "Как системно расти, а не делать рывки",
              "Как выглядеть экспертом, а не исполнителем"
            ].map((text, idx) => (
              <div key={idx} className="bg-white p-8 hover:shadow-lg transition-shadow">
                <p className="text-xl md:text-2xl font-light">«{text}»</p>
              </div>
            ))}
          </div>

          <p className="text-gray-500 mt-16 text-sm uppercase tracking-wider font-semibold">
            реальные запросы участников
          </p>
        </div>
      </section>

      <section className="py-40 px-8 lg:px-16">
        <div className="container mx-auto max-w-7xl">
          <div className="text-xs uppercase tracking-widest font-semibold text-gray-500 mb-12">
            ТРАНСФОРМАЦИЯ / ДО И ПОСЛЕ
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-24 max-w-4xl tracking-tight">
            Что меняется, когда ты начинаешь делать
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-x-32 gap-y-16 max-w-6xl">
            <div className="space-y-12">
              <div className="pb-12 border-b border-gray-200">
                <p className="text-xs text-gray-500 font-semibold mb-4 uppercase tracking-wider">До</p>
                <p className="text-3xl md:text-4xl text-gray-300 font-light">Размытая экспертиза</p>
              </div>
              <div className="pb-12 border-b border-gray-200">
                <p className="text-xs text-gray-500 font-semibold mb-4 uppercase tracking-wider">До</p>
                <p className="text-3xl md:text-4xl text-gray-300 font-light">Продажи «по ситуации»</p>
              </div>
              <div className="pb-12 border-b border-gray-200">
                <p className="text-xs text-gray-500 font-semibold mb-4 uppercase tracking-wider">До</p>
                <p className="text-3xl md:text-4xl text-gray-300 font-light">Сложно объяснить ценность</p>
              </div>
              <div className="pb-12 border-b border-gray-200">
                <p className="text-xs text-gray-500 font-semibold mb-4 uppercase tracking-wider">До</p>
                <p className="text-3xl md:text-4xl text-gray-300 font-light">Одиночество</p>
              </div>
            </div>

            <div className="space-y-12">
              <div className="pb-12 border-b border-[#5443ff]">
                <p className="text-xs text-[#5443ff] font-semibold mb-4 uppercase tracking-wider">После</p>
                <p className="text-3xl md:text-4xl font-semibold">Чёткое позиционирование</p>
              </div>
              <div className="pb-12 border-b border-[#5443ff]">
                <p className="text-xs text-[#5443ff] font-semibold mb-4 uppercase tracking-wider">После</p>
                <p className="text-3xl md:text-4xl font-semibold">Понятная логика продаж</p>
              </div>
              <div className="pb-12 border-b border-[#5443ff]">
                <p className="text-xs text-[#5443ff] font-semibold mb-4 uppercase tracking-wider">После</p>
                <p className="text-3xl md:text-4xl font-semibold">Оффер, за который платят</p>
              </div>
              <div className="pb-12 border-b border-[#5443ff]">
                <p className="text-xs text-[#5443ff] font-semibold mb-4 uppercase tracking-wider">После</p>
                <p className="text-3xl md:text-4xl font-semibold">Рабочее окружение</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-40 px-8 lg:px-16 bg-black text-white relative overflow-hidden">
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#5443ff] rounded-full blur-[150px] opacity-20 animate-float"></div>
        <div className="container mx-auto max-w-7xl relative">
          <div className="text-xs uppercase tracking-widest font-semibold text-gray-600 mb-12">
            МЕТОДОЛОГИЯ / ФОРМАТ
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-16 max-w-4xl tracking-tight">
            Как мы delaem
          </h2>

          <div className="grid lg:grid-cols-2 gap-20 max-w-6xl">
            <div className="space-y-8">
              <p className="text-2xl font-semibold text-[#5443ff]">Формат (гибрид):</p>
              <ul className="space-y-6 text-xl font-light">
                <li className="flex items-start gap-4 pb-6 border-b border-gray-800">
                  <span className="text-[#5443ff] text-2xl">→</span>
                  <span>онлайн-мастермайнды и разборы</span>
                </li>
                <li className="flex items-start gap-4 pb-6 border-b border-gray-800">
                  <span className="text-[#5443ff] text-2xl">→</span>
                  <span>офлайн-встречи и живые сессии</span>
                </li>
                <li className="flex items-start gap-4 pb-6 border-b border-gray-800">
                  <span className="text-[#5443ff] text-2xl">→</span>
                  <span>работа с офферами, продажами и кейсами</span>
                </li>
                <li className="flex items-start gap-4 pb-6 border-b border-gray-800">
                  <span className="text-[#5443ff] text-2xl">→</span>
                  <span>закрытое комьюнити без новичков «с нуля»</span>
                </li>
              </ul>
            </div>
            
            <div className="flex items-center">
              <p className="text-3xl md:text-4xl font-light leading-relaxed">
                ценится качество действий, а не громкость слов
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-40 px-8 lg:px-16">
        <div className="container mx-auto max-w-7xl">
          <div className="text-xs uppercase tracking-widest font-semibold text-gray-500 mb-12">
            АКТИВНОСТИ / ЕЖЕМЕСЯЧНЫЙ РИТМ
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-24 max-w-4xl tracking-tight">
            Ежемесячные активности клуба
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl">
            <div className="bg-gray-50 p-10 border-l-4 border-[#5443ff] hover:shadow-lg transition-shadow">
              <div className="text-5xl font-bold text-[#5443ff] mb-4">1</div>
              <h3 className="text-2xl font-semibold mb-4">Вебинар по теме месяца</h3>
              <p className="text-lg text-gray-600 font-light">Практический вебинар с готовым инструментом для применения</p>
            </div>

            <div className="bg-gray-50 p-10 border-l-4 border-[#5443ff] hover:shadow-lg transition-shadow">
              <div className="text-5xl font-bold text-[#5443ff] mb-4">2</div>
              <h3 className="text-2xl font-semibold mb-4">Мастермайнд / Практикум</h3>
              <p className="text-lg text-gray-600 font-light">Общий разбор кейсов, практикум или публичный анализ с потенциальными заказчиками</p>
            </div>

            <div className="bg-gray-50 p-10 border-l-4 border-[#5443ff] hover:shadow-lg transition-shadow">
              <div className="text-5xl font-bold text-[#5443ff] mb-4">3</div>
              <h3 className="text-2xl font-semibold mb-4">Бадди месяца</h3>
              <p className="text-lg text-gray-600 font-light">Рандомная встреча за кофе с участником клуба (опционально)</p>
            </div>

            <div className="bg-gray-50 p-10 border-l-4 border-[#5443ff] hover:shadow-lg transition-shadow">
              <div className="text-5xl font-bold text-[#5443ff] mb-4">4</div>
              <h3 className="text-2xl font-semibold mb-4">Коммитмент месяца</h3>
              <p className="text-lg text-gray-600 font-light">Обязательное выполнение — 2 месяца невыполнения = выход из клуба</p>
            </div>

            <div className="bg-gray-50 p-10 border-l-4 border-[#5443ff] hover:shadow-lg transition-shadow">
              <div className="text-5xl font-bold text-[#5443ff] mb-4">5</div>
              <h3 className="text-2xl font-semibold mb-4">Специальные сессии</h3>
              <p className="text-lg text-gray-600 font-light">Вебинары участников, партнёрские сессии, подкасты с лидерами рынка (опционально)</p>
            </div>

            <div className="bg-gray-50 p-10 border-l-4 border-[#5443ff] hover:shadow-lg transition-shadow">
              <div className="text-5xl font-bold text-[#5443ff] mb-4">6</div>
              <h3 className="text-2xl font-semibold mb-4">Очные мероприятия</h3>
              <p className="text-lg text-gray-600 font-light">Бизнес-завтраки, форсайт-сессии и «умные» нетворкинги в Москве и Новосибирске</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-40 px-8 lg:px-16 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-xs uppercase tracking-widest font-semibold text-gray-500 mb-12">
            ТРЕБОВАНИЯ / ВХОДНОЙ БАРЬЕР
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-16 max-w-4xl tracking-tight">
            Экспертиза — обязательное условие входа
          </h2>
          
          <p className="text-2xl md:text-3xl text-gray-600 leading-relaxed max-w-4xl font-light">
            Мы собираем людей, понимающих специфику B2B: длинные сделки, доверие, решения, а не импульсные покупки.
            <br /><br />
            Неважно — один эксперт или команда.<br />
            Важно — реальная B2B-экспертиза и способность доводить до результата.
          </p>
        </div>
      </section>

      <section className="py-40 px-8 lg:px-16">
        <div className="container mx-auto max-w-7xl">
          <div className="text-xs uppercase tracking-widest font-semibold text-gray-500 mb-12">
            ОТБОР / КАЧЕСТВО СРЕДЫ
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-16 max-w-4xl tracking-tight">
            Почему вход — по заявке
          </h2>
          
          <p className="text-2xl md:text-3xl text-gray-700 leading-relaxed mb-20 max-w-4xl font-light">
            Мы сохраняем качество среды.<br />
            В клуб нельзя «купить доступ» — можно только войти по заявке.
          </p>

          <div className="bg-[#5443ff] text-white p-16 md:p-24 max-w-6xl">
            <p className="text-4xl md:text-5xl font-semibold leading-relaxed tracking-tight">
              Delaem — это про:<br />
              <span className="font-light">зрелость · ответственность · готовность делать</span>
            </p>
          </div>
        </div>
      </section>

      <section id="program" className="py-40 px-8 lg:px-16 bg-black text-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-xs uppercase tracking-widest font-semibold text-gray-600 mb-12">
            ПРОГРАММА / ГОДОВОЙ ПУТЬ
          </div>
          
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-12 max-w-4xl tracking-tight">
            Что мы delaem в течение года
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-500 mb-24 max-w-3xl font-light">
            Понятный путь роста B2B-эксперта — от упаковки до системных продаж
          </p>

          <div className="grid lg:grid-cols-2 gap-8 mb-20 max-w-6xl">
            <div className="bg-white/5 p-12 border-l-4 border-[#5443ff] hover:bg-white/10 transition-colors">
              <h3 className="text-5xl font-bold mb-6 tracking-tight">Q1</h3>
              <p className="text-sm uppercase tracking-wider text-gray-500 mb-4">Фундамент</p>
              <p className="text-xl text-gray-300 leading-relaxed font-light">
                Позиционирование · ЦА · B2B-оффер · ценность vs часы · экспертный образ
              </p>
            </div>

            <div className="bg-white/5 p-12 border-l-4 border-[#5443ff] hover:bg-white/10 transition-colors">
              <h3 className="text-5xl font-bold mb-6 tracking-tight">Q2</h3>
              <p className="text-sm uppercase tracking-wider text-gray-500 mb-4">Продажи</p>
              <p className="text-xl text-gray-300 leading-relaxed font-light">
                B2B-продажи · рост чеков · КП · переговоры · возражения
              </p>
            </div>

            <div className="bg-white/5 p-12 border-l-4 border-[#5443ff] hover:bg-white/10 transition-colors">
              <h3 className="text-5xl font-bold mb-6 tracking-tight">Q3</h3>
              <p className="text-sm uppercase tracking-wider text-gray-500 mb-4">Система</p>
              <p className="text-xl text-gray-300 leading-relaxed font-light">
                Маркетинг · воронка · масштабирование · партнёрства · устойчивость
              </p>
            </div>

            <div className="bg-white/5 p-12 border-l-4 border-[#5443ff] hover:bg-white/10 transition-colors">
              <h3 className="text-5xl font-bold mb-6 tracking-tight">Q4</h3>
              <p className="text-sm uppercase tracking-wider text-gray-500 mb-4">Результат</p>
              <p className="text-xl text-gray-300 leading-relaxed font-light">
                Кейсы · бренд эксперта · рекомендации · итоги года · план роста
              </p>
            </div>
          </div>

          <div className="bg-white/5 p-12 max-w-6xl border-t border-gray-800">
            <p className="text-xl mb-6 font-light">
              <strong className="font-semibold">Форматы:</strong> онлайн, офлайн, мастермайнды, разборы
            </p>
            <p className="text-xl text-gray-400 leading-relaxed font-light">
              <strong className="font-semibold text-white">Важно:</strong> Программа адаптируется под запросы участников, но фокус на результате неизменен.<br />
              Мы не читаем лекции. Мы <strong className="text-[#5443ff] font-semibold">delaem</strong>.
            </p>
          </div>
        </div>
      </section>

      <section id="application-form" className="py-40 px-8 lg:px-16 bg-[#5443ff] text-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-xs uppercase tracking-widest font-semibold text-white/60 mb-12">
            ЗАЯВКА / ВСТУПЛЕНИЕ
          </div>
          
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-12 max-w-5xl leading-tight tracking-tight">
            Delaem — когда слова заканчиваются и начинается рост
          </h2>
          
          <p className="text-2xl text-white/80 mb-24 max-w-3xl font-light">
            Если ты перерос(ла) разговоры — значит, пора наконец делать
          </p>

          <div className="grid lg:grid-cols-2 gap-20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-3 text-white/80 uppercase tracking-wider">Имя</label>
                <Input
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white/10 border-white/20 text-white placeholder:text-white/40 h-14 text-lg"
                  placeholder="Ваше имя"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-3 text-white/80 uppercase tracking-wider">Email</label>
                <Input
                  required
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-white/10 border-white/20 text-white placeholder:text-white/40 h-14 text-lg"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-3 text-white/80 uppercase tracking-wider">Телефон</label>
                <Input
                  required
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-white/10 border-white/20 text-white placeholder:text-white/40 h-14 text-lg"
                  placeholder="+7 (___) ___-__-__"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-3 text-white/80 uppercase tracking-wider">Расскажите о себе и своём запросе</label>
                <Textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full min-h-40 bg-white/10 border-white/20 text-white placeholder:text-white/40 text-lg"
                  placeholder="Чем вы занимаетесь и что хотите улучшить?"
                />
              </div>

              <Button type="submit" size="lg" className="w-full bg-black text-white hover:bg-white hover:text-[#5443ff] text-sm py-7 font-semibold uppercase tracking-wider transition-all">
                Подать заявку в клуб
              </Button>
            </form>

            <div className="flex flex-col justify-center">
              <h3 className="text-4xl font-bold mb-12 tracking-tight">Как стать частью Delaem</h3>
              <div className="space-y-10 text-xl font-light">
                <div className="flex items-start gap-6 pb-10 border-b border-white/20">
                  <span className="w-12 h-12 bg-white text-[#5443ff] flex items-center justify-center font-bold flex-shrink-0 text-2xl">1</span>
                  <div>
                    <p className="font-semibold mb-2">Оставляешь заявку</p>
                    <p className="text-white/60 text-base">Заполни форму слева</p>
                  </div>
                </div>
                <div className="flex items-start gap-6 pb-10 border-b border-white/20">
                  <span className="w-12 h-12 bg-white text-[#5443ff] flex items-center justify-center font-bold flex-shrink-0 text-2xl">2</span>
                  <div>
                    <p className="font-semibold mb-2">Мы смотрим на запрос</p>
                    <p className="text-white/60 text-base">Оцениваем контекст и экспертизу</p>
                  </div>
                </div>
                <div className="flex items-start gap-6 pb-10 border-b border-white/20">
                  <span className="w-12 h-12 bg-white text-[#5443ff] flex items-center justify-center font-bold flex-shrink-0 text-2xl">3</span>
                  <div>
                    <p className="font-semibold mb-2">Приглашаем в поток</p>
                    <p className="text-white/60 text-base">Становишься частью клуба</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 px-8 lg:px-16 bg-black text-white border-t border-gray-800">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <img src="https://cdn.poehali.dev/files/Group 18 (1).png" alt="Delaem" className="h-8 md:h-10" />
          <p className="text-gray-500 text-sm uppercase tracking-wider">
            Клуб B2B-экспертов, которые не говорят, а делают
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
