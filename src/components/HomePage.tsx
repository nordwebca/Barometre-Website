"use client";

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { MapPin, Users, Heart, Zap, ChevronRight, Menu, X, Building2, CalendarDays, Star, Smartphone, UserPlus, MessageCircle, Quote, ShieldCheck, Lock, EyeOff, Activity, Clock, Plus, Send } from 'lucide-react';
import type { Dictionary } from '@/dictionaries/fr';

const MapComponent = dynamic(() => import('@/components/MapComponent'), { ssr: false, loading: () => <div className="w-full h-full flex items-center justify-center bg-bg-darker"><div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-highlight"></div></div> });

export default function HomePage({ dict, lang }: { dict: Dictionary, lang: string }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isMapModalOpen, setIsMapModalOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<any>(null);
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const languageToggleUrl = `/${lang === 'fr' ? 'en' : 'fr'}`;
  const languageToggleText = lang === 'fr' ? 'EN' : 'FR';

  const barsData = [
    { name: "La Distillerie No.1", location: "Quartier Latin, Montréal", status: dict.bars.statusVeryActive, color: "from-[#FFB566] to-[#D55A2F]", users: `142 ${dict.bars.online}`, description: lang === 'en' ? "Famous for cocktails served in Mason jars, this is a must-visit for students and young professionals." : "Célèbre pour ses cocktails servis dans des pots Masson, la Distillerie est incontournable pour les étudiants et jeunes professionnels.", ambiance: lang === 'en' ? "Cocktails & Party" : "Cocktails & Party", age: "18-25" },
    { name: "Club Moka", location: "Centre-ville, Montréal", status: dict.bars.statusActive, color: "from-[#4A90E2] to-[#1D4E89]", users: `85 ${dict.bars.online}`, description: lang === 'en' ? "One of the most trendy clubs in the metropolis with a large dance floor, refined cocktails and electro-house music." : "Un des clubs les plus branchés de la métropole avec une large piste de danse, des cocktails raffinés et de la musique électro-house.", ambiance: "Clubbing & VIP", age: "20-30" },
    { name: "Le Sacrilège", location: "Saint-Jean-Baptiste, Québec", status: dict.bars.statusVeryActive, color: "from-green-400 to-emerald-700", users: `115 ${dict.bars.online}`, description: lang === 'en' ? "Warm and historic neighborhood bar with a beautiful inner courtyard and an impressive selection of microbrewery beers." : "Bar de quartier chaleureux et historique avec une magnifique cour intérieure et une impressionnante sélection de bières de microbrasserie.", ambiance: "Chill & Microbrasseries", age: "22-35" },
    { name: "Pub Universitaire", location: "Campus ULaval, Québec", status: dict.bars.statusActive, color: "from-purple-400 to-fuchsia-700", users: `64 ${dict.bars.online}`, description: lang === 'en' ? "The classic gathering point in the heart of the campus. Billiards, affordable pitchers and the perfect place to unwind after classes." : "Le point de rassemblement classique au cœur du campus. Billards, pichets abordables et l'endroit parfait pour décompresser après les cours.", ambiance: "Étudiante & Festive", age: "18-24" }
  ];

  const eventsData = [
    { name: "Festival Nordique", date: "15 " + (lang === 'en' ? 'March' : 'Mars') + " 2026", location: "Parc de la Francophonie, Québec", color: "from-highlight to-primary", description: lang === 'en' ? "The biggest nordic gathering of the year. Join us at the heart of the festival for a special Baromètre dating zone from 6pm to midnight. Open air dance floor and ice bars." : "Le plus grand rassemblement nordique de l'année. Rejoignez-nous au cœur du festival pour une zone spéciale de rencontres Baromètre de 18h à minuit. Piste de danse en plein air et bars de glace.", ambiance: lang === 'en' ? "Open air festival" : "Festival en plein air", age: "18-40" },
    { name: "Soirée Moka Club", date: "22 " + (lang === 'en' ? 'March' : 'Mars') + " 2026", location: "Club Moka, Montréal", color: "from-primary to-highlight", description: lang === 'en' ? "The biggest student party of the year. Baromètre will be the official app of the night. Free shots for the first matches verified on site!" : "La plus grande soirée étudiante de l'année. Baromètre sera l'application officielle de la soirée. Tournée de shots offerts pour les premiers matchs validés sur place !", ambiance: lang === 'en' ? "Student storm" : "Tempête étudiante", age: "18-25" },
    { name: "Igloofest Québec", date: (lang === 'en' ? 'April' : 'Avril') + " 2026", location: "Vieux-Port, Québec", color: "from-[#4A90E2] to-highlight", description: lang === 'en' ? "Warm up the atmosphere! A special Baromètre activation with exclusive access to the VIP lounge by matching. Come dance under the stars to the rhythm of electronic music." : "Réchauffez l'atmosphère! Une activation spéciale Baromètre avec accès exclusif au lounge VIP en matchant. Venez danser sous les étoiles au rythme de la musique électronique.", ambiance: lang === 'en' ? "Electronic & Winter" : "Électronique & Hivernal", age: "20-35" }
  ];


  return (
    <div className="flex flex-col min-h-screen relative">
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'py-4 glass shadow-lg' : 'py-6'}`}>
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
          <div className="flex items-center gap-2 font-extrabold text-2xl tracking-wider">
            <Heart className="text-highlight" />
            <span>BAROMÈTRE</span>
          </div>

          <div className="hidden md:flex items-center gap-10">
            <a href="#concept" className="font-semibold text-white/90 hover:text-highlight transition-colors">{dict.nav.home}</a>
            <a href="#how-it-works" className="font-semibold text-white/90 hover:text-highlight transition-colors">{dict.nav.howItWorks}</a>
            <a href="#features" className="font-semibold text-white/90 hover:text-highlight transition-colors">{dict.nav.features}</a>
            <a href="#bars" className="font-semibold text-white/90 hover:text-highlight transition-colors">{dict.nav.locations}</a>
            <a href="#security" className="font-semibold text-white/90 hover:text-highlight transition-colors">{dict.nav.security}</a>
            <a href="#faq" className="font-semibold text-white/90 hover:text-highlight transition-colors">{dict.nav.faq}</a>
            <div className="flex items-center gap-4">
              <a href={languageToggleUrl} className="font-extrabold text-sm text-highlight hover:text-white transition-colors bg-highlight/10 p-2 rounded-full border border-highlight/30">
                {languageToggleText}
              </a>
              <button className="btn btn-primary px-6 py-2" onClick={() => setIsJoinModalOpen(true)}>{dict.nav.join}</button>
            </div>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <a href={languageToggleUrl} className="font-extrabold text-sm text-highlight hover:text-white transition-colors bg-highlight/10 p-2 rounded-full border border-highlight/30">
              {languageToggleText}
            </a>
            <div className="cursor-pointer" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full p-8 flex flex-col gap-6 glass border-t border-[#5B628F]/20 md:hidden">
             <a href="#concept" className="font-semibold text-lg" onClick={() => setIsMobileMenuOpen(false)}>{dict.nav.home}</a>
            <a href="#how-it-works" className="font-semibold text-lg" onClick={() => setIsMobileMenuOpen(false)}>{dict.nav.howItWorks}</a>
            <a href="#features" className="font-semibold text-lg" onClick={() => setIsMobileMenuOpen(false)}>{dict.nav.features}</a>
            <a href="#bars" className="font-semibold text-lg" onClick={() => setIsMobileMenuOpen(false)}>{dict.nav.locations}</a>
            <a href="#security" className="font-semibold text-lg" onClick={() => setIsMobileMenuOpen(false)}>{dict.nav.security}</a>
            <a href="#faq" className="font-semibold text-lg" onClick={() => setIsMobileMenuOpen(false)}>{dict.nav.faq}</a>
            <button className="btn btn-primary w-full py-3" onClick={() => setIsJoinModalOpen(true)}>{dict.nav.join}</button>
          </div>
        )}
      </nav>

      {isJoinModalOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-bg-dark/80 backdrop-blur-sm" onClick={() => setIsJoinModalOpen(false)}></div>
          <div className="glass-card relative w-full max-w-md z-10 animate-in fade-in zoom-in duration-300 border border-highlight/40 p-8 flex flex-col items-center text-center">
            <button onClick={() => setIsJoinModalOpen(false)} className="absolute right-6 top-6 text-muted hover:text-white transition-colors bg-bg-darker p-2 rounded-full cursor-pointer z-20">
              <X size={20} />
            </button>
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-highlight to-primary flex items-center justify-center mb-6 border-2 border-highlight/40 shadow-lg mx-auto">
              <Heart className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">{dict.modal.title}</h3>
            <p className="text-muted mb-8">{dict.modal.subtitle}</p>
            <a href="#" className="btn btn-primary w-full py-4 text-lg shadow-xl hover:scale-[1.03] transition-transform duration-200" onClick={() => setIsJoinModalOpen(false)}>
              {dict.modal.download}
            </a>
          </div>
        </div>
      )}

      <section className="flex-1 flex flex-col lg:flex-row items-center max-w-7xl mx-auto px-8 pt-32 lg:pt-40 pb-16 gap-16 min-h-screen" id="concept">
        <div className="flex-1 max-w-2xl text-center lg:text-left z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold text-highlight mb-8 border border-highlight/30 glass">
            <MapPin className="text-highlight mr-2" size={16} />
            <span>{dict.hero.badge}</span>
          </div>
          <h1 className="text-6xl lg:text-7xl/tight font-extrabold mb-6 tracking-tight">
            {dict.hero.title1} <span className="gradient-text">{dict.hero.titleHighlight}</span> {dict.hero.title2}
          </h1>
          <p className="text-xl text-[#a0a8cc] leading-relaxed mb-12">
            {dict.hero.description}
          </p>
          <div className="flex flex-col gap-4 justify-center lg:justify-start w-full md:w-auto">
            <button className="btn btn-primary px-8 py-4 text-lg">
              {dict.hero.download} <ChevronRight className="ml-2 transition-transform group-hover:translate-x-1" />
            </button>
            <a href="#how-it-works" className="btn btn-primary px-8 py-4 text-lg text-center no-underline">
              {dict.hero.discover}
            </a>
          </div>
        </div>

        <div className="flex-1 relative flex justify-center items-center w-full max-w-md mx-auto mt-12 lg:mt-0">
          <div className="relative w-full max-w-[320px] aspect-[9/19] z-10">
            <div className="glass-card phone-screen !p-6 flex flex-col gap-4">
              <div className="flex items-center gap-3 font-semibold text-sm mb-4 pb-4 border-b border-[#5B628F]/20">
                <Building2 className="text-highlight" />
                <span>{dict.mock.location}</span>
              </div>
              <div className="bg-[#192030]/50 rounded-2xl p-4 flex items-center gap-4 hover:scale-[1.02] transition-transform">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-highlight to-primary flex-shrink-0"></div>
                <div className="flex-1">
                  <h3 className="text-base font-bold mb-1">{dict.mock.user1}</h3>
                  <p className="text-xs text-muted">{dict.mock.dist1}</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#192030]/80 flex items-center justify-center text-highlight shadow-sm">
                  <Heart size={20} />
                </div>
              </div>
              <div className="bg-[#192030]/50 rounded-2xl p-4 flex items-center gap-4 hover:scale-[1.02] transition-transform">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-muted to-primary flex-shrink-0"></div>
                <div className="flex-1">
                  <h3 className="text-base font-bold mb-1">{dict.mock.user2}</h3>
                  <p className="text-xs text-muted">{dict.mock.dist2}</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#192030]/80 flex items-center justify-center text-muted shadow-sm">
                  <Users size={20} />
                </div>
              </div>
            </div>

            <div className="absolute w-[300px] h-[300px] rounded-full blur-[80px] -z-10 opacity-40 bg-highlight -top-12 -right-12"></div>
            <div className="absolute w-[250px] h-[250px] rounded-full blur-[80px] -z-10 opacity-30 bg-primary -bottom-12 -left-12"></div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-highlight/10 to-primary/20 border-b border-[#5B628F]/20 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
            <div className="p-6">
              <div className="flex justify-center mb-4"><Building2 className="text-highlight" size={32} /></div>
              <h3 className="text-5xl font-extrabold text-white mb-2">50+</h3>
              <p className="text-lg text-muted font-medium">{dict.stats.locations}</p>
            </div>
            <div className="p-6 pt-10 md:pt-6">
              <div className="flex justify-center mb-4"><Heart className="text-highlight" size={32} /></div>
              <h3 className="text-5xl font-extrabold text-white mb-2">{dict.stats.matchesValue}</h3>
              <p className="text-lg text-muted font-medium">{dict.stats.matches}</p>
            </div>
            <div className="p-6 pt-10 md:pt-6">
              <div className="flex justify-center mb-4"><Clock className="text-highlight" size={32} /></div>
              <h3 className="text-5xl font-extrabold text-white mb-2">{dict.stats.timeValue}</h3>
              <p className="text-lg text-muted font-medium">{dict.stats.time}</p>
            </div>
            <div className="p-6 pt-10 md:pt-6">
              <div className="flex justify-center mb-4"><Activity className="text-highlight" size={32} /></div>
              <h3 className="text-5xl font-extrabold text-white mb-2">{dict.stats.usersValue}</h3>
              <p className="text-lg text-muted font-medium">{dict.stats.users}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bg-dark border-t border-[#5B628F]/20 py-32 relative" id="how-it-works">
        <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-highlight/50 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{dict.howitworks.title} <span className="text-highlight">{dict.howitworks.titleHighlight}</span> ?</h2>
            <p className="text-xl text-muted">{dict.howitworks.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-transparent via-highlight/50 to-transparent -z-10"></div>

            <div className="flex flex-col items-center text-center">
               <div className="w-24 h-24 rounded-full bg-bg-darker border-2 border-highlight flex items-center justify-center mb-6 relative shadow-[0_0_30px_rgba(68,119,206,0.3)]">
                <span className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-highlight text-white font-bold flex items-center justify-center border-4 border-bg-dark">1</span>
                <MapPin size={40} className="text-highlight" />
              </div>
              <h3 className="text-2xl font-bold mb-3">{dict.howitworks.step1Title}</h3>
              <p className="text-muted leading-relaxed">{dict.howitworks.step1Desc}</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-bg-darker border-2 border-highlight flex items-center justify-center mb-6 relative shadow-[0_0_30px_rgba(68,119,206,0.3)]">
                <span className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-highlight text-white font-bold flex items-center justify-center border-4 border-bg-dark">2</span>
                <UserPlus size={40} className="text-highlight" />
              </div>
              <h3 className="text-2xl font-bold mb-3">{dict.howitworks.step2Title}</h3>
              <p className="text-muted leading-relaxed">{dict.howitworks.step2Desc}</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-bg-darker border-2 border-highlight flex items-center justify-center mb-6 relative shadow-[0_0_30px_rgba(68,119,206,0.3)]">
                <span className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-highlight text-white font-bold flex items-center justify-center border-4 border-bg-dark">3</span>
                <MessageCircle size={40} className="text-highlight" />
              </div>
              <h3 className="text-2xl font-bold mb-3">{dict.howitworks.step3Title}</h3>
              <p className="text-muted leading-relaxed">{dict.howitworks.step3Desc}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bg-darker py-32 border-t border-[#5B628F]/20 relative" id="features">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-highlight/5 via-transparent to-transparent"></div>
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{dict.features.title} <span className="text-highlight">{dict.features.titleHighlight}</span> ?</h2>
            <p className="text-xl text-muted">{dict.features.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glass-card">
              <div className="w-16 h-16 rounded-2xl bg-bg-darker flex items-center justify-center mb-6 shadow-inner">
                <MapPin className="text-highlight" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">{dict.features.feat1Title}</h3>
              <p className="text-muted leading-relaxed">
                {dict.features.feat1Desc}
              </p>
            </div>

            <div className="glass-card">
               <div className="w-16 h-16 rounded-2xl bg-bg-darker flex items-center justify-center mb-6 shadow-inner">
                <Zap className="text-highlight" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">{dict.features.feat2Title}</h3>
              <p className="text-muted leading-relaxed">
                {dict.features.feat2Desc}
              </p>
            </div>

            <div className="glass-card">
               <div className="w-16 h-16 rounded-2xl bg-bg-darker flex items-center justify-center mb-6 shadow-inner">
                <Heart className="text-highlight" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">{dict.features.feat3Title}</h3>
              <p className="text-muted leading-relaxed">
                {dict.features.feat3Desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bg-dark py-32 border-t border-[#5B628F]/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-[0.03]"></div>
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{dict.testimonials.title} <span className="text-highlight">{dict.testimonials.titleHighlight}</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-card flex flex-col justify-between">
              <div>
                <Quote className="text-highlight/40 mb-4" size={40} />
                <p className="text-lg italic leading-relaxed text-white/90 mb-8">
                  {dict.testimonials.quote1}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#FFB566] to-[#D55A2F]"></div>
                <div>
                  <h4 className="font-bold">{dict.testimonials.name1}</h4>
                  <p className="text-sm text-highlight">{dict.testimonials.loc1}</p>
                </div>
              </div>
            </div>

             <div className="glass-card flex flex-col justify-between">
              <div>
                <Quote className="text-highlight/40 mb-4" size={40} />
                <p className="text-lg italic leading-relaxed text-white/90 mb-8">
                  {dict.testimonials.quote2}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#4A90E2] to-[#1D4E89]"></div>
                <div>
                  <h4 className="font-bold">{dict.testimonials.name2}</h4>
                  <p className="text-sm text-highlight">{dict.testimonials.loc2}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bg-darker border-t border-[#5B628F]/20 py-32 relative" id="bars">
         <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold text-highlight mb-6 border border-highlight/30 glass">
              <Building2 className="text-highlight mr-2" size={16} />
              <span>{dict.bars.badge}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{dict.bars.title} <span className="text-highlight">{dict.bars.titleHighlight}</span></h2>
            <p className="text-xl text-muted">{dict.bars.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {barsData.map((bar, i) => (
              <div 
                key={i} 
                className="glass-card flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300 cursor-pointer border border-[#5B628F]/20 hover:border-highlight/40"
                onClick={() => setSelectedLocation(bar)}
              >
                <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${bar.color} flex items-center justify-center shadow-lg mb-4`}>
                  <Building2 size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{bar.name}</h3>
                <p className="text-sm text-muted mb-4 flex items-center justify-center gap-1">
                  <MapPin size={14} /> {bar.location}
                </p>
                <div className="mt-auto pt-4 border-t border-[#5B628F]/20 w-full flex justify-between items-center">
                  <div className="flex flex-col items-start">
                    <span className="flex items-center gap-2 text-xs font-semibold mb-1 w-full">
                      <span className="relative flex h-2 w-2">
                        <span className={`absolute inline-flex h-full w-full rounded-full ${bar.status === dict.bars.statusVeryActive ? 'bg-[#FFB566] animate-ping' : 'bg-[#4A90E2]'} opacity-75`}></span>
                        <span className={`relative inline-flex rounded-full h-2 w-2 ${bar.status === dict.bars.statusVeryActive ? 'bg-[#D55A2F]' : 'bg-[#1D4E89]'}`}></span>
                      </span>
                      {bar.status}
                    </span>
                    <span className="text-[10px] text-muted">{bar.users}</span>
                  </div>
                  <button className="w-8 h-8 rounded-full bg-[#192030]/80 flex items-center justify-center text-highlight hover:bg-highlight hover:text-white transition-colors">
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button onClick={() => setIsMapModalOpen(true)} className="btn btn-primary px-8 py-3 group">
              {dict.bars.seeMap} <ChevronRight size={16} className="inline ml-1 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      <section className="bg-bg-dark py-32 border-t border-[#5B628F]/20 relative" id="events">
        <div className="absolute w-[400px] h-[400px] rounded-full blur-[100px] -z-10 opacity-20 bg-highlight top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 focus:outline-none"></div>
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold text-highlight mb-6 border border-highlight/30 glass">
              <Star className="text-highlight mr-2" size={16} />
              <span>{dict.events.badge}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{dict.events.title} <span className="text-highlight">{dict.events.titleHighlight}</span></h2>
            <p className="text-xl text-muted">{dict.events.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eventsData.map((evt, i) => (
              <div 
                key={i} 
                className="glass-card relative overflow-hidden group cursor-pointer border border-[#5B628F]/20 hover:border-highlight/40"
                onClick={() => setSelectedLocation(evt)}
              >
                <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${evt.color}`}></div>
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-xl bg-bg-dark flex items-center justify-center border border-muted/30">
                    <CalendarDays className="text-highlight" size={24} />
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-highlight/20 text-highlight border border-highlight/30">
                    {evt.date}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-highlight transition-colors">{evt.name}</h3>
                <p className="text-sm text-muted font-medium mb-4 flex items-center gap-1">
                  <MapPin size={14} /> {evt.location}
                </p>
                <p className="text-muted leading-relaxed mb-6 line-clamp-2">
                  {evt.description}
                </p>
                <button className="text-sm font-bold text-white group-hover:text-highlight flex items-center transition-colors">
                  {dict.events.seeDetails} <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bg-darker border-t border-[#5B628F]/20 py-32 w-full" id="security">
        <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 w-full relative">
            <div className="absolute inset-0 bg-gradient-to-br from-highlight/20 to-transparent blur-3xl -z-10 rounded-full"></div>
            <div className="glass-card !p-8 border border-highlight/20 relative overflow-hidden">
               <div className="absolute -right-16 -top-16 w-48 h-48 bg-highlight/10 rounded-full blur-2xl"></div>

               <div className="flex items-start gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-highlight/20 flex items-center justify-center flex-shrink-0 text-highlight border border-highlight/30">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-1">{dict.security.card1Title}</h4>
                  <p className="text-muted text-sm leading-relaxed">{dict.security.card1Desc}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0 text-[#6a9bf6] border border-primary/30">
                  <Lock size={24} />
                </div>
                <div>
                   <h4 className="text-xl font-bold text-white mb-1">{dict.security.card2Title}</h4>
                  <p className="text-muted text-sm leading-relaxed">{dict.security.card2Desc}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#5B628F]/20 flex items-center justify-center flex-shrink-0 text-white/80 border border-muted/30">
                  <EyeOff size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-1">{dict.security.card3Title}</h4>
                  <p className="text-muted text-sm leading-relaxed">{dict.security.card3Desc}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold text-highlight mb-6 border border-highlight/30 glass">
              <ShieldCheck className="text-highlight mr-2" size={16} />
              <span>{dict.security.badge}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">{dict.security.title} <span className="text-highlight">{dict.security.titleHighlight}</span></h2>
            <p className="text-xl text-muted leading-relaxed mb-8">
              {dict.security.subtitle}
            </p>
            <ul className="space-y-4 text-left inline-block lg:block">
              <li className="flex items-center gap-3 text-white/90 font-medium">
                <span className="w-6 h-6 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center text-sm">✓</span> {dict.security.check1}
              </li>
              <li className="flex items-center gap-3 text-white/90 font-medium">
                <span className="w-6 h-6 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center text-sm">✓</span> {dict.security.check2}
              </li>
              <li className="flex items-center gap-3 text-white/90 font-medium">
                <span className="w-6 h-6 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center text-sm">✓</span> {dict.security.check3}
              </li>
            </ul>
          </div>
        </div>
      </div>
      </section>

      <section className="bg-gradient-to-b from-bg-dark to-bg-darker border-t border-[#5B628F]/20 py-32" id="faq">
        <div className="max-w-5xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{dict.faq.title} <span className="text-highlight">{dict.faq.titleHighlight}</span></h2>
            <p className="text-xl text-muted">{dict.faq.subtitle}</p>
          </div>

          <div className="grid gap-6">
            {dict.faq.items.map((faq, i) => (
              <details key={i} className="glass-card group [&_summary::-webkit-details-marker]:hidden cursor-pointer hover:border-highlight/40 transition-colors">
                <summary className="flex justify-between items-center font-bold text-lg text-white">
                  {faq.q}
                  <span className="transition-transform group-open:rotate-45 text-highlight bg-highlight/10 p-2 rounded-full">
                    <Plus size={20} />
                  </span>
                </summary>
                <div className="mt-4 text-muted leading-relaxed border-t border-[#5B628F]/20 pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>

          <div className="mt-12 text-center p-8 rounded-3xl bg-gradient-to-r from-highlight/10 to-primary/10 border border-highlight/20 flex flex-col items-center">
            <MessageCircle className="text-highlight mb-4" size={32} />
            <h3 className="text-2xl font-bold mb-2">{dict.faq.moreQuestions}</h3>
            <p className="text-muted mb-6">{dict.faq.teamReady}</p>
            <button onClick={() => setIsContactModalOpen(true)} className="btn btn-primary px-8 py-3">{dict.faq.contactUs}</button>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-bg-darker via-bg-dark to-primary/10 border-t border-highlight/20 py-24 px-4">
        <div className="max-w-4xl mx-auto flex flex-col items-center justify-center animate-in fade-in zoom-in duration-500">
          <div className="glass-card w-full max-w-3xl p-14 shadow-2xl border border-highlight/30 relative overflow-hidden">
             <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-highlight/20 to-primary/20 rounded-full blur-2xl opacity-40"></div>
            <div className="flex flex-col items-center mb-8">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-highlight to-primary flex items-center justify-center mb-4 border-2 border-highlight/40 shadow-lg">
                <Send className="text-white" size={32} />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-2 text-white drop-shadow">{dict.contact.title}</h2>
              <p className="text-muted mb-2">{dict.contact.subtitle}</p>
              <p className="text-highlight font-semibold mb-4">{dict.contact.subtitleHighlight}</p>
            </div>
             <form className="space-y-8" onSubmit={e => { e.preventDefault(); alert('Message envoye / sent !'); }}>
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                  <label className="block text-base font-medium text-white/90 mb-2">{dict.modal.nameLabel}</label>
                  <input type="text" required className="w-full bg-[#192030]/80 border border-[#5B628F]/30 rounded-xl px-6 py-4 text-white text-lg focus:outline-none focus:border-highlight focus:ring-1 focus:ring-highlight transition-all" placeholder={dict.modal.namePlaceholder} />
                </div>
                <div className="flex-1">
                  <label className="block text-base font-medium text-white/90 mb-2">{dict.modal.emailLabel}</label>
                  <input type="email" required className="w-full bg-[#192030]/80 border border-[#5B628F]/30 rounded-xl px-6 py-4 text-white text-lg focus:outline-none focus:border-highlight focus:ring-1 focus:ring-highlight transition-all" placeholder={dict.modal.emailPlaceholder} />
                </div>
              </div>
              <div>
                <label className="block text-base font-medium text-white/90 mb-2">{dict.modal.messageLabel}</label>
                <textarea required rows={5} className="w-full bg-[#192030]/80 border border-[#5B628F]/30 rounded-xl px-6 py-4 text-white text-lg focus:outline-none focus:border-highlight focus:ring-1 focus:ring-highlight transition-all resize-none" placeholder={dict.modal.messagePlaceholder}></textarea>
              </div>
               <button type="submit" className="btn btn-primary w-full py-5 text-xl mt-2 shadow-xl hover:scale-[1.03] transition-transform duration-200">
                <span className="inline-flex items-center justify-center gap-2">
                  {dict.modal.send} <Send size={24} className="ml-1" />
                </span>
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="bg-bg-darker pt-16 pb-8 border-t border-[#5B628F]/20 mt-auto px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12 mb-16">
          <div className="max-w-xs">
            <div className="flex items-center gap-2 font-extrabold text-xl tracking-wider mb-4">
              <Heart className="text-highlight" />
              <span>BAROMÈTRE</span>
            </div>
            <p className="text-muted">
              {dict.footer.description}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-12 md:gap-24">
            <div>
              <h4 className="text-lg font-bold text-white mb-6">{dict.footer.appLinks}</h4>
               <div className="flex flex-col gap-3">
                <a href="#" className="text-muted hover:text-highlight transition-colors">{dict.footer.download}</a>
                <a href="#" className="text-muted hover:text-highlight transition-colors">{dict.footer.howItWorks}</a>
                <a href="#" className="text-muted hover:text-highlight transition-colors">{dict.footer.events}</a>
              </div>
            </div>
            <div>
               <h4 className="text-lg font-bold text-white mb-6">{dict.footer.legalLinks}</h4>
               <div className="flex flex-col gap-3">
                <a href="#" className="text-muted hover:text-highlight transition-colors">{dict.footer.terms}</a>
                <a href="#" className="text-muted hover:text-highlight transition-colors">{dict.footer.privacy}</a>
                <a href="#" className="text-muted hover:text-highlight transition-colors">{dict.footer.contact}</a>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-[#5B628F]/20 gap-4">
          <p className="text-muted text-sm text-center">© {new Date().getFullYear()} Baromètre. {dict.footer.rights}</p>
          <p className="text-sm text-center">
            {dict.footer.developedBy} <Heart size={14} className="text-highlight inline mx-1" /> par l'équipe <a href="https://nordweb.ca" target="_blank" rel="noopener noreferrer" className="text-highlight font-bold hover:underline">NordWeb</a>
          </p>
        </div>
      </footer>

      {isContactModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-bg-dark/80 backdrop-blur-sm"
            onClick={() => setIsContactModalOpen(false)}
          ></div>
          <div className="glass-card relative w-full max-w-lg z-10 animate-in fade-in zoom-in duration-300">
            <button
               onClick={() => setIsContactModalOpen(false)}
              className="absolute right-6 top-6 text-muted hover:text-white transition-colors"
            >
              <X size={24} />
            </button>

            <div className="mb-8 text-center">
               <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-highlight/20 to-primary/20 flex items-center justify-center mx-auto mb-4 border border-highlight/30">
                <Send className="text-highlight" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">{dict.modal.contactTitle}</h3>
              <p className="text-muted">{dict.modal.contactSubtitle}</p>
            </div>

            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setIsContactModalOpen(false); alert("Message envoye / sent !"); }}>
              <div>
                 <label className="block text-sm font-medium text-white/90 mb-1">{dict.modal.nameLabel}</label>
                <input
                  type="text"
                  required
                  className="w-full bg-[#192030]/80 border border-[#5B628F]/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-highlight focus:ring-1 focus:ring-highlight transition-all"
                  placeholder={dict.modal.namePlaceholder}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white/90 mb-1">{dict.modal.emailLabel}</label>
                <input
                  type="email"
                  required
                  className="w-full bg-[#192030]/80 border border-[#5B628F]/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-highlight focus:ring-1 focus:ring-highlight transition-all"
                   placeholder={dict.modal.emailPlaceholder}
                />
              </div>
              <div>
                 <label className="block text-sm font-medium text-white/90 mb-1">{dict.modal.messageLabel}</label>
                 <textarea
                  required
                  rows={4}
                  className="w-full bg-[#192030]/80 border border-[#5B628F]/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-highlight focus:ring-1 focus:ring-highlight transition-all resize-none"
                  placeholder={dict.modal.messagePlaceholder}
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-full py-4 text-lg mt-4">
                 {dict.modal.send} <Send size={18} className="ml-2" />
              </button>
            </form>
          </div>
        </div>
      )}

      {isMapModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
           <div
            className="absolute inset-0 bg-bg-dark/90 backdrop-blur-md"
            onClick={() => setIsMapModalOpen(false)}
          ></div>
          <div className="glass-card relative w-full max-w-5xl h-[80vh] z-10 animate-in fade-in zoom-in duration-300 p-2 flex flex-col">
            <div className="flex justify-between items-center mb-4 px-4 pt-2">
              <div className="flex items-center gap-2">
                <MapPin className="text-highlight" size={24} />
                <h3 className="text-2xl font-bold text-white">{dict.modal.mapTitle}</h3>
              </div>
              <button
                onClick={() => setIsMapModalOpen(false)}
                className="text-muted hover:text-white transition-colors bg-[#192030] p-2 rounded-full"
               >
                <X size={24} />
              </button>
            </div>
            <div className="flex-1 w-full rounded-2xl overflow-hidden shadow-2xl relative border border-highlight/20">
              <MapComponent />
            </div>
          </div>
        </div>
      )}

      {selectedLocation && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
           <div
            className="absolute inset-0 bg-bg-dark/80 backdrop-blur-md"
            onClick={() => setSelectedLocation(null)}
          ></div>
           <div className="glass-card relative w-full max-w-lg z-10 animate-in fade-in zoom-in duration-300 border border-highlight/40">
            <button
               onClick={() => setSelectedLocation(null)}
              className="absolute right-6 top-6 text-muted hover:text-white transition-colors bg-bg-darker p-2 rounded-full cursor-pointer z-20"
            >
              <X size={20} />
            </button>
             <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${selectedLocation.color} flex items-center justify-center shadow-lg mb-6 shadow-${selectedLocation.color.split(' ')[1].replace('to-', '')}/20`}>
              {selectedLocation.date ? <CalendarDays size={40} className="text-white" /> : <Building2 size={40} className="text-white" />}
             </div>
            
             <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-3xl font-bold text-white mb-2">{selectedLocation.name}</h3>
                <p className="text-highlight font-medium flex items-center gap-2">
                  <MapPin size={18} /> {selectedLocation.location}
                </p>
              </div>
              {selectedLocation.date && (
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-highlight/20 text-highlight border border-highlight/30 mt-2">
                  {selectedLocation.date}
                </span>
              )}
            </div>
            
            <div className="bg-[#192030]/60 rounded-2xl p-6 border border-[#5B628F]/20 space-y-5 mb-8">
              <div className="grid grid-cols-2 gap-4">
                <div>
                   <h4 className="text-xs text-muted uppercase tracking-wider font-bold mb-2">{dict.locationDetails.ambiance}</h4>
                  <div className="inline-flex px-3 py-1 rounded-lg bg-highlight/10 text-white text-sm font-medium border border-highlight/20">
                    {selectedLocation.ambiance}
                  </div>
                </div>
                <div>
                   <h4 className="text-xs text-muted uppercase tracking-wider font-bold mb-2">{dict.locationDetails.age}</h4>
                  <div className="inline-flex px-3 py-1 rounded-lg bg-primary/10 text-white text-sm font-medium border border-primary/20">
                    {selectedLocation.age}
                  </div>
                </div>
              </div>
              
              <div className="pt-4 border-t border-[#5B628F]/20">
                <h4 className="text-xs text-muted uppercase tracking-wider font-bold mb-2">{dict.locationDetails.description}</h4>
                <p className="text-white/90 leading-relaxed text-sm">{selectedLocation.description}</p>
              </div>
            </div>

            <button className="btn btn-primary w-full py-4 text-lg shadow-lg" onClick={() => setSelectedLocation(null)}>
               {dict.modal.openApp} <ChevronRight className="ml-2" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
