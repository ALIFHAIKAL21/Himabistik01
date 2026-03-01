'use client';

import { ChevronDown, Zap, Users, Code, Smartphone, Database, Clock, CheckCircle, Search, Menu, X } from 'lucide-react';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  const [activeCandidate, setActiveCandidate] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeNav, setActiveNav] = useState('home');

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-in-out',
      offset: 100
    });

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCandidate((prev) => (prev + 1) % 2);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
    setActiveNav(id);
  };

  const navItems = [
    { label: 'Beranda', id: 'home' },
    { label: 'Visi', id: 'visi' },
    { label: 'Misi', id: 'misi' },
    { label: 'Program', id: 'programs' }
  ];

  return (
    <main className="bg-background text-foreground">
      {/* Modern Navigation Header */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-background/95 backdrop-blur-xl shadow-lg border-b border-primary/10' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center gap-2 group cursor-pointer">
              <div className="p-2 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                <Users className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <div className="hidden sm:block">
                <p className="text-xs font-semibold text-primary">PASLON 01</p>
                <p className="text-xs font-bold text-foreground">HIMAMBISTIK</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 font-medium text-sm ${
                    activeNav === item.id
                      ? 'bg-primary text-primary-foreground shadow-lg'
                      : 'text-foreground hover:bg-primary/10'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-primary/10 transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 space-y-2 border-t border-primary/10 pt-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full text-left px-4 py-2 rounded-lg transition-all duration-300 font-medium text-sm ${
                    activeNav === item.id
                      ? 'bg-primary text-primary-foreground'
                      : 'text-foreground hover:bg-primary/10'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>
      <style>{`
        @keyframes carouselCrossFade {
          0% { opacity: 1; }
          45% { opacity: 1; }
          50% { opacity: 0; }
          55% { opacity: 0; }
          100% { opacity: 1; }
        }
        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        .carousel-image-0 { animation: carouselCrossFade 10s ease-in-out infinite; }
        .carousel-image-1 { 
          animation: carouselCrossFade 10s ease-in-out infinite;
          animation-delay: 5s;
        }
        .animate-slide-up { animation: slideInUp 0.6s ease-out; }
        .animate-slide-down { animation: slideInDown 0.6s ease-out; }
        .animate-float { animation: floatSlow 6s ease-in-out infinite; }
        .carousel-container { perspective: 1000px; }
      `}</style>
      {/* Hero Section */}
      <section id="home" className="min-h-screen bg-gradient-to-b from-primary/5 via-background to-background flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden pt-20 sm:pt-24">
        {/* Decorative gradient blobs - responsive */}
        <div className="absolute top-5 right-5 sm:top-10 sm:right-10 w-48 h-48 sm:w-96 sm:h-96 bg-primary/10 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-5 left-5 sm:bottom-10 sm:left-10 w-48 h-48 sm:w-96 sm:h-96 bg-accent/10 rounded-full blur-3xl opacity-60"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6 sm:space-y-8 animate-slide-up">
          {/* Candidate Carousel - Photo Carousel (16:9 aspect ratio) */}
          <div className="carousel-container flex justify-center mb-8 sm:mb-12">
            <div className="relative w-full max-w-2xl">
              <div className="overflow-hidden">
                {/* Card with padding at top */}
                <div className="pt-8 sm:pt-12 px-4 sm:px-6">
                  <div className="relative w-full aspect-video bg-background rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 group cursor-pointer overflow-hidden border-4 border-primary/20 hover:border-primary/40 transition-colors duration-300">
                    
                    {/* Photo 1: Arwan & Ica Duo */}
                    <div className="carousel-image-0 absolute inset-0">
                      <Image
                        src="/arwan-ica-duo.jpg"
                        alt="Arwan & Ica - Paslon 01 HIMAMBISTIK"
                        fill
                        className="object-cover"
                        priority
                      />
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                      {/* Text overlay */}
                      <div className="absolute inset-0 flex flex-col items-center justify-end pb-6 sm:pb-8 text-white">
                        <h4 className="text-2xl sm:text-3xl font-bold text-balance">Arwan & Ica</h4>
                        <p className="text-sm sm:text-base text-white/90">Paslon 01 HIMAMBISTIK</p>
                      </div>
                    </div>

                    {/* Photo 2: Arwan Solo */}
                    <div className="carousel-image-1 absolute inset-0">
                      <Image
                        src="/arwan.jpg"
                        alt="Arwan & Ica - Paslon 01 HIMAMBISTIK"
                        fill
                        className="object-cover"
                      />
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                      {/* Text overlay */}
                      <div className="absolute inset-0 flex flex-col items-center justify-end pb-6 sm:pb-8 text-white">
                        <h4 className="text-2xl sm:text-3xl font-bold">Arwan & Ica</h4>
                        <p className="text-sm sm:text-base text-white/90">Paslon 01 HIMAMBISTIK</p>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

              {/* Carousel indicators */}
              <div className="flex justify-center gap-2 mt-4 sm:mt-6">
                <button
                  onClick={() => setActiveCandidate(0)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${activeCandidate === 0 ? 'bg-primary w-8' : 'bg-muted hover:bg-primary/50'}`}
                  aria-label="Arwan & Ica"
                />
                <button
                  onClick={() => setActiveCandidate(1)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${activeCandidate === 1 ? 'bg-primary w-8' : 'bg-muted hover:bg-primary/50'}`}
                  aria-label="Arwan"
                />
              </div>
            </div>
          </div>

          {/* Main Title */}
          <div className="space-y-3 sm:space-y-4 animate-slide-down">
            <p className="text-primary font-semibold text-xs sm:text-sm md:text-base tracking-widest uppercase">Pemimpin untuk Masa Depan</p>
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight text-balance">
              PASLON 01 <span className="text-primary">HIMAMBISTIK</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground font-medium text-balance">
              Adaptif • Responsif • Solutif
            </p>
          </div>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty animate-slide-up">
            Membawa HIMAMBISTIK menuju era digital dengan kepemimpinan yang terstruktur, responsif, dan berorientasi pada solusi nyata untuk kemajuan organisasi.
          </p>

          {/* CTA Button */}
          <div className="pt-4 sm:pt-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <button
              onClick={() => scrollToSection('programs')}
              className="px-6 sm:px-8 py-3 sm:py-4 bg-primary text-primary-foreground rounded-full font-semibold text-sm sm:text-base md:text-lg hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-110 active:scale-95 inline-flex items-center gap-2 group"
            >
              Lihat Program Unggulan
              <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-y-1 transition-transform duration-300" />
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 sm:bottom-8 animate-float">
          <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 text-primary/60" />
        </div>
      </section>

      {/* Visi Section */}
      <section id="visi" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-primary/3 to-background">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 sm:mb-20" data-aos="fade-up">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">Fondasi Kami</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              VISI
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-1 gap-8">
            <div 
              className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:bg-gradient-to-br hover:from-primary/5 hover:to-accent/5 group cursor-pointer border-2 border-transparent hover:border-primary/20"
              data-aos="zoom-in"
            >
              <div className="flex flex-col sm:flex-row gap-6 sm:gap-8">
                <div className="flex-shrink-0">
                  <div className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 group-hover:from-primary/30 group-hover:to-primary/15 transition-all duration-300">
                    <Zap className="w-8 h-8 sm:w-10 sm:h-10 text-primary group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                    Organisasi Digital, Terstruktur, dan Adaptif
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed group-hover:text-foreground/70 transition-colors duration-300 text-pretty">
                    Membangun HIMAMBISTIK sebagai organisasi yang memanfaatkan teknologi digital, memiliki sistem yang jelas dan terukur, serta mampu beradaptasi dengan cepat terhadap perubahan zaman untuk menciptakan dampak positif yang berkelanjutan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Misi Section */}
      <section id="misi" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-accent/3">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 sm:mb-20" data-aos="fade-up">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">Komitmen Kami</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              MISI
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-accent to-primary mx-auto"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-5 sm:gap-6 lg:gap-7">
            {[
              {
                icon: Code,
                title: "Transformasi Digital",
                description: "Mengintegrasikan teknologi dalam setiap aspek operasional organisasi untuk efisiensi maksimal.",
                color: "from-blue-500/10 to-blue-400/5"
              },
              {
                icon: Users,
                title: "Pemberdayaan Anggota",
                description: "Mengembangkan potensi setiap anggota melalui program pelatihan dan kesempatan berkembang.",
                color: "from-green-500/10 to-green-400/5"
              },
              {
                icon: Zap,
                title: "Responsivitas Cepat",
                description: "Memastikan organisasi dapat merespons kebutuhan dan tantangan dengan cepat dan tepat.",
                color: "from-yellow-500/10 to-yellow-400/5"
              },
              {
                icon: Database,
                title: "Sistem Terukur",
                description: "Membangun sistem dan prosedur yang jelas, terukur, dan dapat dievaluasi secara berkala.",
                color: "from-purple-500/10 to-purple-400/5"
              },
              {
                icon: CheckCircle,
                title: "Solusi Nyata",
                description: "Menghadirkan program-program yang memberikan solusi konkret terhadap permasalahan nyata.",
                color: "from-red-500/10 to-red-400/5"
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-5 sm:p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-3 hover:bg-gradient-to-br hover:from-primary/8 hover:to-accent/5 group cursor-pointer border-2 border-transparent hover:border-primary/15"
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                <div className="flex gap-3 sm:gap-4">
                  <div className="flex-shrink-0">
                    <div className={`flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl bg-gradient-to-br ${item.color} group-hover:shadow-lg group-hover:scale-110 transition-all duration-300`}>
                      <item.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:rotate-12 transition-transform duration-300" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-foreground text-base sm:text-lg mb-2 group-hover:text-primary transition-colors duration-300">{item.title}</h3>
                    <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed group-hover:text-foreground/70 transition-colors duration-300 text-pretty">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Unggulan Section */}
      <section id="programs" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-primary/2 to-background">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 sm:mb-20" data-aos="fade-up">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">Inovasi Kami</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              PROGRAM UNGGULAN
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-2">Solusi transformatif untuk kemajuan organisasi</p>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto"></div>
          </div>

          {/* Program 1: HIMAMBISTIK Digital Ecosystem */}
          <div className="mb-12 sm:mb-16 bg-gradient-to-br from-primary/15 to-accent/8 rounded-3xl p-7 sm:p-10 lg:p-14 border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-2xl group" data-aos="zoom-in">
            <div className="mb-8 sm:mb-10">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 flex items-center gap-3 sm:gap-4 group-hover:text-primary transition-colors duration-300">
                <div className="p-3 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl group-hover:bg-gradient-to-br group-hover:from-primary/30 group-hover:to-primary/20 transition-all duration-300">
                  <Smartphone className="w-7 h-7 sm:w-8 sm:h-8 text-primary group-hover:scale-125 group-hover:rotate-6 transition-transform duration-300" />
                </div>
                HIMAMBISTIK Digital Ecosystem
              </h3>
              <p className="text-muted-foreground text-base sm:text-lg group-hover:text-foreground/70 transition-colors duration-300">Platform terintegrasi untuk kemajuan organisasi berbasis teknologi digital dan inovatif</p>
            </div>

            <div className="grid sm:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
              {[
                {
                  title: "Produk Digital",
                  description: "Aplikasi dan tools yang memudahkan operasional organisasi dan meningkatkan produktivitas anggota.",
                  icon: Code
                },
                {
                  title: "Jasa Digital",
                  description: "Layanan digital untuk mendukung kebutuhan anggota dan organisasi dalam transformasi teknologi.",
                  icon: Zap
                },
                {
                  title: "Database Peluang",
                  description: "Sistem database komprehensif untuk mengakses peluang belajar, bekerja, dan berkembang.",
                  icon: Search
                }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 sm:p-7 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 hover:bg-gradient-to-br hover:from-primary/8 hover:to-accent/5 group/card cursor-pointer border-2 border-transparent hover:border-primary/20"
                  data-aos="fade-up"
                  data-aos-delay={idx * 150}
                >
                  {item.icon && (
                    <div className="mb-4 sm:mb-5">
                      <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 group-hover/card:from-primary/30 group-hover/card:to-primary/15 transition-all duration-300 group-hover/card:shadow-lg">
                        <item.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover/card:scale-125 group-hover/card:rotate-12 transition-transform duration-300" />
                      </div>
                    </div>
                  )}
                  <h4 className="font-bold text-foreground text-lg sm:text-xl mb-3 group-hover/card:text-primary transition-colors duration-300">{item.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed group-hover/card:text-foreground/70 transition-colors duration-300 text-pretty">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Program 2: HIMA Responsif 72 Jam */}
          <div className="bg-gradient-to-br from-accent/20 to-primary/8 rounded-3xl p-7 sm:p-10 lg:p-14 border-2 border-accent/30 hover:border-accent/50 transition-all duration-300 hover:shadow-2xl group" data-aos="zoom-in" data-aos-delay="200">
            <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-16 items-start lg:items-start">
              <div className="flex-1">
                <div className="inline-block mb-4">
                  <span className="bg-gradient-to-r from-accent to-primary text-white px-4 py-2 rounded-full text-xs sm:text-sm font-bold hover:shadow-lg transition-all duration-300">
                    72H Commitment
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-5 group-hover:text-accent transition-colors duration-300">
                  HIMA Responsif 72 Jam<br/><span className="text-primary">(HR72)</span>
                </h3>
                <p className="text-base sm:text-lg text-muted-foreground mb-6 leading-relaxed group-hover:text-foreground/70 transition-colors duration-300 text-pretty">
                  Komitmen organisasi untuk merespons setiap kebutuhan, pertanyaan, atau permasalahan dari anggota dalam waktu maksimal 72 jam dengan solusi nyata dan terukur.
                </p>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed group-hover:text-foreground/70 transition-colors duration-300 text-pretty">
                  Program ini mencerminkan dedikasi kami terhadap kepedulian dan ketanggapan yang menjadi fondasi organisasi yang sehat dan progresif bagi seluruh anggota.
                </p>
              </div>

              <div className="flex-1 w-full">
                <div className="space-y-4 sm:space-y-5">
                  {[
                    { label: "Jam 0", desc: "Penerimaan Masukan", icon: "📥" },
                    { label: "Jam 24", desc: "Analisis & Perencanaan", icon: "📊" },
                    { label: "Jam 72", desc: "Solusi & Implementasi", icon: "✅" }
                  ].map((step, idx) => (
                    <div key={idx} className="flex gap-4 items-start group/step cursor-pointer p-4 rounded-xl hover:bg-white/50 transition-all duration-300" data-aos="fade-right" data-aos-delay={idx * 100}>
                      <div className="flex-shrink-0">
                        <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-gradient-to-br from-accent/30 to-accent/10 text-accent font-bold text-sm sm:text-base group-hover/step:from-accent/50 group-hover/step:to-accent/20 group-hover/step:scale-125 group-hover/step:shadow-lg transition-all duration-300">
                          {idx + 1}
                        </div>
                      </div>
                      <div className="flex-1 group-hover/step:translate-x-2 transition-transform duration-300">
                        <p className="font-bold text-foreground text-base sm:text-lg group-hover/step:text-accent transition-colors duration-300">{step.label}</p>
                        <p className="text-xs sm:text-sm text-muted-foreground group-hover/step:text-foreground/70 transition-colors duration-300 mt-1">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-primary/3">
        <div className="max-w-4xl mx-auto text-center space-y-8 sm:space-y-12 group">
          <blockquote className="space-y-4 sm:space-y-6 hover:scale-105 transition-transform duration-300" data-aos="fade-up">
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight text-balance group-hover:text-primary transition-colors duration-300 text-pretty">
              {"\""}Kepemimpinan bukan tentang diri sendiri, tetapi tentang membawa organisasi menuju masa depan yang lebih baik, lebih terstruktur, dan lebih berdampak.{"\""}
            </p>
            <p className="text-base sm:text-lg text-primary font-semibold group-hover:text-accent transition-colors duration-300">
              — Arwan & Ica, Paslon 01 HIMAMBISTIK
            </p>
          </blockquote>

          <div className="pt-4 sm:pt-6" data-aos="zoom-in">
            <button className="px-8 sm:px-12 py-4 sm:py-5 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-full font-bold text-base sm:text-lg md:text-xl hover:shadow-2xl transition-all duration-300 shadow-lg hover:scale-110 active:scale-95 inline-flex items-center gap-2 group/btn">
              Bersama Mewujudkan HIMAMBISTIK Adaptif
              <ChevronDown className="w-5 h-5 group-hover/btn:translate-y-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-foreground/8 via-primary/5 to-foreground/8 text-foreground py-8 sm:py-12 px-4 sm:px-6 lg:px-8 border-t border-primary/10">
        <div className="max-w-5xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 pb-8 border-b border-primary/10">
            <div className="text-center sm:text-left">
              <h4 className="font-bold text-foreground mb-2">Organisasi</h4>
              <p className="text-xs sm:text-sm text-muted-foreground">HIMAMBISTIK</p>
              <p className="text-xs sm:text-sm text-muted-foreground">Paslon 01</p>
            </div>
            <div className="text-center sm:text-left">
              <h4 className="font-bold text-foreground mb-2">Visi</h4>
              <p className="text-xs sm:text-sm text-muted-foreground text-pretty">Organisasi Digital & Adaptif</p>
            </div>
            <div className="text-center sm:text-left">
              <h4 className="font-bold text-foreground mb-2">Program</h4>
              <p className="text-xs sm:text-sm text-muted-foreground text-pretty">Transformasi & Inovasi</p>
            </div>
            <div className="text-center sm:text-left">
              <h4 className="font-bold text-foreground mb-2">Moto</h4>
              <p className="text-xs sm:text-sm text-primary font-semibold">Adaptif • Responsif • Solutif</p>
            </div>
          </div>
          <div className="text-center">
            <p className="text-xs sm:text-sm md:text-base font-semibold">
              © 2026 PASLON 01 HIMAMBISTIK
            </p>
            <p className="text-xs sm:text-sm text-muted-foreground mt-3 hover:text-foreground/60 transition-colors duration-300">
              Membangun Masa Depan Organisasi yang Lebih Baik
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
