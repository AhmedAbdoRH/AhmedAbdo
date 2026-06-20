
import React, { useState, useEffect, useRef } from 'react';
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
  Stethoscope,
  ArrowLeft,
  X,
  CalendarCheck,
  Sparkles,
  ShieldCheck,
  Clock,
  Brain,
  EyeOff,
  ExternalLink,
  MessageSquare,
  Play,
  BookOpen
} from 'lucide-react';

// --- Constants ---
const WHATSAPP_LINK = "https://wa.me/201100434503";
const WHATSAPP_NUMBER = "+20 110 043 4503";
const ATHAR_COMMUNITY_LINK = "https://chat.whatsapp.com/I6U7q91VQ3w477NCAHv2XG?mode=gi_t";
const QASR_COMMUNITY_LINK = "https://chat.whatsapp.com/I6U7q91VQ3w477NCAHv2XG?mode=gi_t";
const SARHNE_LINK = "https://sarhne.sarahah.pro/ahmedabdoshouq";
const INSTAGRAM_HIGHLIGHTS_LINK = "https://www.instagram.com/stories/highlights/17849816741871686/";
const UDEMY_LINK = "https://www.udemy.com/user/ahmed-abdo-206/";
const YOUTUBE_PLAYLIST_LINK = "https://www.youtube.com/playlist?list=PL0pcCSI9nRdc8XlO32BJKT-EusKuL0cgQ";

// --- Components ---

interface NavbarProps {
  page: string;
  onNavigate: (page: string) => void;
}

const Navbar = ({ page, onNavigate }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (page === 'sessions' || page === 'consultations' || page === 'courses') {
    const pageTitle = page === 'sessions' ? 'الجلسات' : page === 'consultations' ? 'الاستشارات' : 'الكورسات';
    const pageBadge = page === 'sessions' ? 'A' : 'A';
    return (
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg py-3">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <button onClick={() => onNavigate('home')} className="flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-bold transition-colors">
            <ArrowLeft size={20} />
            العودة للرئيسية
          </button>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg transform rotate-3">{pageBadge}</div>
            <span className="font-bold text-lg text-emerald-900">{pageTitle}</span>
          </div>
        </div>
      </nav>
    );
  }

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
            <button onClick={() => onNavigate('sessions')} className="hover:text-emerald-500 transition-colors bg-transparent border-none cursor-pointer font-semibold text-sm">الجلسات</button>
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
  link?: string;
  onClick?: () => void;
  key?: React.Key;
}

const HeroCard = ({ icon: Icon, title, color, link, onClick }: HeroCardProps) => {
  if (onClick) {
    return (
      <button onClick={onClick} className={`flex flex-col items-center justify-center p-4 md:p-6 rounded-2xl border-2 ${color} bg-black/40 backdrop-blur-md hover:scale-105 hover:bg-black/60 transition-all cursor-pointer group shadow-xl h-full w-full text-center`}>
        <div className="mb-4 p-4 rounded-xl bg-gray-800/50 group-hover:bg-white/10 transition-colors">
          <Icon size={36} className="text-white" />
        </div>
        <span className="text-white font-bold text-base md:text-lg whitespace-nowrap">{title}</span>
      </button>
    );
  }
  return (
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
};

interface HeroProps {
  onNavigate: (page: string) => void;
}

const Hero = ({ onNavigate }: HeroProps) => {
  const mainServices = [
    { icon: Users, title: "الجلسات", color: "border-emerald-400", link: undefined, onClick: () => onNavigate('sessions') },
    { icon: MessageCircle, title: "الاستشارات", color: "border-blue-400", link: undefined, onClick: () => onNavigate('consultations') },
    { icon: MonitorPlay, title: "الكورسات", color: "border-yellow-400", link: undefined, onClick: () => onNavigate('courses') },
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
            <HeroCard key={index} icon={service.icon} title={service.title} color={service.color} link={service.link} onClick={service.onClick} />
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
    { text: "باحث في الطب السيكوسوماتي", icon: Microscope },
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

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-0">
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

const certificates = [
  { image: "/الشهادات/دبلوم علم نفس اكلينيكي جامعة عين شمس.png", name: "دبلوم علم نفس إكلينيكي - جامعة عين شمس" },
  { image: "/الشهادات/التعامل مع ذوي الاحتياجات الخاصة.png", name: "التعامل مع ذوي الاحتياجات الخاصة" },
  { image: "/الشهادات/الدعم والارشاد النفسي.png", name: "الدعم والإرشاد النفسي" },
  { image: "/الشهادات/مهارات التواصل المتقدمة-certificate.jpg", name: "مهارات التواصل المتقدمة" },
  { image: "/الشهادات/التخلص من جلد الذات-certificate.jpg", name: "التخلص من جلد الذات" },
  { image: "/الشهادات/التعرّف على الذات - طريقك للسعادة-certificate.jpg", name: "التعرف على الذات - طريقك للسعادة" },
  { image: "/الشهادات/تدريب المدربين- دليلك المتكامل-certificate.jpg", name: "تدريب المدربين" },
  { image: "/الشهادات/لايف كوتشينج-certificate.jpg", name: "لايف كوتشينج" },
];

const Certificates = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
  <section ref={sectionRef} id="certificates" className="py-24 bg-gray-50 overflow-hidden">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h4 className="text-emerald-600 font-black mb-4 flex items-center justify-center gap-2">
          <div className="w-12 h-1 bg-emerald-600 rounded-full"></div>
          المؤهلات والاعتمادات
        </h4>
        <h2 className="text-4xl font-black text-emerald-950 mb-6 leading-tight">الشهادات</h2>
      </div>

      <div className="overflow-hidden" dir="ltr">
        <div className={`flex gap-6 w-max ${isVisible ? 'animate-scroll' : ''}`}>
          {certificates.concat(certificates).map((cert, index) => (
            <div key={index} className="flex-shrink-0 w-64 group">
              <div className="overflow-hidden rounded-2xl shadow-lg border border-emerald-100 bg-white transition-all duration-500 group-hover:shadow-2xl group-hover:scale-[1.03]">
                <img
                  src={cert.image}
                  alt={cert.name}
                  className="w-full h-44 object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <p dir="rtl" className="mt-3 text-center font-black text-gray-800 text-sm leading-tight">{cert.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
  );
};

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

const sessions = [
  { id: 1, image: "/الجلسات/1.png" },
  { id: 2, image: "/الجلسات/2.png" },
  { id: 3, image: "/الجلسات/3.png" },
];

const reviews = [
  "/اراء/لقطة شاشة 2026-06-19 092547.png",
  "/اراء/ورشة سلام - الجلسات.png",
];

const SessionsPage = ({ onNavigate }: { onNavigate: (page: string) => void }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <Navbar page="sessions" onNavigate={onNavigate} />
      <section className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-emerald-50 pt-28 pb-20 relative overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-20 left-0 w-80 h-80 bg-teal-200/20 rounded-full blur-3xl animate-float-fast"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-purple-200/10 rounded-full blur-3xl animate-float-medium"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-black text-emerald-950 mb-6 leading-tight">
              <span className="relative inline-block">
                الجلسات
                <span className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full opacity-40"></span>
              </span>
            </h1>
            <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              اختر الجلسة المناسبة لك وابدأ رحلة التعافي والتمكين في بيئة آلمة ومحترفة
            </p>

            <div className="flex justify-center gap-6 mt-8">
              <div className="flex items-center gap-2 text-emerald-600 font-bold text-sm">
                <ShieldCheck size={20} />
                سرية تامة
              </div>
              <div className="flex items-center gap-2 text-emerald-600 font-bold text-sm">
                <Clock size={20} />
                مرونة في المواعيد
              </div>
              <div className="flex items-center gap-2 text-emerald-600 font-bold text-sm">
                <Brain size={20} />
                تقنية 2.CBT
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {sessions.map((session, index) => (
              <div key={session.id} className="session-card group" style={{ animationDelay: `${index * 150}ms` }}>
                <div className="relative overflow-hidden rounded-[2.5rem] rounded-tr-md shadow-xl border border-white/60 bg-white transition-all duration-500 group-hover:shadow-[0_30px_60px_rgba(0,0,0,0.15)] group-hover:scale-[1.03] group-hover:border-emerald-200">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-[1]"></div>
                  
                  <div className="relative cursor-pointer" onClick={() => setSelectedImage(session.image)}>
                    <img
                      src={session.image}
                      alt={`جلسة ${session.id}`}
                      className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.05]"
                    />
                  </div>

                  <div className="relative z-[2] p-5 text-center">
                    <a
                      href={WHATSAPP_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="booking-btn inline-flex items-center justify-center gap-3 w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-4 rounded-2xl font-black text-base shadow-xl hover:shadow-2xl transition-all duration-300"
                    >
                      <CalendarCheck size={20} />
                      احجز جلستك الان
                      <ArrowRight size={18} className="rotate-180" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center gap-4 bg-emerald-950 text-white px-10 py-6 rounded-[2rem] font-black text-lg shadow-2xl hover:bg-emerald-900 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:animate-[shimmer_2s_infinite] skew-x-12"></div>
              <Phone size={24} className="relative z-10" />
              <span className="relative z-10">تواصل مباشر لحجز جلستك</span>
              <ArrowRight size={20} className="rotate-180 relative z-10" />
            </a>
          </div>

          <div className="mt-24">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-emerald-100/80 text-emerald-700 px-5 py-2 rounded-full font-bold text-sm mb-4">
                <Heart size={16} />
                آراء العملاء
              </div>
              <p className="text-gray-400 text-sm">اضغط على الصورة لعرضها بالحجم الكامل</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {reviews.map((review, index) => (
                <div key={index} className="session-card group cursor-pointer" style={{ animationDelay: `${index * 200}ms` }} onClick={() => setSelectedImage(review)}>
                  <div className="relative overflow-hidden rounded-[2rem] shadow-lg border border-emerald-100/50 bg-white transition-all duration-500 group-hover:shadow-xl group-hover:scale-[1.02]">
                    <div className="absolute top-3 right-3 z-10 bg-white/80 backdrop-blur-sm rounded-full p-1.5 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
                      <Sparkles size={14} className="text-emerald-500" />
                    </div>
                    <img
                      src={review}
                      alt={`رأي عميل ${index + 1}`}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {selectedImage && (
        <div className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in" onClick={() => setSelectedImage(null)}>
          <div className="absolute top-6 left-6 flex items-center gap-3">
            <button onClick={() => setSelectedImage(null)} className="text-white bg-white/10 hover:bg-white/20 rounded-full p-3 transition-all z-10 border border-white/20">
              <X size={28} />
            </button>
            <span className="text-white/60 text-sm font-medium">اضغط خارج الصورة للإغلاق</span>
          </div>
          <img src={selectedImage} alt="Session full view" className="max-w-full max-h-[90vh] object-contain rounded-3xl shadow-2xl animate-scale-in" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </>
  );
};

const ConsultationsPage = ({ onNavigate }: { onNavigate: (page: string) => void }) => {
  const consultationOptions = [
    {
      id: 1,
      title: "استشارات عادية",
      description: "تواصل مباشر عبر الواتساب مع الأخصائي",
      icon: MessageCircle,
      accent: "emerald",
      accentHex: "#10b981",
      link: WHATSAPP_LINK,
      buttonText: "تواصل واتساب",
      target: "_blank",
      detail: WHATSAPP_NUMBER,
    },
    {
      id: 2,
      title: "استشارات سرية",
      description: "مجهولة الهوية عبر منصة صراحة",
      icon: EyeOff,
      accent: "purple",
      accentHex: "#a855f7",
      link: SARHNE_LINK,
      buttonText: "أرسل استشارتك عبر موقع صارحني",
      target: "_blank",
      detail: "دون الكشف عن هويتك",
    },
    {
      id: 3,
      title: "إجابات سابقة",
      description: "تصفح الردود على استشارات سابقة",
      icon: Instagram,
      accent: "pink",
      accentHex: "#ec4899",
      link: INSTAGRAM_HIGHLIGHTS_LINK,
      buttonText: "شاهد",
      target: "_blank",
      detail: "عبر انستغرام",
    },
  ];

  return (
    <>
      <Navbar page="consultations" onNavigate={onNavigate} />
      <section className="min-h-screen bg-[#0a0a0f] pt-28 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDE4YzEuNjU3IDAgMy0xLjM0MyAzLTNzLTEuMzQzLTMtMy0zLTMgMS4zNDMtMyAzIDEuMzQzIDMgMyAzem0tMTIgMGMxLjY1NyAwIDMtMS4zNDMgMy0zcy0xLjM0My0zLTMtMy0zIDEuMzQzLTMgMyAxLjM0MyAzIDMgM3oiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[120px] animate-float-slow"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] animate-float-fast"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-pink-500/5 rounded-full blur-[100px] animate-float-medium"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-gray-400 px-5 py-2 rounded-full font-bold text-xs tracking-widest uppercase mb-8">
              <MessageSquare size={14} />
              consultation services
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-white mb-6 leading-none tracking-tight">
              الاستشارات
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 via-purple-500 to-pink-500 rounded-full mx-auto mb-8"></div>
            <p className="text-gray-400 text-lg md:text-xl max-w-xl mx-auto leading-relaxed">
              اختر الطريقة التي تناسبك للحصول على الاستشارة النفسية بكل خصوصية وأمان
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {consultationOptions.map((option, index) => {
              const Icon = option.icon;
              const isLast = option.id === 3;
              return (
                <div key={option.id} className={`session-card group ${isLast ? 'md:col-span-2' : ''}`} style={{ animationDelay: `${index * 200}ms` }}>
                  <div className="relative p-[1px] rounded-[2.5rem] rounded-tr-md bg-gradient-to-b from-white/10 to-white/5 transition-all duration-500 group-hover:from-white/20 group-hover:to-white/10 h-full">
                    <div className={`relative bg-[#12121a] rounded-[2.45rem] rounded-tr-[4px] p-8 transition-all duration-500 group-hover:bg-[#161622] h-full ${isLast ? 'flex flex-col md:flex-row items-center gap-8 text-center md:text-right' : 'text-center flex flex-col items-center'}`}>
                      <div className="absolute inset-0 rounded-[2.45rem] rounded-tr-[4px] bg-gradient-to-b from-transparent to-white/[0.02]"></div>
                      
                      <div className={`relative z-10 flex flex-col items-center ${isLast ? 'md:flex-row md:items-center md:gap-6 md:flex-1' : 'flex-1'}`}>
                        <div className="relative mb-8 md:mb-0 md:shrink-0">
                          <div className="absolute inset-0 rounded-2xl blur-xl opacity-50 transition-all duration-500 group-hover:opacity-80 group-hover:blur-2xl" style={{ background: option.accentHex }}></div>
                          <div className="relative w-16 h-16 rounded-2xl border border-white/10 flex items-center justify-center bg-white/5 transition-all duration-500 group-hover:scale-110 group-hover:border-white/20">
                            <Icon size={30} className="text-white transition-colors duration-500" style={{ color: option.accentHex }} />
                          </div>
                        </div>
                        
                        <div className={`${isLast ? 'md:text-right' : ''}`}>
                          <h3 className="font-black text-xl text-white mb-3">{option.title}</h3>
                          <p className="text-gray-500 text-sm font-medium mb-6 leading-relaxed">{option.description}</p>
                          
                          <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/5 bg-white/[0.02] text-xs font-bold text-gray-500 mb-8 md:mb-0">
                            <span className="w-1.5 h-1.5 rounded-full" style={{ background: option.accentHex }}></span>
                            {option.detail}
                          </div>
                        </div>
                      </div>

                      <a
                        href={option.link}
                        target={option.target}
                        rel="noopener noreferrer"
                        className={`relative z-10 booking-btn inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-black text-sm text-white border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group/btn ${isLast ? 'md:w-auto' : 'w-full'}`}
                        style={{ boxShadow: `0 0 30px ${option.accentHex}15` }}
                      >
                        {option.buttonText}
                        <ExternalLink size={16} className="opacity-60" />
                      </a>
                    </div>
                  </div>
                </div>
              )})}
          </div>

          <div className="mt-20 text-center">
            <div className="text-gray-600 text-xs tracking-widest uppercase mb-4">secure & confidential</div>
            <div className="flex items-center justify-center gap-8">
              <div className="flex items-center gap-2 text-gray-500 text-sm">
                <ShieldCheck size={18} className="text-emerald-500/60" />
                سرية تامة
              </div>
              <div className="w-1 h-1 rounded-full bg-gray-700"></div>
              <div className="flex items-center gap-2 text-gray-500 text-sm">
                <EyeOff size={18} className="text-purple-500/60" />
                هوية مجهولة
              </div>
              <div className="w-1 h-1 rounded-full bg-gray-700"></div>
              <div className="flex items-center gap-2 text-gray-500 text-sm">
                <MessageCircle size={18} className="text-pink-500/60" />
                دعم مستمر
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
  const CoursesPage = ({ onNavigate }: { onNavigate: (page: string) => void }) => {
  const courses = [
    {
      id: 1,
      image: "/الكورسات/2.png",
      title: "دورات على يوديمي",
      description: "كورسات احترافية في الصحة النفسية وتطوير الذات",
      icon: BookOpen,
      accent: "yellow",
      accentHex: "#eab308",
      link: UDEMY_LINK,
      buttonText: "شاهد على يوديمي",
      detail: "على منصة Udemy",
    },
    {
      id: 2,
      image: "/الكورسات/1.png",
      title: "قائمة تشغيل يوتيوب",
      description: "محاضرات وفيديوهات تعليمية مجانية",
      icon: Youtube,
      accent: "red",
      accentHex: "#ef4444",
      link: YOUTUBE_PLAYLIST_LINK,
      buttonText: "شاهد على يوتيوب",
      detail: "على يوتيوب",
    },
  ];

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <Navbar page="courses" onNavigate={onNavigate} />
      <section className="min-h-screen bg-[#0a0a0f] pt-28 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDE4YzEuNjU3IDAgMy0xLjM0MyAzLTNzLTEuMzQzLTMtMy0zLTMgMS4zNDMtMyAzIDEuMzQzIDMgMyAzem0tMTIgMGMxLjY1NyAwIDMtMS4zNDMgMy0zcy0xLjM0My0zLTMtMy0zIDEuMzQzLTMgMyAxLjM0MyAzIDMgM3oiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-yellow-500/10 rounded-full blur-[120px] animate-float-slow"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-red-500/10 rounded-full blur-[120px] animate-float-fast"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-gray-400 px-5 py-2 rounded-full font-bold text-xs tracking-widest uppercase mb-8">
              <Play size={14} />
              courses & training
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-white mb-6 leading-none tracking-tight">
              الكورسات
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 via-amber-500 to-red-500 rounded-full mx-auto mb-8"></div>
            <p className="text-gray-400 text-lg md:text-xl max-w-xl mx-auto leading-relaxed">
              كورسات ومحاضرات احترافية في مجال الصحة النفسية وتطوير الذات
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {courses.map((course, index) => {
              const Icon = course.icon;
              return (
                <div key={course.id} className="session-card group" style={{ animationDelay: `${index * 200}ms` }}>
                  <div className="relative p-[1px] rounded-[2.5rem] rounded-tr-md bg-gradient-to-b from-white/10 to-white/5 transition-all duration-500 group-hover:from-white/20 group-hover:to-white/10">
                    <div className="relative bg-[#12121a] rounded-[2.45rem] rounded-tr-[4px] overflow-hidden transition-all duration-500 group-hover:bg-[#161622]">
                      <div className="absolute inset-0 rounded-[2.45rem] rounded-tr-[4px] bg-gradient-to-b from-transparent to-white/[0.02]"></div>
                      
                      <div className="relative cursor-pointer" onClick={() => setSelectedImage(course.image)}>
                        <img
                          src={course.image}
                          alt={course.title}
                          className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>

                      <div className="relative z-10 p-6 text-center">
                        <div className="relative mb-6">
                          <div className="absolute inset-0 rounded-2xl blur-xl opacity-50 transition-all duration-500 group-hover:opacity-80 group-hover:blur-2xl" style={{ background: course.accentHex }}></div>
                          <div className="relative mx-auto w-14 h-14 rounded-2xl border border-white/10 flex items-center justify-center bg-[#1a1a24] transition-all duration-500 group-hover:scale-110 group-hover:border-white/20">
                            <Icon size={26} className="transition-colors duration-500" style={{ color: course.accentHex }} />
                          </div>
                        </div>

                        <a
                          href={course.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="booking-btn inline-flex items-center justify-center gap-3 w-full px-8 py-4 rounded-2xl font-black text-sm text-white border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group/btn"
                          style={{ boxShadow: `0 0 30px ${course.accentHex}15` }}
                        >
                          {course.buttonText}
                          <ExternalLink size={16} className="opacity-60" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )})}
          </div>
        </div>
      </section>

      {selectedImage && (
        <div className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in" onClick={() => setSelectedImage(null)}>
          <div className="absolute top-6 left-6 flex items-center gap-3">
            <button onClick={() => setSelectedImage(null)} className="text-white bg-white/10 hover:bg-white/20 rounded-full p-3 transition-all z-10 border border-white/20">
              <X size={28} />
            </button>
            <span className="text-white/60 text-sm font-medium">اضغط خارج الصورة للإغلاق</span>
          </div>
          <img src={selectedImage} alt="Course full view" className="max-w-full max-h-[90vh] object-contain rounded-3xl shadow-2xl animate-scale-in" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </>
  );
};

  const App = () => {
  const [page, setPage] = useState('home');

  if (page === 'sessions') {
    return <SessionsPage onNavigate={setPage} />;
  }

  if (page === 'consultations') {
    return <ConsultationsPage onNavigate={setPage} />;
  }

  if (page === 'courses') {
    return <CoursesPage onNavigate={setPage} />;
  }

  return (
    <div className="min-h-screen bg-white font-['Cairo'] selection:bg-emerald-100 selection:text-emerald-900">
      <Navbar page="home" onNavigate={setPage} />
      <Hero onNavigate={setPage} />
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
