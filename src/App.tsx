import { motion } from "motion/react";
import { 
  Phone, 
  MapPin, 
  Clock, 
  ShoppingBag, 
  Menu, 
  ArrowRight, 
  Leaf, 
  Timer, 
  Home, 
  BookOpen, 
  Wheat, 
  Utensils, 
  Check,
  Star,
  Share2,
  Send,
  ThumbsUp,
  Heart,
  User,
  ReceiptText,
  ChevronRight
} from "lucide-react";
import { useState, useEffect } from "react";

// --- Components ---

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "glass-nav shadow-sm py-3" : "bg-transparent py-5"}`}>
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center gap-10">
          <a href="#" className="flex items-center gap-2 group">
            <img 
              src="https://lh3.googleusercontent.com/aida/ADBb0uh-u2KW_-MkfAPvkI552WxIg8g-IAauPt4sADAXlHJ5qMMNazOWdbeGp8kZqzIAoocXUbM3o_s9Cb44HulZgFKgX8VyefseaWr2BOuDhLKdI5dlhKXtDik4jEDcEMiDza_5Gmqbel4jwcBHNWJ2Y1UeBr15vV2Fp-YIsKoqf_CVc6XO1n-PSWIB2PVvaFsPh04pUJ17m5mbkDwdMWYx4mXpBHql6kbnOOOqVbzER0k0MMR27elvFeOmkopm00eC-G3ZsEs4J4ukrQ" 
              alt="Logo" 
              className="w-10 h-10 rounded-full object-cover border-2 border-primary/10 group-hover:scale-110 transition-transform"
              referrerPolicy="no-referrer"
            />
            <span className="text-2xl font-black text-primary tracking-tight">ХЛЕБЕРЕВ</span>
          </a>
          
          <div className="hidden lg:flex items-center gap-8">
            {["О нас", "Продукция", "Адреса", "Отзывы"].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="text-sm font-bold text-on-surface-variant hover:text-primary transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <a href="tel:+73512330011" className="hidden md:flex items-center gap-2 text-primary font-bold hover:opacity-80 transition-opacity">
            <Phone size={18} />
            <span>+7 (351) 233-00-11</span>
          </a>
          <button className="hidden sm:block px-6 py-2.5 rounded-xl border border-outline-variant text-primary font-bold hover:bg-surface-container-low transition-colors">
            Найти пекарню
          </button>
          <button className="px-6 py-2.5 btn-primary shadow-lg shadow-primary/20">
            Заказать онлайн
          </button>
          <button className="lg:hidden p-2 text-primary">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <header className="relative pt-32 pb-20 px-6 md:px-12 overflow-hidden">
      <div className="max-w-screen-2xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-container/20 text-on-secondary-container font-bold text-xs tracking-widest mb-6">
            ЧАСТНАЯ ПЕКАРНЯ
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-primary leading-[1.1] mb-8 tracking-tight">
            Хлеб, который объединяет
          </h1>
          <p className="text-xl text-on-surface-variant max-w-lg mb-12 leading-relaxed">
            Сеть частных пекарен-кондитерских «Хлеберев» — это место, где Вас каждый день ждёт вкусная и полезная выпечка по доступной цене.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="px-10 py-5 btn-primary text-lg shadow-xl shadow-primary/20 flex items-center gap-3 group">
              Каталог продукции
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-10 py-5 rounded-full bg-surface-container-high text-primary font-bold text-lg hover:bg-surface-container-highest transition-all">
              Найти пекарню
            </button>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative lg:h-[650px]"
        >
          <div className="absolute inset-0 bg-tertiary-container/10 rounded-[4rem] -rotate-3 -z-10 translate-x-6"></div>
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlWh6ALaTDE-Lw5m1HW1y-zTdcWM8ARTFXLVLkqIZu6fu65RHqqavqBaIYBrQgNT8Ww_cCTfa_OiDZKTd_N6rPQ7XC1hpiLczTDDpkGqNrwLLVUs_avLQW_Ml96jrPw7UB43hKAiFYDI7sm9N4GkSiTh3XNKqP9Tq2bEXgwbe5cgl7X2o8KfsxTnIj9GKIfkL6S5JxqjGrFXYdPFdoFOd_TYq9Tnke1384Vg5N4pZHg1w__tQKg13gsnoq8geuKbCyByR4bZwFIiM" 
            alt="Fresh Bread" 
            className="w-full h-full object-cover rounded-[3.5rem] shadow-2xl rotate-1"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>
    </header>
  );
};

const About = () => {
  return (
    <section className="py-32 px-6 md:px-12 bg-surface-container-low" id="о-нас">
      <div className="max-w-screen-2xl mx-auto grid md:grid-cols-2 gap-24 items-center">
        <div className="relative">
          <motion.img 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTmGdg3eHOu5GPeqyj3xn0-PlEXBBkeWcIs14kxbUN7oVuPl7kJqw_mrVNyzL-roHFmMEdmZ7c48nZfXEOribInRjF-IK_PhAnH6SupGjDcNXW0Y97SiWh-PkdaGEA8WW7Eu1QxkNQ-qdXifNl55Kd_n2dn3kD8XsbpqkFWVw3vnhiHzpob5SDm_G6MtcluKmG3qvhAu3MhecIju1m0HK8sx1Q-eh4vFyNpFG4kvvr4m93UsnDZscWWy32N8Lg9zw3OKKEz43wdPw" 
            alt="Baker" 
            className="rounded-[2.5rem] shadow-2xl w-full aspect-square object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute -bottom-10 -right-6 bg-white p-10 rounded-3xl shadow-2xl max-w-xs hidden lg:block border-t-4 border-secondary">
            <p className="font-headline italic text-xl text-primary leading-relaxed">
              "Мы верим, что настоящий хлеб требует времени, терпения и лучших ингредиентов."
            </p>
            <p className="mt-6 font-bold text-sm text-on-surface-variant uppercase tracking-widest">
              — Семья Хлеберевых
            </p>
          </div>
        </div>
        
        <div className="space-y-10">
          <h2 className="text-4xl md:text-6xl font-black text-primary leading-tight">
            Традиции, запеченные в каждой корочке
          </h2>
          <p className="text-lg text-on-surface-variant leading-relaxed">
            История Хлеберев началась с желания делиться настоящим вкусом свежего хлеба. Сегодня мы — это 35 уютных пекарен в Челябинске, Златоусте, Магнитогорске и других городах области.
          </p>
          
          <div className="grid grid-cols-2 gap-10">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-secondary-container/20 flex items-center justify-center text-secondary">
                <Leaf size={28} />
              </div>
              <h4 className="text-xl font-bold text-primary">Натуральные составы</h4>
              <p className="text-sm text-on-surface-variant">Без улучшителей, ГМО и искусственных консервантов.</p>
            </div>
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-tertiary-container/20 flex items-center justify-center text-tertiary">
                <Timer size={28} />
              </div>
              <h4 className="text-xl font-bold text-primary">Свежесть 24/7</h4>
              <p className="text-sm text-on-surface-variant">Выпекаем трижды в день, чтобы вы ели только свежее.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Categories = () => {
  const categories = [
    { title: "Хлеб", desc: "На закваске и традиционный", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDA3SVbjcWddiVDy2wWhg3ZbSEZunybfZGYmXZaNheumTMtz5JAUuzY3cH-QC-HrNSB3-Cbe7mM_UwpzLAbrtRkcwI57HQq50vdG72HiGCfcmJR0oRmSmv5ba6R87TMV1Q4UFZSyHvdKdfU6b7gy0iEaMZmGESItOks6dvNxwuiYggxd7b7RyvWTeY7FVQv20DjL7-qrxsbodrWOp3WQ2uQgREyPgKCwOuBQxfJ5-SwffJIwFGetyQW-UmMhXiYAXn2kuVQRgQV94M" },
    { title: "Выпечка", desc: "Круассаны и булочки", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD1wTeiW9Pp60zszkCsDjk_L4QC-SXyEnF5G5mQFp3MkFeTVr8US3vq4mkc2lYdl47Mu9SVQqtB0ko69Vw-F5ZYbnHji4ScCtZL8A3gARl5zy1UzoGb4GU1-PVV0ZP-Y6rWGHPoKBaRvJ5PBRZNRMmlVyQWcNpTg8J3PxOIwbl0bmAbWjXT9mteKPNev1MDg_OiQo8kFiIKB1Zsbd2FbHHMnGqq3Z6NDGZuYIA6eoyXfwCkxC_mkb8tK0JE2f7vgS3MyQ5OjGi2jmY" },
    { title: "Торты", desc: "Праздничные и на каждый день", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBwVgrX0XsnLLzd2p2STZucxWFY62MFzAbCxiBQXKAwUQavOnUKEGpfpg3kNDrokdU0-xyxr9IrkIz1CwJhQ6uyPXi_wCsbsQKpFCRcF6amRG7jqHSj9XLuXWJyyX9Wz29CHsT5WYJBhKWWU5qHUHANGDVTpeXwRAeGuhj-G7IsgxPeF9OsC8-30DLpfcXAdZz2DkXNsR8w1JqazNKqsZTQ2Y-5q3rJ6QfYBfBAFE_RRbe5xoTMCmUbgGXA1ZGrT177JuIk-qWcutM" },
    { title: "Пироги", desc: "Сытные и сладкие начинки", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAl3NxE4JY023TZtZwGurvT6lkCRAr-eP0Etcsa-_mMhnUrXc49s26pJ5cFrEUAQzSRQEzMarwCCXPc5Iz2-DZiHCp9JJ-ttycVmtN8AoD1sPkRbIkaA6BSnVsD8N_Ghh5_bm0yEqxlH6POAlJxuBmD0q-WPbJ8U3PTCWFZJI5kjKzJEN7PBpFFMCXri6pDmpIM0iETupPXBZNidiJqSI7JdweKOid3CTT2ZQyCa4-VakgmVU8Y7uLhIobAaJZOwdyxMGIiDMreZ68" },
    { title: "Печенье", desc: "Домашнее овсяное и песочное", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuARZpgiyZSvNgGQ5QaJ97X7EyJwzmFubGJzx7gGhoAU-ux6u_6GZjQq2qgAnpzXqFI8H5vEDCucA9jr8_bbckDJCNXALAChNENEVgzgnUjvwo-fFc96hPluxjv8X5ASHDGDBVoeYyQsax8EY-KEWVYrXqkM4Kx9mNTKi66hXkeWO0O1D03EbN-s24mZJsUDyToXJ-djLZvSMjqmH6M21TxrRqg3GZ8NHpcHNFyThgGll0RHhdfq7y60TQXtXU8gu970eI3VbhcrGfU" },
    { title: "Кофе", desc: "100% арабика свежей обжарки", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCTY5i4ffA5SyBTsUjoC0gFD73U-oJDTJ973vBFHJKCMaPbVRk2V-pDbga3BUrdTcRrid0Lw8WtCuu1M2xtWrk0HhKAf1daHJjGTCkNjyM52fuZ2RwcTizMqM8JMbb20tFnM308SdRVY_5m5QmuMLvNZ7qbpNhHap22xOha_QW3i1IX_k4OjgIQLk2ha-amAXZA-4mljTPe1Tfp0O06aF7OuZuM8melhEu6MZwU2VEVLy-HL-WYeukeiddCcYgUfI1G8CEgRchVzF0" },
  ];

  return (
    <section className="py-32 px-6 md:px-12" id="продукция">
      <div className="max-w-screen-2xl mx-auto">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-4xl md:text-6xl font-black text-primary">Наш ассортимент</h2>
          <p className="text-on-surface-variant text-xl">От классического багета до праздничных тортов</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <motion.div 
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-[2.5rem] h-96 cursor-pointer shadow-xl"
            >
              <img 
                src={cat.img} 
                alt={cat.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              <div className="absolute bottom-10 left-10 text-white">
                <h3 className="text-3xl font-black mb-2">{cat.title}</h3>
                <p className="text-sm opacity-80 font-medium tracking-wide">{cat.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    { icon: <Home size={32} />, title: "Уютная атмосфера", desc: "Место, где вас знают по имени и помнят ваш любимый кофе." },
    { icon: <BookOpen size={32} />, title: "Семейные рецепты", desc: "Мы бережно храним секреты мастерства, передаваемые из поколения в поколение." },
    { icon: <Wheat size={32} />, title: "Натуральная мука", desc: "Используем только проверенное зерно от фермерских хозяйств." },
    { icon: <Utensils size={32} />, title: "Всегда свежее", desc: "Срок жизни нашего хлеба — 24 часа. Мы не продаем вчерашнее." },
  ];

  return (
    <section className="py-32 px-6 md:px-12 bg-surface-container-low">
      <div className="max-w-screen-2xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-center text-primary mb-24">Почему нас выбирают</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          {features.map((f, idx) => (
            <motion.div 
              key={f.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="mx-auto w-20 h-20 rounded-[2rem] bg-surface-container-highest flex items-center justify-center mb-8 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-lg">
                {f.icon}
              </div>
              <h3 className="text-2xl font-black text-primary mb-4">{f.title}</h3>
              <p className="text-on-surface-variant leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Promo = () => {
  return (
    <section className="py-24 px-6 md:px-12">
      <div className="max-w-screen-2xl mx-auto">
        <div className="bg-secondary-container rounded-[4rem] p-10 md:p-20 flex flex-col md:flex-row items-center gap-16 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <div className="flex-1 text-center md:text-left z-10">
            <h2 className="text-5xl md:text-7xl font-black text-on-secondary-container mb-8 leading-tight">
              Вечерние скидки: до -50%
            </h2>
            <p className="text-xl text-on-secondary-container/80 mb-10 max-w-xl leading-relaxed">
              Каждый день после 20:00 мы снижаем цены: 50% на весь хлеб и 30% на выпечку, чтобы завтра снова радовать вас самым свежим.
            </p>
            <div className="inline-flex items-center gap-4 bg-white/20 backdrop-blur-md px-8 py-4 rounded-3xl border border-white/30 shadow-lg">
              <Clock className="text-on-secondary-container" />
              <span className="font-black text-on-secondary-container text-lg">Ежедневно с 20:00</span>
            </div>
          </div>
          <div className="w-full md:w-auto z-10">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6KxyGrdfmGs_80s-k__ZcVSZpZCdAvZNgBzBNYEKkiGGy-VOViFbwyPFTUmf6eIwhzB5-mjJOCaDhy_9BXJUFt6amR4h3NgTiwAEfvBMrjaG85aP6oZ2F92cQmsIEpRZn2sU_hDCnACv8maFHuiNNWUCTBAvX6P4aevEReMCNzSA3ziXzk8VEYFNaDUxroP_WRWXo6ESkd7XcIL74f0mOGXxmILbswrhkyU_k8ayWmUjjrT2BP_xXQJ-aQ3N6mSxMFCswrxKn7AA" 
              alt="Bakery at night" 
              className="rounded-[3rem] shadow-2xl w-full max-w-lg h-[400px] object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const CustomOrder = () => {
  return (
    <section className="py-32 px-6 md:px-12 bg-surface">
      <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row items-center gap-24">
        <div className="lg:w-1/2 space-y-10">
          <h2 className="text-4xl md:text-6xl font-black text-primary leading-tight">Праздник с доставкой</h2>
          <p className="text-xl text-on-surface-variant leading-relaxed">
            Нужен особенный торт на день рождения или большой праздничный пирог для семейного застолья? Мы принимаем индивидуальные заказы на выпечку любой сложности.
          </p>
          <ul className="space-y-6">
            {[
              "Заказ за 48 часов до торжества",
              "Только натуральный крем и начинки",
              "Бесплатная доставка от 3000₽"
            ].map((item) => (
              <li key={item} className="flex items-center gap-5">
                <div className="w-10 h-10 rounded-full bg-primary-container text-white flex items-center justify-center flex-shrink-0 shadow-md">
                  <Check size={20} />
                </div>
                <span className="text-lg font-medium text-on-surface-variant">{item}</span>
              </li>
            ))}
          </ul>
          <button className="px-12 py-5 btn-primary text-xl shadow-2xl shadow-primary/20">
            Оформить спецзаказ
          </button>
        </div>
        
        <div className="lg:w-1/2 grid grid-cols-2 gap-8">
          <motion.img 
            whileHover={{ y: -10 }}
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_ESXcY8EjTPLBthSwFobIxUFvSXMETYJdA6KjWQnY2XCtAhNSljy94TZ8Y3Anlw7j7zenotCCKXPNjbet3dYiGZ9tXsXAt_OONK9fmUULhs2osxEq8a7jWP14LWfiQtZ_UxAoBOQJE2AvzdI7jDB48F5ZamwrWdNDlc0GdKUtWzAT8tE6ShmYCPQnY6WLWY5EO4Ul4OV2dA3_TRwGDfHINm9Ovd3ZSsoUiS0MotANVCCkM1FooDTlATDwu3FYYAJPWWchuHBkVeo" 
            alt="Cake" 
            className="rounded-[3rem] shadow-2xl mt-16 object-cover aspect-[4/5]"
            referrerPolicy="no-referrer"
          />
          <motion.img 
            whileHover={{ y: -10 }}
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAP1SRZsT_jngMoPEIEv1rTGrWQIOrLS7PrwsAq9yjflvN5e96Rt3cPNgA0jvgCU-HiiT6oHLGHgLSAlwoCdn7j3Ctu_aaUL371dsu-imjMjZ67IxsArBPdtoA6PJ2K8JVQyQ6f-TQdVNLEnfiWe0QJkZ8MSJjaNRlc_rUQPcr6a2e1W7JLrJFJsleeEY8sOdw3-tXanjF34A9qtG-kt3tcfwQpys4EwM3AXuUH4EhiyGF3lSlk61Vzv9qe4PxXXrRZelvj6CgDFRk" 
            alt="Tart" 
            className="rounded-[3rem] shadow-2xl mb-16 object-cover aspect-[4/5]"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </section>
  );
};

const Locations = () => {
  const bakeries = [
    { name: "Главная пекарня", address: "г. Челябинск, ул. Дзержинского 110", time: "08:00 – 21:00", active: true },
    { name: "На Ленинском", address: "Ленинский пр-т, д. 42", time: "07:30 – 22:00", active: false },
    { name: "В Заречье", address: "ул. Зеленая, д. 7", time: "08:00 – 21:00", active: false },
  ];

  return (
    <section className="py-32 px-6 md:px-12 bg-surface-container-low" id="адреса">
      <div className="max-w-screen-2xl mx-auto">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-4xl md:text-6xl font-black text-primary">Мы рядом с вами</h2>
          <p className="text-xl text-on-surface-variant">35 пекарен в городах Челябинской области</p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1 space-y-6">
            {bakeries.map((b) => (
              <div 
                key={b.name} 
                className={`p-8 rounded-[2.5rem] bg-white border transition-all cursor-pointer shadow-lg hover:shadow-2xl ${b.active ? "border-secondary ring-2 ring-secondary/10" : "border-outline-variant/20 opacity-70"}`}
              >
                <h4 className="font-black text-2xl text-primary mb-3">{b.name}</h4>
                <p className="text-on-surface-variant mb-6 font-medium">{b.address}</p>
                <div className="flex items-center gap-3 text-sm font-bold text-primary bg-surface-container px-4 py-2 rounded-xl w-fit">
                  <Clock size={18} />
                  <span>{b.time}</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="lg:col-span-2 relative h-[550px] rounded-[4rem] overflow-hidden shadow-2xl border-8 border-white">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQ4b6HAjGFI0u1LdaNg60vBoEfixV-00e-fNGeDmr2hGtQWpdRkfkYSbcLlC2Xrn35efe9AJIOauUlcBMo-t_-WSEPjgnDCt19Dwd27FWH5X0ioaODs_fspE2GDiHhM0jgDyptUPEobmr1GIshkMsybU8fPiqlWVb_7MQ2ksQzjmH3zEiZqVxPtPBjBkytZLNqwVHR2DdcW8yDjXKYu1iCOKVejGKD8jKYUIWflVTdvii5GUksHb5fBUMFZT7y3V62zG8-CtpCAe4" 
              alt="Map" 
              className="w-full h-full object-cover grayscale opacity-90"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-primary/5"></div>
            <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="w-16 h-16 bg-primary rounded-full border-4 border-white shadow-2xl flex items-center justify-center text-white"
              >
                <MapPin size={32} />
              </motion.div>
              <div className="mt-4 bg-white px-5 py-2 rounded-2xl shadow-xl font-black text-sm text-primary border border-primary/10">
                Хлеберев на Дзержинского
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Reviews = () => {
  const reviews = [
    { name: "Анна Петрова", role: "Постоянный покупатель", text: "Лучший хлеб в Челябинске! Покупаю здесь бездрожжевой каждое утро. Хрустящая корочка просто божественная.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDkxLoX_RqiSUJpbosaPWhkP-rNe_-iEmr59GGa1yvAH_rvGJTkZA1B1YGcgX5y-uuniMXBKWRDh6MeprQq-dVXTKeLl1Pz4utptT2wU3aFG8W2TmJPaTwW6nB7eD_FInb4NRjcLgzu1RdyK3rxOBIOWwBqod5uVKeqhKXPLR3kDmslm_KRdwMSAwemDNDYhtCMBiM19OlzvQeE8VtzlPnuI5aClNX6-o7sQRrfeAfrhrbVvvFMgiLhKE5h56DULj0mWMq3Q7yvcrI" },
    { name: "Сергей Иванов", role: "Многодетный отец", text: "Заказывали торт сыну на 5 лет. Всё обсудили, декор превзошел ожидания, а начинка была легкой и в меру сладкой.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC3LAazPG-Dua3v-SDPoTtADP3LWRhMBAfjDx1hc8jiPi0Kzm4HycVMnjIzQfE504_EdlgIIZVNKS91QPsmdaXUjtaRrzm600YS9qiMfFSYSu06q5RmzmEqGrpwD0i_sO7hJpUe8ICzlUQEdej9fgwzPuWGqYpVo17X_CfCQaxDaPvHFxL5EACjf6gpJ0Z4bvXg0S1v0DfrMuccS0L6tYQ-B6zHjsYhl6hCF5guu-rEC_vLrIHSnq8vEmgYYohHXX0sZYHpv1ybTEY" },
    { name: "Елена К.", role: "Фрилансер", text: "Обожаю ваши круассаны и атмосферу. Прихожу сюда работать за ноутбуком — всегда приветливый персонал и вкусный кофе.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCUB8CcDqapVLQ79-eQ8hJtIwFmGnHbxNXRUKICHuTxc-3sRtfxY3AFKwqOzW4snEGichRsmXoOvSrtbqXMG_YqUmgvnMUZI77vzcblOKl35gRyeWA9d-xAm5XWvr100IUAjyGIMtAQAMV-oz3z2HYQMLb2Ya-d_3Ph9qtMiokxxMU5Gbyyikv3hgPEW97cQd2Ml2kGKkGJM7M83Jg_rtAJnXQhT2B5gc0FIO6bssr5kBfY8IR_CPxwlPyrtpVKgFHg8Zt4DqKIEOs" },
  ];

  return (
    <section className="py-32 px-6 md:px-12" id="отзывы">
      <div className="max-w-screen-2xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-black text-primary text-center mb-24">Отзывы наших гостей</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {reviews.map((r, idx) => (
            <motion.div 
              key={r.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="p-12 rounded-[3.5rem] bg-surface-container-low relative shadow-xl hover:shadow-2xl transition-shadow"
            >
              <div className="text-secondary mb-8 flex gap-1">
                {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
              </div>
              <p className="text-on-surface text-lg mb-10 leading-relaxed italic font-medium">
                "{r.text}"
              </p>
              <div className="flex items-center gap-5">
                <img src={r.img} alt={r.name} className="w-16 h-16 rounded-full object-cover border-2 border-primary/10 shadow-md" referrerPolicy="no-referrer" />
                <div>
                  <p className="font-black text-primary text-lg">{r.name}</p>
                  <p className="text-sm text-on-surface-variant font-bold">{r.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-surface-container-high pt-24 pb-12 px-6 md:px-12 rounded-t-[4rem]">
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="space-y-8">
            <a href="#" className="text-3xl font-black text-primary tracking-tight">ХЛЕБЕРЕВ</a>
            <p className="text-on-surface-variant leading-relaxed text-lg">
              Маленькая пекарня с большим сердцем. Ручная работа, любовь к делу и только натуральные продукты.
            </p>
            <div className="flex gap-4">
              {[Share2, Send, ThumbsUp].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all shadow-md">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
          
          <div className="space-y-8">
            <p className="font-black text-primary uppercase text-sm tracking-[0.2em]">Навигация</p>
            <ul className="space-y-4">
              {["О нас", "Продукция", "Адреса", "Отзывы"].map(item => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(" ", "-")}`} className="text-on-surface-variant hover:text-primary transition-colors text-lg font-medium">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-8">
            <p className="font-black text-primary uppercase text-sm tracking-[0.2em]">Услуги</p>
            <ul className="space-y-4">
              {["Доставка", "Торты на заказ", "Опт", "Контакты"].map(item => (
                <li key={item}>
                  <a href="#" className="text-on-surface-variant hover:text-primary transition-colors text-lg font-medium">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-8">
            <p className="font-black text-primary uppercase text-sm tracking-[0.2em]">Контакты</p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Phone className="text-secondary" />
                <span className="text-lg font-bold text-primary">+7 (351) 233-00-11</span>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="text-secondary" />
                <span className="text-lg font-medium text-on-surface-variant">Дзержинского 110, Челябинск</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-outline-variant/30 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-on-surface-variant font-bold opacity-60">© 2024 Хлеберев. Традиции в каждой корочке.</p>
          <div className="flex gap-8">
            <a href="#" className="text-sm font-bold text-on-surface-variant hover:text-primary">Privacy Policy</a>
            <a href="#" className="text-sm font-bold text-on-surface-variant hover:text-primary">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const BottomNav = () => {
  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 bg-background/90 backdrop-blur-2xl border-t border-outline-variant/20 flex justify-around items-center px-4 pb-8 pt-4 lg:hidden shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
      <div className="flex flex-col items-center gap-1 text-secondary">
        <div className="p-2 bg-secondary/10 rounded-2xl">
          <ShoppingBag size={24} />
        </div>
        <span className="text-[10px] font-black uppercase tracking-widest">Bakery</span>
      </div>
      <div className="flex flex-col items-center gap-1 text-on-surface-variant opacity-60">
        <ReceiptText size={24} />
        <span className="text-[10px] font-black uppercase tracking-widest">Orders</span>
      </div>
      <div className="flex flex-col items-center gap-1 text-on-surface-variant opacity-60">
        <Heart size={24} />
        <span className="text-[10px] font-black uppercase tracking-widest">Favorites</span>
      </div>
      <div className="flex flex-col items-center gap-1 text-on-surface-variant opacity-60">
        <User size={24} />
        <span className="text-[10px] font-black uppercase tracking-widest">Profile</span>
      </div>
    </nav>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen selection:bg-secondary-container selection:text-on-secondary-container">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Categories />
        <Features />
        <Promo />
        <CustomOrder />
        <Locations />
        <Reviews />
      </main>
      <Footer />
      <BottomNav />
    </div>
  );
}
