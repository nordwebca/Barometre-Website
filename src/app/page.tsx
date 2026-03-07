"use client";

import { useState, useEffect } from 'react';
import { MapPin, Users, Heart, Zap, ChevronRight, Menu, X, Building2, CalendarDays, Star, Smartphone, UserPlus, MessageCircle, Quote } from 'lucide-react';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'py-4 glass shadow-lg' : 'py-6'}`}>
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
          <div className="flex items-center gap-2 font-extrabold text-2xl tracking-wider">
            <Heart className="text-highlight" />
            <span>BAROMÈTRE</span>
          </div>

          <div className="hidden md:flex items-center gap-10">
            <a href="#concept" className="font-semibold text-white/90 hover:text-highlight">Le Concept</a>
            <a href="#features" className="font-semibold text-white/90 hover:text-highlight">Fonctionnalités</a>
            <button className="btn btn-primary px-6 py-2">Rejoindre</button>
          </div>

          <div className="md:hidden cursor-pointer" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full p-8 flex flex-col gap-6 glass border-t border-[#5B628F]/20 md:hidden">
            <a href="#concept" className="font-semibold text-lg" onClick={() => setIsMobileMenuOpen(false)}>Le Concept</a>
            <a href="#features" className="font-semibold text-lg" onClick={() => setIsMobileMenuOpen(false)}>Fonctionnalités</a>
            <button className="btn btn-primary w-full py-3">Rejoindre</button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="flex-1 flex flex-col lg:flex-row items-center max-w-7xl mx-auto px-8 pt-32 lg:pt-40 pb-16 gap-16 min-h-screen" id="concept">
        <div className="flex-1 max-w-2xl text-center lg:text-left z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold text-highlight mb-8 border border-highlight/30 glass">
            <MapPin className="text-highlight mr-2" size={16} />
            <span>La nouvelle ère de la rencontre</span>
          </div>
          <h1 className="text-6xl lg:text-7xl/tight font-extrabold mb-6 tracking-tight">
            Matchez <span className="gradient-text">là où</span> vous êtes.
          </h1>
          <p className="text-xl text-[#a0a8cc] leading-relaxed mb-12">
            Baromètre révolutionne les rencontres. Connectez-vous uniquement avec les personnes présentes dans le même lieu ou le même événement que vous. <strong className="text-white/90">Vous devez vous trouver dans un bar, un festival ou sur un campus partenaire pour utiliser l'application.</strong> Pas de distances virtuelles, seulement des connexions réelles et immédiates.
          </p>
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <button className="btn btn-primary px-8 py-4 text-lg">
              Télécharger l'application <ChevronRight className="ml-2 transition-transform group-hover:translate-x-1" />
            </button>
            <button className="btn btn-secondary px-8 py-4 text-lg">
              Découvrir comment ça marche
            </button>
          </div>
        </div>

        <div className="flex-1 relative flex justify-center items-center w-full max-w-md mx-auto mt-12 lg:mt-0">
          <div className="relative w-full max-w-[320px] aspect-[9/19] z-10">
            <div className="glass-card phone-screen !p-6 flex flex-col gap-4">
              <div className="flex items-center gap-3 font-semibold text-sm mb-4 pb-4 border-b border-[#5B628F]/20">
                <Building2 className="text-highlight" />
                <span>Club Moka - En ce moment</span>
              </div>
              <div className="bg-[#192030]/50 rounded-2xl p-4 flex items-center gap-4 hover:scale-[1.02] transition-transform">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-highlight to-primary flex-shrink-0"></div>
                <div className="flex-1">
                  <h3 className="text-base font-bold mb-1">Sophie, 24</h3>
                  <p className="text-xs text-muted">À 15 mètres de vous</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#192030]/80 flex items-center justify-center text-highlight shadow-sm">
                  <Heart size={20} />
                </div>
              </div>
              <div className="bg-[#192030]/50 rounded-2xl p-4 flex items-center gap-4 hover:scale-[1.02] transition-transform">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-muted to-primary flex-shrink-0"></div>
                <div className="flex-1">
                  <h3 className="text-base font-bold mb-1">Marc, 27</h3>
                  <p className="text-xs text-muted">Au bar, 2ème étage</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#192030]/80 flex items-center justify-center text-muted shadow-sm">
                  <Users size={20} />
                </div>
              </div>
            </div>

            {/* Decorative Orbs */}
            <div className="absolute w-[300px] h-[300px] rounded-full blur-[80px] -z-10 opacity-40 bg-highlight -top-12 -right-12"></div>
            <div className="absolute w-[250px] h-[250px] rounded-full blur-[80px] -z-10 opacity-30 bg-primary -bottom-12 -left-12"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-8 py-24" id="features">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Pourquoi <span className="text-highlight">Baromètre</span> ?</h2>
          <p className="text-xl text-muted">La magie opère dans le moment présent.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="glass-card">
            <div className="w-16 h-16 rounded-2xl bg-bg-darker flex items-center justify-center mb-6 shadow-inner">
              <MapPin className="text-highlight" size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Ultra-Localisé</h3>
            <p className="text-muted leading-relaxed">
              Le radar ne fonctionne que dans un périmètre restreint: votre quartier, votre campus ou votre événement.
            </p>
          </div>

          <div className="glass-card">
            <div className="w-16 h-16 rounded-2xl bg-bg-darker flex items-center justify-center mb-6 shadow-inner">
              <Zap className="text-highlight" size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Spontanéité</h3>
            <p className="text-muted leading-relaxed">
              Finis les matchs avec des personnes à 500km. Si vous matchez, vous pouvez vous dire bonjour dans la minute.
            </p>
          </div>

          <div className="glass-card">
            <div className="w-16 h-16 rounded-2xl bg-bg-darker flex items-center justify-center mb-6 shadow-inner">
              <Heart className="text-highlight" size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Connexions Réelles</h3>
            <p className="text-muted leading-relaxed">
              Brisez la glace facilement. Vous partagez déjà le même espace physique, c'est le meilleur des icebreakers.
            </p>
          </div>
        </div>
      </section>

      {/* How it works Section */}
      <section className="bg-bg-dark border-y border-[#5B628F]/20 py-24" id="how-it-works">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Comment ça <span className="text-highlight">marche</span> ?</h2>
            <p className="text-xl text-muted">Trois étapes simples pour des rencontres authentiques.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-transparent via-highlight/50 to-transparent -z-10"></div>

            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-bg-darker border-2 border-highlight flex items-center justify-center mb-6 relative shadow-[0_0_30px_rgba(68,119,206,0.3)]">
                <span className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-highlight text-white font-bold flex items-center justify-center border-4 border-bg-dark">1</span>
                <MapPin size={40} className="text-highlight" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Arrivez sur place</h3>
              <p className="text-muted leading-relaxed">Ouvrez l'application dans l'un de nos bars, festivals ou événements partenaires.</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-bg-darker border-2 border-highlight flex items-center justify-center mb-6 relative shadow-[0_0_30px_rgba(68,119,206,0.3)]">
                <span className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-highlight text-white font-bold flex items-center justify-center border-4 border-bg-dark">2</span>
                <UserPlus size={40} className="text-highlight" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Découvrez qui est là</h3>
              <p className="text-muted leading-relaxed">Parcourez les profils des personnes qui sont exactement au même endroit que vous.</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-bg-darker border-2 border-highlight flex items-center justify-center mb-6 relative shadow-[0_0_30px_rgba(68,119,206,0.3)]">
                <span className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-highlight text-white font-bold flex items-center justify-center border-4 border-bg-dark">3</span>
                <MessageCircle size={40} className="text-highlight" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Matchez et Discutez</h3>
              <p className="text-muted leading-relaxed">Un match mutuel ? Levez les yeux, vous pouvez aller boire un verre ensemble immédiatement !</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="max-w-7xl mx-auto px-8 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Ils ont trouvé leur <span className="text-highlight">prochain coup de cœur</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass-card flex flex-col justify-between">
            <div>
              <Quote className="text-highlight/40 mb-4" size={40} />
              <p className="text-lg italic leading-relaxed text-white/90 mb-8">
                "J'étais au Igloofest et je n'osais pas vraiment l'aborder même si nos regards se croisaient. Quand j'ai vu sur l'application qu'il me 'likait' aussi, c'est devenu tellement facile d'aller lui parler !"
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#FFB566] to-[#D55A2F]"></div>
              <div>
                <h4 className="font-bold">Camille, 23 ans</h4>
                <p className="text-sm text-highlight">Igloofest 2026</p>
              </div>
            </div>
          </div>

          <div className="glass-card flex flex-col justify-between">
            <div>
              <Quote className="text-highlight/40 mb-4" size={40} />
              <p className="text-lg italic leading-relaxed text-white/90 mb-8">
                "Le problème classique des apps: tu matches et tu ne vois jamais la personne. Avec Baromètre, quand ça a matché, on a commandé deux bières au bar ensemble dans la minute qui a suivi. C'est magique."
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#4A90E2] to-[#1D4E89]"></div>
              <div>
                <h4 className="font-bold">Thomas, 26 ans</h4>
                <p className="text-sm text-highlight">Club Moka</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Events Section */}
      <section className="max-w-7xl mx-auto px-8 py-24 mb-12 relative" id="events">
        <div className="absolute w-[400px] h-[400px] rounded-full blur-[100px] -z-10 opacity-20 bg-highlight top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>

        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold text-highlight mb-6 border border-highlight/30 glass">
            <Star className="text-highlight mr-2" size={16} />
            <span>Nos Partenaires</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Événements <span className="text-highlight">Partenaires</span></h2>
          <p className="text-xl text-muted">Retrouvez Baromètre lors de ces événements exclusifs et commencez à matcher.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="glass-card relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-highlight to-primary"></div>
            <div className="flex justify-between items-start mb-6">
              <div className="w-12 h-12 rounded-xl bg-bg-dark flex items-center justify-center border border-muted/30">
                <CalendarDays className="text-highlight" size={24} />
              </div>
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-highlight/20 text-highlight border border-highlight/30">
                15 Mars 2026
              </span>
            </div>
            <h3 className="text-2xl font-bold mb-2 group-hover:text-highlight transition-colors">Festival Nordique</h3>
            <p className="text-sm text-muted font-medium mb-4 flex items-center gap-1">
              <MapPin size={14} /> Parc de la Francophonie, Québec
            </p>
            <p className="text-muted leading-relaxed mb-6">
              Rejoignez-nous au cœur du festival pour une zone spéciale de rencontres Baromètre de 18h à minuit.
            </p>
            <button className="text-sm font-bold text-white group-hover:text-highlight flex items-center transition-colors">
              Voir les détails <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="glass-card relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-highlight"></div>
            <div className="flex justify-between items-start mb-6">
              <div className="w-12 h-12 rounded-xl bg-bg-dark flex items-center justify-center border border-muted/30">
                <CalendarDays className="text-highlight" size={24} />
              </div>
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-highlight/20 text-highlight border border-highlight/30">
                22 Mars 2026
              </span>
            </div>
            <h3 className="text-2xl font-bold mb-2 group-hover:text-highlight transition-colors">Soirée Moka Club</h3>
            <p className="text-sm text-muted font-medium mb-4 flex items-center gap-1">
              <MapPin size={14} /> Club Moka, Montréal
            </p>
            <p className="text-muted leading-relaxed mb-6">
              La plus grande soirée étudiante de l'année. Baromètre sera l'application officielle de la soirée.
            </p>
            <button className="text-sm font-bold text-white group-hover:text-highlight flex items-center transition-colors">
              Voir les détails <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="glass-card relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#4A90E2] to-highlight"></div>
            <div className="flex justify-between items-start mb-6">
              <div className="w-12 h-12 rounded-xl bg-bg-dark flex items-center justify-center border border-muted/30">
                <CalendarDays className="text-highlight" size={24} />
              </div>
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-highlight/20 text-highlight border border-highlight/30">
                Avril 2026
              </span>
            </div>
            <h3 className="text-2xl font-bold mb-2 group-hover:text-highlight transition-colors">Igloofest Québec</h3>
            <p className="text-sm text-muted font-medium mb-4 flex items-center gap-1">
              <MapPin size={14} /> Vieux-Port, Québec
            </p>
            <p className="text-muted leading-relaxed mb-6">
              Réchauffez l'atmosphère! Une activation spéciale Baromètre avec accès exclusif au lounge VIP en matchant.
            </p>
            <button className="text-sm font-bold text-white group-hover:text-highlight flex items-center transition-colors">
              Voir les détails <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-bg-darker pt-16 pb-8 border-t border-[#5B628F]/20 mt-auto px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12 mb-16">
          <div className="max-w-xs">
            <div className="flex items-center gap-2 font-extrabold text-xl tracking-wider mb-4">
              <Heart className="text-highlight" />
              <span>BAROMÈTRE</span>
            </div>
            <p className="text-muted">
              L'application de rencontre qui remet le contact humain au centre du jeu.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-12 md:gap-24">
            <div>
              <h4 className="text-lg font-bold text-white mb-6">Application</h4>
              <div className="flex flex-col gap-3">
                <a href="#" className="text-muted hover:text-highlight transition-colors">Télécharger</a>
                <a href="#" className="text-muted hover:text-highlight transition-colors">Comment ça marche</a>
                <a href="#" className="text-muted hover:text-highlight transition-colors">Événements partenaires</a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-6">Légal</h4>
              <div className="flex flex-col gap-3">
                <a href="#" className="text-muted hover:text-highlight transition-colors">Conditions d'utilisation</a>
                <a href="#" className="text-muted hover:text-highlight transition-colors">Confidentialité</a>
                <a href="#" className="text-muted hover:text-highlight transition-colors">Contact</a>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-[#5B628F]/20 gap-4">
          <p className="text-muted text-sm text-center">© {new Date().getFullYear()} Baromètre. Tous droits réservés.</p>
          <p className="text-sm text-center">
            Développé avec <Heart size={14} className="text-highlight inline mx-1" /> par l'équipe <span className="text-highlight font-bold">NordWeb</span>
          </p>
        </div>
      </footer>
    </div>
  );
}
