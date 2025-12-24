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
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm">
        <div className="container mx-auto px-6 lg:px-12 py-6 flex items-center justify-between">
          <a href="#hero" className="flex items-center">
            <img src="https://cdn.poehali.dev/files/Group 18 (1).png" alt="Delaem" className="h-10 md:h-12" />
          </a>
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm font-medium hover:text-[#C1DF54] transition-colors">О клубе</a>
            <a href="#who" className="text-sm font-medium hover:text-[#C1DF54] transition-colors">Для кого</a>
            <a href="#program" className="text-sm font-medium hover:text-[#C1DF54] transition-colors">Программа</a>
            <Button onClick={scrollToForm} className="bg-black text-white hover:bg-[#C1DF54] hover:text-black transition-all font-semibold">
              Подать заявку
            </Button>
          </div>
        </div>
      </nav>

      <section id="hero" className="min-h-screen flex items-center px-6 lg:px-12 pt-24">
        <div className="container mx-auto max-w-7xl animate-fade-in">
          <div className="max-w-6xl">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[0.95] tracking-tight">
              Клуб B2B-экспертов,<br />
              которые <span className="relative inline-block">
                не говорят
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 10C50 3 100 15 150 8C200 1 250 12 298 6" stroke="#C1DF54" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </span>,<br />
              а <span className="text-[#C1DF54] relative inline-block">
                делают
                <svg className="absolute -bottom-3 -left-2 -right-2 w-[calc(100%+16px)]" viewBox="0 0 200 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <ellipse cx="100" cy="15" rx="95" ry="12" stroke="#C1DF54" strokeWidth="3" fill="none"/>
                </svg>
              </span>
            </h1>
            
            <div className="flex flex-col md:flex-row gap-8 mb-12">
              <div className="md:w-1/2">
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                  Гибридный клуб для тех, кто хочет упаковать экспертизу, продавать дороже и выстроить системные B2B-продажи
                </p>
                <Button onClick={scrollToForm} size="lg" className="bg-[#C1DF54] text-black hover:bg-black hover:text-white text-lg px-10 py-5 transition-all font-semibold">
                  Подать заявку в клуб
                </Button>
              </div>
              
              <div className="md:w-1/2 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#C1DF54] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-base md:text-lg">Чётко понимаешь, за что тебе платят</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#C1DF54] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-base md:text-lg">Продаёшь ценность, а не «часы и услуги»</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#C1DF54] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-base md:text-lg">Растёшь через действия, а не разговоры</p>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-[#C1DF54] pl-6">
              <p className="text-2xl md:text-3xl font-bold leading-tight">
                Delaem для себя.<br />
                Delaem хорошо.<br />
                Delaem результат.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-32 px-6 lg:px-12 bg-black text-white">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-16 leading-tight max-w-4xl">
            Почему Delaem — это не очередной клуб
          </h2>
          
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <p className="text-2xl md:text-3xl text-gray-300 leading-relaxed mb-12">
                Рынок B2B перегружен разговорами, стратегиями и теориями — и беден на действие.
              </p>
              <p className="text-xl text-gray-400">
                Мы намеренно вынесли это в название.
              </p>
            </div>
            
            <div className="space-y-8">
              <div>
                <p className="text-lg text-gray-500 mb-2">В Delaem:</p>
                <ul className="space-y-4 text-xl md:text-2xl">
                  <li className="flex items-start gap-3">
                    <span className="text-red-500">×</span>
                    <span>не обсуждаем «как правильно»</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500">×</span>
                    <span>не собираем мотивационные чаты</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500">×</span>
                    <span>не копим знания ради знаний</span>
                  </li>
                </ul>
              </div>
              
              <div className="pt-8 border-t border-gray-800">
                <p className="text-4xl md:text-5xl font-bold">Мы <span className="text-[#C1DF54]">delaem</span>.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="who" className="py-32 px-6 lg:px-12 bg-[#C1DF54]">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-20 leading-tight max-w-5xl">
            Delaem — для B2B-экспертов, которые уже в деле
          </h2>
          
          <div className="space-y-8 max-w-4xl">
            <p className="text-2xl md:text-3xl font-semibold mb-12">Подходит, если ты:</p>
            
            <div className="space-y-6 text-xl md:text-2xl">
              <div className="flex items-start gap-4">
                <span className="text-3xl font-bold">—</span>
                <span>продаёшь B2B-услуги или решения</span>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-3xl font-bold">—</span>
                <span>чувствуешь потолок в росте или доходе</span>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-3xl font-bold">—</span>
                <span>не до конца понимаешь, как упаковать и объяснить ценность</span>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-3xl font-bold">—</span>
                <span>устал(а) быть «исполнителем» вместо эксперта</span>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-3xl font-bold">—</span>
                <span>хочешь среду с реальными задачами</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 lg:px-12">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-5xl md:text-7xl font-bold mb-20 max-w-4xl">
            С чем приходят в Delaem
          </h2>
          
          <div className="space-y-8 max-w-5xl">
            {[
              "Я эксперт, но не понимаю, кому и за что меня покупают",
              "Как сформулировать сильный B2B-оффер",
              "Как продавать дороже без впаривания",
              "Как системно расти, а не делать рывки",
              "Как выглядеть экспертом, а не исполнителем"
            ].map((text, idx) => (
              <div key={idx} className="border-l-4 border-gray-200 hover:border-[#C1DF54] pl-6 py-2 transition-all">
                <p className="text-xl md:text-2xl">«{text}»</p>
              </div>
            ))}
          </div>

          <p className="text-gray-600 mt-12 text-lg italic max-w-5xl">
            реальные запросы участников, не абстрактные боли
          </p>
        </div>
      </section>

      <section className="py-32 px-6 lg:px-12 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-5xl md:text-7xl font-bold mb-20 max-w-4xl">
            Что меняется, когда ты начинаешь делать
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-x-24 gap-y-12 max-w-6xl">
            <div className="space-y-8">
              <div>
                <p className="text-sm text-red-600 font-semibold mb-3 uppercase">До</p>
                <p className="text-2xl md:text-3xl text-gray-400">Размытая экспертиза</p>
              </div>
              <div>
                <p className="text-sm text-red-600 font-semibold mb-3 uppercase">До</p>
                <p className="text-2xl md:text-3xl text-gray-400">Продажи «по ситуации»</p>
              </div>
              <div>
                <p className="text-sm text-red-600 font-semibold mb-3 uppercase">До</p>
                <p className="text-2xl md:text-3xl text-gray-400">Сложно объяснить ценность</p>
              </div>
              <div>
                <p className="text-sm text-red-600 font-semibold mb-3 uppercase">До</p>
                <p className="text-2xl md:text-3xl text-gray-400">Одиночество</p>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <p className="text-sm text-[#5a6b2c] font-semibold mb-3 uppercase">После</p>
                <p className="text-2xl md:text-3xl font-bold">Чёткое позиционирование</p>
              </div>
              <div>
                <p className="text-sm text-[#5a6b2c] font-semibold mb-3 uppercase">После</p>
                <p className="text-2xl md:text-3xl font-bold">Понятная логика продаж</p>
              </div>
              <div>
                <p className="text-sm text-[#5a6b2c] font-semibold mb-3 uppercase">После</p>
                <p className="text-2xl md:text-3xl font-bold">Оффер, за который платят</p>
              </div>
              <div>
                <p className="text-sm text-[#5a6b2c] font-semibold mb-3 uppercase">После</p>
                <p className="text-2xl md:text-3xl font-bold">Рабочее окружение</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 lg:px-12">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-5xl md:text-7xl font-bold mb-12 max-w-4xl">
            Как мы delaem
          </h2>

          <div className="grid md:grid-cols-2 gap-12 mb-12 max-w-5xl">
            <div className="space-y-6">
              <p className="text-2xl font-semibold">Формат (гибрид):</p>
              <ul className="space-y-4 text-xl">
                <li className="flex items-start gap-4">
                  <span className="text-[#C1DF54] text-2xl">→</span>
                  <span>онлайн-мастермайнды и разборы</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-[#C1DF54] text-2xl">→</span>
                  <span>офлайн-встречи и живые сессии</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-[#C1DF54] text-2xl">→</span>
                  <span>работа с офферами, продажами и кейсами</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-[#C1DF54] text-2xl">→</span>
                  <span>закрытое комьюнити без новичков «с нуля»</span>
                </li>
              </ul>
            </div>
            
            <div className="flex items-center">
              <p className="text-2xl md:text-3xl font-medium italic leading-relaxed">
                ценится качество действий, а не громкость слов
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 lg:px-12 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-5xl md:text-7xl font-bold mb-12 max-w-4xl">
            Экспертиза — обязательное условие входа
          </h2>
          <p className="text-2xl md:text-3xl text-gray-700 leading-relaxed max-w-4xl">
            Мы собираем людей, понимающих специфику B2B: длинные сделки, доверие, решения, а не импульсные покупки.
            <br /><br />
            Неважно — один эксперт или команда.<br />
            Важно — реальная B2B-экспертиза и способность доводить до результата.
          </p>
        </div>
      </section>

      <section className="py-32 px-6 lg:px-12">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-5xl md:text-7xl font-bold mb-12 max-w-4xl">
            Почему вход — по заявке
          </h2>
          <p className="text-2xl md:text-3xl text-gray-700 leading-relaxed mb-16 max-w-4xl">
            Мы сохраняем качество среды.<br />
            В клуб нельзя «купить доступ» — можно только войти по заявке.
          </p>

          <div className="bg-black text-white p-12 md:p-16 max-w-5xl">
            <p className="text-3xl md:text-4xl font-semibold leading-relaxed">
              Delaem — это про:<br />
              <span className="text-[#C1DF54]">зрелость</span> · <span className="text-[#C1DF54]">ответственность</span> · <span className="text-[#C1DF54]">готовность делать</span>
            </p>
          </div>
        </div>
      </section>

      <section id="program" className="py-32 px-6 lg:px-12 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-5xl md:text-7xl font-bold mb-8 max-w-4xl">
            Что мы delaem в течение года
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 mb-20 max-w-3xl">
            Понятный путь роста B2B-эксперта — от упаковки до системных продаж
          </p>

          <div className="grid lg:grid-cols-2 gap-8 mb-16 max-w-6xl">
            <div className="bg-white p-10 border-l-4 border-[#C1DF54]">
              <h3 className="text-4xl font-bold mb-6">Q1 — Фундамент</h3>
              <p className="text-xl text-gray-700 leading-relaxed">
                Позиционирование · ЦА · B2B-оффер · ценность vs часы · экспертный образ
              </p>
            </div>

            <div className="bg-white p-10 border-l-4 border-[#C1DF54]">
              <h3 className="text-4xl font-bold mb-6">Q2 — Продажи</h3>
              <p className="text-xl text-gray-700 leading-relaxed">
                B2B-продажи · рост чеков · КП · переговоры · возражения
              </p>
            </div>

            <div className="bg-white p-10 border-l-4 border-[#C1DF54]">
              <h3 className="text-4xl font-bold mb-6">Q3 — Система</h3>
              <p className="text-xl text-gray-700 leading-relaxed">
                Маркетинг · воронка · масштабирование · партнёрства · устойчивость
              </p>
            </div>

            <div className="bg-white p-10 border-l-4 border-[#C1DF54]">
              <h3 className="text-4xl font-bold mb-6">Q4 — Результат</h3>
              <p className="text-xl text-gray-700 leading-relaxed">
                Кейсы · бренд эксперта · рекомендации · итоги года · план роста
              </p>
            </div>
          </div>

          <div className="bg-white p-10 max-w-4xl">
            <p className="text-xl mb-6">
              <strong>Форматы:</strong> онлайн, офлайн, мастермайнды, разборы
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              <strong>Важно:</strong> Программа адаптируется под запросы участников, но фокус на результате неизменен.<br />
              Мы не читаем лекции. Мы <strong className="text-[#C1DF54]">delaem</strong>.
            </p>
          </div>
        </div>
      </section>

      <section id="application-form" className="py-32 px-6 lg:px-12 bg-black text-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl md:text-7xl font-bold mb-8 max-w-4xl leading-tight">
            Delaem — когда слова заканчиваются и начинается рост
          </h2>
          <p className="text-2xl text-gray-300 mb-16 max-w-3xl">
            Если ты перерос(ла) разговоры — значит, пора delaem
          </p>

          <div className="grid lg:grid-cols-2 gap-16">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Имя</label>
                <Input
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                  placeholder="Ваше имя"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Email</label>
                <Input
                  required
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Телефон</label>
                <Input
                  required
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                  placeholder="+7 (___) ___-__-__"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Расскажите о себе и своём запросе</label>
                <Textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full min-h-32 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                  placeholder="Чем вы занимаетесь и что хотите улучшить?"
                />
              </div>

              <Button type="submit" size="lg" className="w-full bg-[#C1DF54] text-black hover:bg-white hover:text-black text-lg py-6 font-semibold">
                Подать заявку в клуб
              </Button>
            </form>

            <div className="flex flex-col justify-center">
              <h3 className="text-3xl font-bold mb-8">Как стать частью Delaem</h3>
              <div className="space-y-6 text-xl">
                <div className="flex items-start gap-4">
                  <span className="w-10 h-10 bg-[#C1DF54] text-black rounded-full flex items-center justify-center font-bold flex-shrink-0">1</span>
                  <div>
                    <p className="font-semibold mb-1">Оставляешь заявку</p>
                    <p className="text-gray-400 text-base">Заполни форму слева</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="w-10 h-10 bg-[#C1DF54] text-black rounded-full flex items-center justify-center font-bold flex-shrink-0">2</span>
                  <div>
                    <p className="font-semibold mb-1">Мы смотрим на запрос</p>
                    <p className="text-gray-400 text-base">Оцениваем контекст и экспертизу</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="w-10 h-10 bg-[#C1DF54] text-black rounded-full flex items-center justify-center font-bold flex-shrink-0">3</span>
                  <div>
                    <p className="font-semibold mb-1">Приглашаем в поток</p>
                    <p className="text-gray-400 text-base">Становишься частью клуба</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 lg:px-12 bg-white border-t border-gray-200">
        <div className="container mx-auto flex items-center justify-between">
          <img src="https://cdn.poehali.dev/files/Group 18 (1).png" alt="Delaem" className="h-8 md:h-10" />
          <p className="text-gray-600 text-sm md:text-base">
            Клуб B2B-экспертов, которые не говорят, а делают
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;