
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { 
  Heart, 
  Users, 
  MessageCircle, 
  Phone, 
  Instagram, 
  Facebook, 
  Twitter,
  ChevronUp,
  CheckCircle2,
  ArrowRight,
  FileText,
  MonitorPlay,
  Zap,
  Youtube,
  GraduationCap,
  Microscope,
  Award,
  Stethoscope
} from 'lucide-react';

// --- Constants ---
const WHATSAPP_LINK = "https://wa.me/201100434503";
const WHATSAPP_NUMBER = "+20 110 043 4503";
const ATHAR_COMMUNITY_LINK = "https://chat.whatsapp.com/I6U7q91VQ3w477NCAHv2XG?mode=gi_t";
const QASR_COMMUNITY_LINK = "https://chat.whatsapp.com/I6U7q91VQ3w477NCAHv2XG?mode=gi_t";

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
            <a href="#certificates" className="hover:text-emerald-500 transition-colors">الشهادات</a>
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

interface HeroCardProps {
  icon: any;
  title: string;
  color: string;
  link: string;
  // Explicitly add key to satisfy strict prop typing if required by environment
  key?: React.Key;
}

const HeroCard = ({ icon: Icon, title, color, link }: HeroCardProps) => (
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
    { icon: Users, title: "الجلسات", color: "border-emerald-400", link: "https://ahmedabdoshouq.my.canva.site/therapy" },
    { icon: MessageCircle, title: "الاستشارات", color: "border-blue-400", link: "https://ahmedabdoshouq.my.canva.site/consulting" },
    { icon: MonitorPlay, title: "الكورسات", color: "border-yellow-400", link: "https://ahmedabdoshouq.my.canva.site/courses" },
    { icon: FileText, title: "المقالات", color: "border-purple-500", link: "https://www.facebook.com/share/1LD8SGndxg/" },
    { icon: Zap, title: "التدريب", color: "border-cyan-400", link: "https://ahmedabdoshouq.my.canva.site/training" },
    { icon: Youtube, title: "صناعة المحتوى", color: "border-red-400", link: "https://youtube.com/@ahmedabdoshouq?si=Abu_rJ__s9OIj_5S" },
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
            <HeroCard key={index} icon={service.icon} title={service.title} color={service.color} link={service.link} />
          ))}
        </div>

        <div className="mt-12 max-w-2xl mx-auto px-4">
          <a 
            href={QASR_COMMUNITY_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col md:flex-row items-center justify-between p-4 md:p-2 md:pr-8 bg-gradient-to-r from-emerald-600/20 to-teal-600/20 backdrop-blur-xl border border-white/30 rounded-[2rem] hover:border-emerald-400/50 transition-all duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.3)] overflow-hidden"
          >
            {/* Animated Background Glow */}
            <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:animate-[shimmer_2s_infinite] skew-x-12"></div>
            
            <div className="flex items-center gap-5 py-4 relative z-10">
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center text-white shadow-[0_10px_20px_rgba(16,185,129,0.3)] group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                <Users size={28} />
              </div>
              <div className="text-right">
                <h3 className="text-white font-black text-xl md:text-2xl mb-1 tracking-tight">انضم إلى مجتمع "أثر"</h3>
                <p className="text-emerald-100/80 text-xs md:text-sm font-medium">لمعرفة أحدث الفعاليات ومواكبة المحاضرات والورش</p>
              </div>
            </div>

            <div className="mt-4 md:mt-0 relative z-10">
              <div className="bg-white text-emerald-900 px-8 py-4 rounded-2xl font-black text-sm md:text-base flex items-center justify-center gap-3 shadow-xl group-hover:bg-emerald-500 group-hover:text-white transition-all duration-500 transform group-hover:translate-x-[-5px]">
                انضم الآن
                <div className="bg-emerald-100 text-emerald-600 p-1 rounded-lg group-hover:bg-white/20 group-hover:text-white transition-colors">
                  <ArrowRight size={18} className="rotate-180" />
                </div>
              </div>
            </div>
          </a>
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
  const credentials = [
    { text: "جامعة بنها - علم نفس", icon: GraduationCap },
    { text: "باحث سيكوسوماتي", icon: Microscope },
    { text: "رؤية الطب الشمولي", icon: Stethoscope },
    { text: "مطور لتقنية 2.CBT", icon: Zap }
  ];

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
          </div>
          
          <div className="lg:w-1/2">
            <h4 className="text-emerald-600 font-black mb-4 flex items-center gap-2">
              <div className="w-12 h-1 bg-emerald-600 rounded-full"></div>
              البطاقة التعريفية
            </h4>
            <h2 className="text-4xl font-black text-emerald-950 mb-6 leading-tight">أحمد عبده <br/> <span className="text-emerald-600">أخصائي نفسي اكلينيكي</span></h2>
            
            <div className="space-y-5 text-gray-600 text-lg leading-relaxed mb-8">
              <p className="flex items-start gap-3 justify-end italic text-emerald-800 font-medium">
                "أطمح إلى طب شمولي لا يعتمد فقط على الكيمياء، يعالج الإنسان كـ وحدة واحدة ولا يفصل النفسي عن الجسدي"
              </p>
              <p>
                أقدم الجلسات والإستشارات والمحاضرات والدورات والمقالات التخصصية في مجال الصحة النفسية والجسدية وتطوير الذات، برؤية علمية حديثة.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {credentials.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex items-center justify-end gap-3 bg-gray-50 p-4 rounded-2xl border border-transparent hover:border-emerald-200 transition-all hover:bg-white hover:shadow-md group">
                    <span className="font-bold text-gray-800">{item.text}</span>
                    <Icon size={22} className="text-emerald-500 group-hover:scale-110 transition-transform" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Certificates = () => (
  <section id="certificates" className="py-24 bg-gray-50 text-right">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h4 className="text-emerald-600 font-black mb-4 flex items-center justify-center gap-2">
          <div className="w-12 h-1 bg-emerald-600 rounded-full"></div>
          المؤهلات والاعتمادات
        </h4>
        <h2 className="text-4xl font-black text-emerald-950 mb-6 leading-tight">الشهادات المهنية</h2>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-[2rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative bg-white rounded-[2rem] overflow-hidden shadow-2xl border border-emerald-100">
            <a href="https://ibb.co/HT4xTB67" target="_blank" rel="noopener noreferrer">
              <img 
                src="https://i.ibb.co/Swydw5bN/Contact.png" 
                alt="Certificates" 
                className="w-full h-auto object-contain transform group-hover:scale-[1.02] transition-transform duration-500"
              />
            </a>
            <div className="absolute -bottom-12 left-0 right-0 p-4 text-center">
                 <div className="flex items-center justify-center gap-3">
                    <span className="font-bold text-xl text-emerald-950">الشهادات والاعتمادات الرسمية</span>
                    <Award size={24} className="text-emerald-600" />
                 </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const WorkshopSection = () => (
  <section id="workshop" className="py-24 bg-emerald-950 text-white relative overflow-hidden text-right">
     <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-16">
           <div className="lg:w-5/12 order-2 lg:order-1 lg:sticky lg:top-32">
              <span className="bg-red-600 text-white px-5 py-1.5 rounded-lg text-xs font-black mb-6 inline-block uppercase tracking-wider">ورشة سلام</span>
              <h2 className="text-5xl font-black mb-8 leading-tight">رحلة الوعي <br/> والتمكين المتكامل</h2>
              <p className="text-emerald-100/70 text-xl leading-relaxed mb-10">
                في ورشة سلام، نطبق مفاهيم "تقنية 2.CBT" ورؤيتنا للطب الشمولي لمساعدتك على فك شفرات التحديات النفسية والجسدية.
              </p>
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-emerald-500 text-emerald-950 px-12 py-5 rounded-2xl font-black hover:bg-emerald-400 transition-all shadow-2xl text-lg text-center"
              >
                سجل اهتمامك الآن
              </a>
           </div>
           <div className="lg:w-7/12 order-1 lg:order-2 w-full space-y-8">
              <img src="https://i.ibb.co/FkYYHM0Q/FB-IMG-1768577755771.jpg" alt="Workshop 1" className="rounded-[2rem] shadow-2xl w-full border border-white/10" />
              <img src="https://i.ibb.co/Swdb95rH/FB-IMG-1768578063469.jpg" alt="Workshop 2" className="rounded-[2rem] shadow-xl w-full border border-white/10" />
           </div>
        </div>
     </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="py-24 bg-gray-50 text-right">
     <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-emerald-600 rounded-[3rem] overflow-hidden shadow-2xl p-10 lg:p-16 text-white flex flex-col md:flex-row items-center justify-between gap-10">
           <div className="text-center md:text-right">
              <h2 className="text-4xl font-black mb-4">تواصل مباشر</h2>
              <p className="text-emerald-50 text-lg mb-0">يسعدني استقبال استفساراتكم وحجز المواعيد عبر الواتساب.</p>
           </div>
           
           <div className="flex flex-col items-center md:items-end gap-8">
              <a 
                href={WHATSAPP_LINK} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-6 group bg-white/10 hover:bg-white/20 p-6 rounded-3xl transition-all border border-white/20 shadow-xl"
              >
                 <div className="text-right">
                    <p className="font-bold text-xl">واتساب مباشر</p>
                    <p className="text-emerald-100" dir="ltr">{WHATSAPP_NUMBER}</p>
                 </div>
                 <div className="w-16 h-16 bg-white text-emerald-600 rounded-2xl flex items-center justify-center transition-all shadow-lg group-hover:scale-110">
                    <Phone size={32} />
                 </div>
              </a>

              <div className="flex gap-5">
                 <a href="https://youtube.com/@ahmedabdoshouq" target="_blank" className="w-14 h-14 bg-white/10 hover:bg-white hover:text-emerald-600 rounded-2xl flex items-center justify-center transition-all border border-white/10"><Youtube size={28} /></a>
                 <a href="https://facebook.com/share/1LD8SGndxg/" target="_blank" className="w-14 h-14 bg-white/10 hover:bg-white hover:text-emerald-600 rounded-2xl flex items-center justify-center transition-all border border-white/10"><Facebook size={28} /></a>
                 <a href="#" target="_blank" className="w-14 h-14 bg-white/10 hover:bg-white hover:text-emerald-600 rounded-2xl flex items-center justify-center transition-all border border-white/10"><Instagram size={28} /></a>
              </div>
           </div>
        </div>
     </div>
  </section>
);

const Footer = () => (
  <footer className="py-16 bg-white border-t border-gray-100 text-center">
     <div className="flex items-center justify-center gap-4 mb-6">
        <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center text-white font-black text-xl">A</div>
        <span className="font-black text-emerald-950 text-xl">أحمد عبده</span>
     </div>
     <p className="text-gray-400 text-sm italic mb-4 max-w-lg mx-auto">"أطمح لطب شمولي يعالج الإنسان كوحدة واحدة لا يتجزأ فيها النفسي عن الجسدي."</p>
     <p className="text-gray-400 text-xs">© {new Date().getFullYear()} أحمد عبده. جميع الحقوق محفوظة.</p>
  </footer>
);

const App = () => {
  return (
    <div className="min-h-screen bg-white font-['Cairo'] selection:bg-emerald-100 selection:text-emerald-900">
      <Navbar />
      <Hero />
      <About />
      <Certificates />
      <WorkshopSection />
      <Contact />
      <Footer />
    </div>
  );
};

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
}
