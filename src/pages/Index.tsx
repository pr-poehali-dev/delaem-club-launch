import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Icon from "@/components/ui/icon";

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
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <a href="#hero" className="text-2xl font-bold">
            <span className="text-black">delaem</span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm hover:text-[#C1DF54] transition-colors">О клубе</a>
            <a href="#who" className="text-sm hover:text-[#C1DF54] transition-colors">Для кого</a>
            <a href="#program" className="text-sm hover:text-[#C1DF54] transition-colors">Программа</a>
            <Button onClick={scrollToForm} className="bg-black text-white hover:bg-[#C1DF54] hover:text-black transition-all">
              Подать заявку
            </Button>
          </div>
        </div>
      </nav>

      <section id="hero" className="min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="container mx-auto max-w-5xl text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="text-[#C1DF54]">Delaem</span> — клуб B2B-экспертов,<br />
            которые не говорят, а делают
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Гибридный клуб для тех, кто хочет упаковать экспертизу, продавать дороже и выстроить системные B2B-продажи — через практику, разборы и сильное окружение.
          </p>
          
          <div className="bg-gray-50 p-8 rounded-lg mb-8 max-w-2xl mx-auto">
            <p className="text-2xl md:text-3xl font-semibold leading-relaxed">
              Delaem для себя.<br />
              Delaem хорошо.<br />
              Delaem результат.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="p-6 bg-white border border-gray-200 rounded-lg hover:border-[#C1DF54] transition-all">
              <Icon name="Target" className="w-8 h-8 mb-4 mx-auto text-[#C1DF54]" />
              <p className="text-lg">Чётко понимаешь, за что тебе платят</p>
            </div>
            <div className="p-6 bg-white border border-gray-200 rounded-lg hover:border-[#C1DF54] transition-all">
              <Icon name="TrendingUp" className="w-8 h-8 mb-4 mx-auto text-[#C1DF54]" />
              <p className="text-lg">Продаёшь ценность, а не «часы и услуги»</p>
            </div>
            <div className="p-6 bg-white border border-gray-200 rounded-lg hover:border-[#C1DF54] transition-all">
              <Icon name="Zap" className="w-8 h-8 mb-4 mx-auto text-[#C1DF54]" />
              <p className="text-lg">Растёшь через действия, а не разговоры</p>
            </div>
          </div>

          <Button onClick={scrollToForm} size="lg" className="bg-[#C1DF54] text-black hover:bg-black hover:text-white text-lg px-12 py-6 transition-all">
            Подать заявку в клуб
          </Button>
        </div>
      </section>

      <section id="about" className="py-24 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-center">
            Почему Delaem — это не очередной клуб
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 mb-12 text-center leading-relaxed">
            Рынок B2B перегружен разговорами, стратегиями и теориями — и беден на действие.<br />
            Мы намеренно вынесли это в название.
          </p>

          <div className="bg-white p-8 rounded-lg border border-gray-200 mb-8">
            <h3 className="text-2xl font-bold mb-6">В Delaem:</h3>
            <ul className="space-y-4 text-lg">
              <li className="flex items-start gap-3">
                <Icon name="X" className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <span>не обсуждаем «как правильно»</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="X" className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <span>не собираем мотивационные чаты</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="X" className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <span>не копим знания ради знаний</span>
              </li>
            </ul>
          </div>

          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold">Мы <span className="text-[#C1DF54]">delaem</span>.</p>
          </div>
        </div>
      </section>

      <section id="who" className="py-24 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-center">
            Delaem — для B2B-экспертов,<br />которые уже в деле
          </h2>
          
          <div className="bg-gray-50 p-8 rounded-lg mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center">Подходит, если ты:</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <Icon name="CheckCircle2" className="w-6 h-6 text-[#C1DF54] flex-shrink-0 mt-1" />
                <span className="text-lg">продаёшь B2B-услуги или решения</span>
              </div>
              <div className="flex items-start gap-3">
                <Icon name="CheckCircle2" className="w-6 h-6 text-[#C1DF54] flex-shrink-0 mt-1" />
                <span className="text-lg">чувствуешь потолок в росте или доходе</span>
              </div>
              <div className="flex items-start gap-3">
                <Icon name="CheckCircle2" className="w-6 h-6 text-[#C1DF54] flex-shrink-0 mt-1" />
                <span className="text-lg">не до конца понимаешь, как упаковать и объяснить ценность</span>
              </div>
              <div className="flex items-start gap-3">
                <Icon name="CheckCircle2" className="w-6 h-6 text-[#C1DF54] flex-shrink-0 mt-1" />
                <span className="text-lg">устал(а) быть «исполнителем» вместо эксперта</span>
              </div>
              <div className="flex items-start gap-3 md:col-span-2">
                <Icon name="CheckCircle2" className="w-6 h-6 text-[#C1DF54] flex-shrink-0 mt-1" />
                <span className="text-lg">хочешь среду с реальными задачами</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl md:text-6xl font-bold mb-12 text-center">
            С чем приходят в Delaem
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Я эксперт, но не понимаю, кому и за что меня покупают",
              "Как сформулировать сильный B2B-оффер",
              "Как продавать дороже без впаривания",
              "Как системно расти, а не делать рывки",
              "Как выглядеть экспертом, а не исполнителем"
            ].map((text, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg border border-gray-200 hover:border-[#C1DF54] transition-all">
                <p className="text-lg font-medium">«{text}»</p>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-600 mt-8 text-lg italic">
            реальные запросы участников, не абстрактные боли
          </p>
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl md:text-6xl font-bold mb-12 text-center">
            Что меняется, когда ты начинаешь делать
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-8">
              <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                <p className="text-sm text-red-600 font-semibold mb-2">До</p>
                <p className="text-lg">Размытая экспертиза</p>
              </div>
              <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                <p className="text-sm text-red-600 font-semibold mb-2">До</p>
                <p className="text-lg">Продажи «по ситуации»</p>
              </div>
              <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                <p className="text-sm text-red-600 font-semibold mb-2">До</p>
                <p className="text-lg">Сложно объяснить ценность</p>
              </div>
              <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                <p className="text-sm text-red-600 font-semibold mb-2">До</p>
                <p className="text-lg">Одиночество</p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-[#C1DF54]/20 p-6 rounded-lg border border-[#C1DF54]">
                <p className="text-sm text-[#5a6b2c] font-semibold mb-2">После</p>
                <p className="text-lg font-semibold">Чёткое позиционирование</p>
              </div>
              <div className="bg-[#C1DF54]/20 p-6 rounded-lg border border-[#C1DF54]">
                <p className="text-sm text-[#5a6b2c] font-semibold mb-2">После</p>
                <p className="text-lg font-semibold">Понятная логика продаж</p>
              </div>
              <div className="bg-[#C1DF54]/20 p-6 rounded-lg border border-[#C1DF54]">
                <p className="text-sm text-[#5a6b2c] font-semibold mb-2">После</p>
                <p className="text-lg font-semibold">Оффер, за который платят</p>
              </div>
              <div className="bg-[#C1DF54]/20 p-6 rounded-lg border border-[#C1DF54]">
                <p className="text-sm text-[#5a6b2c] font-semibold mb-2">После</p>
                <p className="text-lg font-semibold">Рабочее окружение</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-center">
            Как мы delaem
          </h2>

          <div className="bg-white p-8 rounded-lg border border-gray-200 mb-8">
            <h3 className="text-2xl font-bold mb-6">Формат (гибрид):</h3>
            <ul className="space-y-4 text-lg">
              <li className="flex items-start gap-3">
                <Icon name="Video" className="w-6 h-6 text-[#C1DF54] flex-shrink-0 mt-1" />
                <span>онлайн-мастермайнды и разборы</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="Users" className="w-6 h-6 text-[#C1DF54] flex-shrink-0 mt-1" />
                <span>офлайн-встречи и живые сессии</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="Briefcase" className="w-6 h-6 text-[#C1DF54] flex-shrink-0 mt-1" />
                <span>работа с офферами, продажами и кейсами</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="Lock" className="w-6 h-6 text-[#C1DF54] flex-shrink-0 mt-1" />
                <span>закрытое комьюнити без новичков «с нуля»</span>
              </li>
            </ul>
          </div>

          <p className="text-center text-xl font-medium italic">
            ценится качество действий, а не громкость слов
          </p>
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-center">
            Экспертиза — обязательное условие входа
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
            Мы собираем людей, понимающих специфику B2B: длинные сделки, доверие, решения, а не импульсные покупки.<br /><br />
            Неважно — один эксперт или команда.<br />
            Важно — реальная B2B-экспертиза и способность доводить до результата.
          </p>
        </div>
      </section>

      <section className="py-24 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-center">
            Почему вход — по заявке
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed text-center mb-12">
            Мы сохраняем качество среды.<br />
            В клуб нельзя «купить доступ» — можно только войти по заявке.
          </p>

          <div className="bg-black text-white p-12 rounded-lg text-center">
            <p className="text-2xl md:text-3xl font-semibold leading-relaxed">
              Delaem — это про:<br />
              <span className="text-[#C1DF54]">зрелость</span> · <span className="text-[#C1DF54]">ответственность</span> · <span className="text-[#C1DF54]">готовность делать</span>
            </p>
          </div>
        </div>
      </section>

      <section id="program" className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-center">
            Что мы delaem в течение года
          </h2>
          <p className="text-xl text-gray-600 mb-16 text-center">
            Понятный путь роста B2B-эксперта — от упаковки до системных продаж
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white border border-gray-200 rounded-lg p-8 hover:border-[#C1DF54] transition-all">
              <h3 className="text-3xl font-bold mb-4">Q1 — Фундамент</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Позиционирование · ЦА · B2B-оффер · ценность vs часы · экспертный образ
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-8 hover:border-[#C1DF54] transition-all">
              <h3 className="text-3xl font-bold mb-4">Q2 — Продажи</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                B2B-продажи · рост чеков · КП · переговоры · возражения
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-8 hover:border-[#C1DF54] transition-all">
              <h3 className="text-3xl font-bold mb-4">Q3 — Система</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Маркетинг · воронка · масштабирование · партнёрства · устойчивость
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-8 hover:border-[#C1DF54] transition-all">
              <h3 className="text-3xl font-bold mb-4">Q4 — Результат</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Кейсы · бренд эксперта · рекомендации · итоги года · план роста
              </p>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <p className="text-lg mb-4">
              <strong>Форматы:</strong> онлайн, офлайн, мастермайнды, разборы
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              <strong>Важно:</strong> Программа адаптируется под запросы участников, но фокус на результате неизменен.<br />
              Мы не читаем лекции. Мы <strong className="text-[#C1DF54]">delaem</strong>.
            </p>
          </div>
        </div>
      </section>

      <section id="application-form" className="py-24 px-4 bg-black text-white">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-center">
            Delaem — когда слова заканчиваются<br />и начинается рост
          </h2>
          <p className="text-xl text-gray-300 mb-12 text-center">
            Если ты перерос(ла) разговоры — значит, пора delaem
          </p>

          <form onSubmit={handleSubmit} className="space-y-6 bg-white text-black p-8 rounded-lg">
            <div>
              <label className="block text-sm font-medium mb-2">Имя</label>
              <Input
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full"
                placeholder="Ваше имя"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <Input
                required
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Телефон</label>
              <Input
                required
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full"
                placeholder="+7 (___) ___-__-__"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Расскажите о себе и своём запросе</label>
              <Textarea
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full min-h-32"
                placeholder="Чем вы занимаетесь и что хотите улучшить?"
              />
            </div>

            <Button type="submit" size="lg" className="w-full bg-[#C1DF54] text-black hover:bg-white hover:text-black text-lg py-6">
              Подать заявку в клуб
            </Button>
          </form>

          <div className="mt-12 text-center space-y-4">
            <h3 className="text-2xl font-bold mb-4">Как стать частью Delaem</h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-lg">
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 bg-[#C1DF54] text-black rounded-full flex items-center justify-center font-bold">1</span>
                <span>Оставляешь заявку</span>
              </div>
              <Icon name="ArrowRight" className="w-6 h-6 text-[#C1DF54] hidden md:block" />
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 bg-[#C1DF54] text-black rounded-full flex items-center justify-center font-bold">2</span>
                <span>Мы смотрим на запрос</span>
              </div>
              <Icon name="ArrowRight" className="w-6 h-6 text-[#C1DF54] hidden md:block" />
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 bg-[#C1DF54] text-black rounded-full flex items-center justify-center font-bold">3</span>
                <span>Приглашаем в поток</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 bg-white border-t border-gray-200">
        <div className="container mx-auto text-center">
          <p className="text-3xl font-bold mb-4">
            <span className="text-[#C1DF54]">delaem</span>
          </p>
          <p className="text-gray-600">
            Клуб B2B-экспертов, которые не говорят, а делают
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
