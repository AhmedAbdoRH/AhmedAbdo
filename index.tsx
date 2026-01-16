
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { 
  Heart, 
  BookOpen, 
  Users, 
  MessageCircle, 
  Phone, 
  Instagram, 
  Facebook, 
  Twitter,
  ChevronUp,
  Award,
  Calendar,
  Layers,
  CheckCircle2,
  Star,
  ArrowRight,
  FileText,
  Video,
  MonitorPlay,
  Zap,
  Youtube,
  GraduationCap,
  Microscope,
  Stethoscope
} from 'lucide-react';

// --- Constants ---
const WHATSAPP_LINK = "https://wa.me/201100434503";
const WHATSAPP_NUMBER = "+20 110 043 4503";

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
           <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg transform rotate-3">A</div>
           <div className="flex flex-col">
              <span className={`font-bold text-lg leading-none ${isScrolled ? 'text-emerald-900' : 'text-white'}`}>أحمد عبده</span>
              <span className={`text-[10px] tracking-widest uppercase ${isScrolled ? 'text-emerald-600' : 'text-emerald-300'}`}>أخصائي نفسي اكلينيكي</span>
           </div>
        </div>
        <div className={`hidden md:flex gap-8 font-semibold text-sm ${isScrolled ? 'text-gray-700' : 'text-white'}`}>
          <a href="#home" className="hover:text-emerald-500 transition-colors">الرئيسية</a>
          <a href="#about" className="hover:text-emerald-500 transition-colors">عن أحمد</a>
          <a href="#workshop" className="hover:text-emerald-500 transition-colors">ورشة سلام</a>
          <a href="#contact" className="hover:text-emerald-500 transition-colors">اتصل بنا</a>
        </div>
        <a 
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2 rounded-lg text-sm font-bold transition-all shadow-md"
        >
          حجز موعد
        </a>
      </div>
    </nav>
  );
};

const HeroCard: React.FC<{ icon: any, title: string, color: string, link: string }> = ({ icon: Icon, title, color, link }) => (
  <a 
    href={link} 
    target="_blank" 
    rel="noopener noreferrer"
    className={`flex flex-col items-center justify-center p-4 md:p-6 rounded-2xl border-2 ${color} bg-black/40 backdrop-blur-md hover:scale-105 hover:bg-black/60 transition-all cursor-pointer group shadow-xl h-full`}
  >
    <div className={`mb-4 p-4 rounded-xl bg-gray-800/50 group-hover:bg-white/10 transition-colors`}>
      <Icon size={36} className="text-white" />
    </div>
    <span className="text-white font-bold text-base md:text-lg whitespace-nowrap">{title}</span>
  </a>
);

const Hero = () => {
  const mainServices = [
    { 
      icon: Users, 
      title: "الجلسات", 
      color: "border-emerald-400", 
      link: "https://www.canva.com/design/DAFfnsc21PQ/Y3lOAGgdjEcNGb1SVAT5rw/view?utm_content=DAFfnsc21PQ&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h34bf7a7059" 
    },
    { 
      icon: MessageCircle, 
      title: "الاستشارات", 
      color: "border-blue-400", 
      link: "https://www.canva.com/design/DAFfnsrGMaA/jPRNGbeAK1btsDAyFTTuxA/view?utm_content=DAFfnsrGMaA&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h57447eef3a" 
    },
    { 
      icon: MonitorPlay, 
      title: "الكورسات", 
      color: "border-yellow-400", 
      link: "https://www.canva.com/design/DAFfnWjZAbA/3X3trjXJyRFjFF354w4VWA/view?utm_content=DAFfnWjZAbA&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h0d36a499d7" 
    },
    { 
      icon: FileText, 
      title: "المقالات", 
      color: "border-emerald-500", 
      link: "https://www.facebook.com/share/1LD8SGndxg/" 
    },
    { 
      icon: Zap, 
      title: "التدريب", 
      color: "border-red-400", 
      link: "https://www.canva.com/design/DAFvL6_l_2U/yKMpTsxmxjGaaBgb3lj6AA/view?utm_content=DAFvL6_l_2U&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h72eba3d226" 
    },
    { 
      icon: Youtube, 
      title: "صناعة المحتوى", 
      color: "border-cyan-400", 
      link: "https://youtube.com/@ahmedabdoshouq?si=Abu_rJ__s9OIj_5S" 
    },
  ];

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://i.ibb.co/9Hd0stCT/Contact-20260116-164727.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
      </div>
      
      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
        <div className="mb-8 flex flex-col items-center">
          <div className="mb-4 transform transition-transform hover:scale-105 duration-500">
             <img 
                src="https://i.ibb.co/VcmtF0zx/1000001121.png" 
                alt="Salam Workshop Logo" 
                className="h-48 md:h-64 w-auto object-contain drop-shadow-2xl"
             />
          </div>
          
          <h2 className="text-white text-xl md:text-3xl font-bold mt-4 mb-10 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
            خدمات الدعم والإرشاد النفسي
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-5 max-w-7xl mx-auto">
          {mainServices.map((service, index) => (
            <HeroCard key={index} {...service} />
          ))}
        </div>
        
        <div className="mt-16 animate-bounce opacity-50">
           <a href="#about" className="text-white">
              <ChevronUp size={32} className="rotate-180" />
           </a>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden text-right">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
          <div className="lg:w-1/2 relative">
            <div className="relative z-10">
              <img 
                src="https://i.ibb.co/ymBdp3Zt/FB-IMG-1768577435859.jpg" 
                alt="Ahmed Abdo Profile" 
                className="rounded-[3rem] shadow-2xl border-8 border-gray-50 object-cover h-[500px] w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl flex items-center gap-4 border border-emerald-50">
                 <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600">
                    <Heart size={32} fill="currentColor" />
                 </div>
                 <div className="text-right">
                    <p className="font-bold text-gray-900 text-xl leading-none mb-1">أحمد عبده</p>
                    <p className="text-sm text-emerald-600">أخصائي نفسي اكلينيكي</p>
                 </div>
              </div>
            </div>
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-emerald-50 rounded-full -z-0 blur-3xl opacity-60"></div>
          </div>
          
          <div className="lg:w-1/2">
            <h4 className="text-emerald-600 font-black mb-4 flex items-center gap-2">
              <div className="w-12 h-1 bg-emerald-600 rounded-full"></div>
              البطاقة التعريفية
            </h4>
            <h2 className="text-4xl font-black text-emerald-950 mb-6 leading-tight">أحمد عبده <br/> <span className="text-emerald-600">أخصائي نفسي اكلينيكي</span></h2>
            
            <div className="space-y-5 text-gray-600 text-lg leading-relaxed mb-8">
              <p className="flex items-start gap-3 justify-end">
                <span>طالب مؤهلات عليا - كلية الآداب - قسم علم النفس / جامعة بنها</span>
                <GraduationCap className="text-emerald-600 shrink-0 mt-1" size={24} />
              </p>
              <p className="flex items-start gap-3 justify-end">
                <span>باحث في مجال علم النفس القيم ومجال الأمراض السايكوسوماتية</span>
                <Microscope className="text-emerald-600 shrink-0 mt-1" size={24} />
              </p>
              <p className="bg-emerald-50 p-5 rounded-2xl border-r-4 border-emerald-600 text-emerald-900 font-bold text-xl">
                مؤسس لـ "تقنية 2.CBT" للتعامل مع التحديات النفسية
              </p>
              <p className="italic text-emerald-800 font-medium">
                "أطمح إلى طب شمولي لا يعتمد فقط على الكيمياء، يعالج الإنسان كـ وحدة واحدة ولا يفصل النفسي عن الجسدي"
              </p>
              <p>
                أقدم الجلسات والإستشارات والمحاضرات والدورات والمقالات التخصصية في مجال الصحة النفسية والجسدية وتطوير الذات، برؤية علمية حديثة.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {[
                { text: "جامعة بنها - علم نفس", icon: GraduationCap },
                { text: "باحث سيكوسوماتي", icon: Microscope },
                { text: "رؤية الطب الشمولي", icon: Stethoscope },
                { text: "مؤسس تقنية 2.CBT", icon: Zap }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center justify-end gap-3 bg-gray-50 p-4 rounded-2xl border border-transparent hover:border-emerald-200 transition-all hover:bg-white hover:shadow-md group">
                  <span className="font-bold text-gray-800">{item.text}</span>
                  <item.icon size={22} className="text-emerald-500 group-hover:scale-110 transition-transform" />
                </div>
              ))}
            </div>
            
            <a 
              href="https://www.facebook.com/share/1LD8SGndxg/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-emerald-950 text-white px-10 py-4 rounded-2xl hover:bg-emerald-900 transition-all font-bold group shadow-lg"
            >
               <ArrowRight size={20} className="group-hover:-translate-x-2 transition-transform" />
               اقرأ آخر المقالات
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const WorkshopSection = () => (
  <section id="workshop" className="py-24 bg-emerald-950 text-white relative overflow-hidden text-right">
     <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-3xl"></div>
     <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-16">
           <div className="lg:w-5/12 order-2 lg:order-1 sticky top-32">
              <span className="bg-red-600 text-white px-5 py-1.5 rounded-lg text-xs font-black mb-6 inline-block uppercase tracking-wider">ورشة سلام</span>
              <h2 className="text-5xl font-black mb-8 leading-tight">رحلة الوعي <br/> والتمكين المتكامل</h2>
              <p className="text-emerald-100/70 text-xl leading-relaxed mb-10">
                في ورشة سلام، نطبق مفاهيم "تقنية 2.CBT" ورؤيتنا للطب الشمولي لمساعدتك على فك شفرات التحديات النفسية والجسدية، لنصل معاً إلى حالة من التوازن والانسجام التام.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                 {["تطبيقات تقنية 2.CBT", "دمج النفس والجسد", "إرشاد اكلينيكي متخصص", "متابعة تطور الأداء"].map((item, i) => (
                   <div key={i} className="flex items-center justify-end gap-4 bg-white/5 p-4 rounded-xl border border-white/10">
                      <span className="text-emerald-50 font-bold">{item}</span>
                      <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center text-emerald-950"><CheckCircle2 size={18} /></div>
                   </div>
                 ))}
              </div>
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-emerald-500 text-emerald-950 px-12 py-5 rounded-2xl font-black hover:bg-emerald-400 transition-all shadow-2xl text-lg text-center"
              >
                سجل اهتمامك الآن
              </a>
           </div>
           
           <div className="lg:w-7/12 order-1 lg:order-2 w-full">
              <div className="space-y-8">
                  <div className="relative group">
                     <div className="absolute -inset-1 bg-emerald-500/20 rounded-[2rem] blur-xl group-hover:bg-emerald-500/30 transition-all duration-700"></div>
                     <img 
                       src="https://i.ibb.co/FkYYHM0Q/FB-IMG-1768577755771.jpg" 
                       alt="Workshop Main" 
                       className="relative z-10 rounded-[2rem] shadow-2xl w-full h-auto border border-white/10"
                     />
                  </div>
                  <div className="relative group">
                     <img 
                       src="https://i.ibb.co/Swdb95rH/FB-IMG-1768578063469.jpg" 
                       alt="Workshop Detail 1" 
                       className="rounded-[2rem] shadow-xl w-full h-auto border border-white/10 hover:scale-[1.01] transition-transform duration-500"
                     />
                  </div>
                  <div className="relative group">
                     <img 
                       src="https://i.ibb.co/NngBKscs/FB-IMG-1768578079363.jpg" 
                       alt="Workshop Detail 2" 
                       className="rounded-[2rem] shadow-xl w-full h-auto border border-white/10 hover:scale-[1.01] transition-transform duration-500"
                     />
                  </div>
              </div>
           </div>
        </div>
     </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="py-24 bg-gray-50 text-right">
     <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto bg-white rounded-[4rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row-reverse border border-gray-100">
           <div className="lg:w-1/2 p-10 lg:p-20">
              <h2 className="text-4xl font-black text-emerald-950 mb-4">تواصل مهني</h2>
              <p className="text-gray-500 mb-10 text-lg">يسعدني استقبال طلبات الجلسات العلاجية، أو التعاون في الأبحاث والمحاضرات العلمية.</p>
              
              <form className="space-y-6">
                 <div className="relative">
                    <input type="text" placeholder="الاسم الكامل" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-emerald-500 focus:bg-white transition-all outline-none text-right shadow-inner" />
                 </div>
                 <div className="relative">
                    <input type="email" placeholder="البريد الإلكتروني" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-emerald-500 focus:bg-white transition-all outline-none text-right shadow-inner" />
                 </div>
                 <div className="relative">
                    <textarea placeholder="رسالتكم أو تفاصيل طلب الاستشارة..." rows={4} className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-emerald-500 focus:bg-white transition-all outline-none text-right shadow-inner"></textarea>
                 </div>
                 <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-black py-5 rounded-2xl shadow-xl transition-all text-xl hover:-translate-y-1">إرسال الطلب</button>
              </form>
           </div>
           
           <div className="lg:w-1/2 bg-emerald-600 p-10 lg:p-20 text-white flex flex-col justify-between">
              <div>
                 <h3 className="text-3xl font-bold mb-10">معلومات الاتصال</h3>
                 <div className="space-y-10">
                    <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center justify-end gap-6 group cursor-pointer">
                       <div className="text-right">
                          <p className="font-bold text-xl mb-1">واتساب مباشر</p>
                          <p className="text-emerald-100" dir="ltr">{WHATSAPP_NUMBER}</p>
                       </div>
                       <div className="w-14 h-14 bg-white/10 group-hover:bg-white/30 rounded-2xl flex items-center justify-center transition-all shadow-lg"><Phone size={28} /></div>
                    </a>
                 </div>
              </div>
              
              <div className="mt-16">
                 <p className="font-bold mb-6 opacity-80 text-xl text-right">تابع المنصات التوعوية</p>
                 <div className="flex justify-end gap-5">
                    <a href="https://youtube.com/@ahmedabdoshouq?si=Abu_rJ__s9OIj_5S" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-white/10 hover:bg-white hover:text-emerald-600 rounded-full flex items-center justify-center transition-all shadow-xl"><Youtube size={28} /></a>
                    <a href="#" className="w-14 h-14 bg-white/10 hover:bg-white hover:text-emerald-600 rounded-full flex items-center justify-center transition-all shadow-xl"><Instagram size={28} /></a>
                    <a href="https://www.facebook.com/share/1LD8SGndxg/" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-white/10 hover:bg-white hover:text-emerald-600 rounded-full flex items-center justify-center transition-all shadow-xl"><Facebook size={28} /></a>
                    <a href="#" className="w-14 h-14 bg-white/10 hover:bg-white hover:text-emerald-600 rounded-full flex items-center justify-center transition-all shadow-xl"><Twitter size={28} /></a>
                 </div>
              </div>
           </div>
        </div>
     </div>
  </section>
);

const Footer = () => (
  <footer className="py-16 bg-white border-t border-gray-100">
     <div className="container mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-4 mb-8">
           <div className="w-12 h-12 bg-emerald-600 rounded-2xl flex items-center justify-center text-white font-black text-2xl shadow-emerald-500/20 shadow-xl">A</div>
           <span className="font-black text-emerald-950 text-2xl tracking-tight">أحمد عبده</span>
        </div>
        <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto leading-relaxed italic">
          "أطمح لطب شمولي يعالج الإنسان كوحدة واحدة، حيث النفس والجسد وجهان لعملة واحدة لا ينفصلان."
        </p>
        <p className="text-gray-400 text-sm mb-8 font-medium">© {new Date().getFullYear()} أحمد عبده - أخصائي نفسي اكلينيكي وباحث سيكوسوماتي. جميع الحقوق محفوظة.</p>
        <div className="flex justify-center gap-10 text-xs text-gray-400 font-bold uppercase tracking-[0.2em]">
           <a href="#" className="hover:text-emerald-600 transition-colors">سياسة الخصوصية</a>
           <a href="#" className="hover:text-emerald-600 transition-colors">اتفاقية الاستخدام</a>
        </div>
     </div>
  </footer>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-['Cairo'] selection:bg-emerald-100 selection:text-emerald-900">
      <Navbar />
      <Hero />
      <About />
      <WorkshopSection />
      <Contact />
      <Footer />
    </div>
  );
};

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
