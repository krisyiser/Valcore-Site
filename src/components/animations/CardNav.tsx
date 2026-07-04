"use client";

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ArrowUpRight, ChevronDown, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './CardNav.css';

interface LinkItem {
  label: string;
  href: string;
  ariaLabel?: string;
}

interface CardNavItem {
  label: string;
  bgColor: string;
  textColor: string;
  links: LinkItem[];
}

interface CardNavProps {
  productItems: CardNavItem[];
  businessItems: CardNavItem[];
  className?: string;
  ease?: string;
  baseColor?: string;
  menuColor?: string;
  buttonBgColor?: string;
  buttonTextColor?: string;
}

const CardNav: React.FC<CardNavProps> = ({
  productItems,
  businessItems,
  className = '',
  ease = 'power3.out',
  baseColor = 'rgba(9, 9, 11, 0.9)',
  menuColor = '#fff',
  buttonBgColor = '#fff',
  buttonTextColor = '#000'
}) => {
  const [activeTab, setActiveTab] = useState<'productos' | 'negocios' | null>(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  const navRef = useRef<HTMLElement | null>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  // PillNav animation refs
  const circleRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const pillRefs = useRef<(HTMLButtonElement | HTMLAnchorElement | null)[]>([]);
  const activeTweenRefs = useRef<(gsap.core.Timeline | null)[]>([]);

  const activeItems = activeTab === 'productos' ? productItems : businessItems;

  const calculateHeight = (tab: 'productos' | 'negocios' | null) => {
    if (!tab) return 64;
    return 320;
  };

  const updateMenuAnimation = (open: boolean, tab: 'productos' | 'negocios' | null) => {
    const navEl = navRef.current;
    if (!navEl) return;

    if (tlRef.current) {
      tlRef.current.kill();
    }

    const tl = gsap.timeline();
    tlRef.current = tl;

    if (open && tab) {
      tl.to(navEl, {
        height: calculateHeight(tab),
        duration: 0.35,
        ease
      });
      
      const validCards = cardsRef.current.filter(Boolean);
      if (validCards.length > 0) {
        tl.fromTo(
          validCards,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.3, ease, stagger: 0.04 },
          '-=0.15'
        );
      }
    } else {
      tl.to(navEl, {
        height: 64,
        duration: 0.25,
        ease
      });
    }
  };

  // Reset cards ref on tab change
  useEffect(() => {
    cardsRef.current = [];
  }, [activeTab]);

  // PillNav layout setup for hover circles
  useEffect(() => {
    const layoutPills = () => {
      pillRefs.current.forEach((pill, index) => {
        if (!pill) return;

        const circle = circleRefs.current[index];
        if (!circle) return;

        const rect = pill.getBoundingClientRect();
        const { width: w, height: h } = rect;
        
        const R = ((w * w) / 4 + h * h) / (2 * h);
        const D = Math.ceil(2 * R) + 2;
        const delta = Math.ceil(R - Math.sqrt(Math.max(0, R * R - (w * w) / 4))) + 1;
        const originY = D - delta;

        circle.style.width = `${D}px`;
        circle.style.height = `${D}px`;
        circle.style.bottom = `-${delta}px`;

        gsap.set(circle, {
          xPercent: -50,
          scale: 0,
          transformOrigin: `50% ${originY}px`
        });
      });
    };

    layoutPills();
    const timer = setTimeout(layoutPills, 100);

    window.addEventListener('resize', layoutPills);
    return () => {
      window.removeEventListener('resize', layoutPills);
      clearTimeout(timer);
    };
  }, [productItems, businessItems]);

  // Sync active states on tab change or route change
  useEffect(() => {
    pillRefs.current.forEach((pill, index) => {
      if (!pill) return;

      const circle = circleRefs.current[index];
      activeTweenRefs.current[index]?.kill();

      const isActive = 
        (index === 0 && activeTab === 'productos') ||
        (index === 1 && activeTab === 'negocios') ||
        (index === 2 && pathname === '/tecnologia') ||
        (index === 3 && pathname === '/implementaciones') ||
        (index === 4 && pathname === '/nosotros');

      const tl = gsap.timeline();
      activeTweenRefs.current[index] = tl;

      if (isActive) {
        if (circle) tl.to(circle, { scale: 1.25, xPercent: -50, duration: 0.25, ease }, 0);
        tl.to(pill, { color: '#000000', borderColor: '#ffffff', duration: 0.25, ease }, 0);
      } else {
        if (circle) tl.to(circle, { scale: 0, xPercent: -50, duration: 0.25, ease }, 0);
        tl.to(pill, { color: '#e4e4e7', borderColor: 'rgba(255, 255, 255, 0.1)', duration: 0.25, ease }, 0);
      }
    });
  }, [activeTab, pathname]);

  const handlePillEnter = (i: number) => {
    const isActiveTab = 
      (i === 0 && activeTab === 'productos') ||
      (i === 1 && activeTab === 'negocios') ||
      (i === 2 && pathname === '/tecnologia') ||
      (i === 3 && pathname === '/implementaciones') ||
      (i === 4 && pathname === '/nosotros');

    if (isActiveTab) return;

    const pill = pillRefs.current[i];
    const circle = circleRefs.current[i];
    if (!pill) return;

    activeTweenRefs.current[i]?.kill();

    const tl = gsap.timeline();
    activeTweenRefs.current[i] = tl;

    if (circle) {
      tl.to(circle, { scale: 1.25, xPercent: -50, duration: 0.3, ease }, 0);
    }
    tl.to(pill, { color: '#000000', borderColor: '#ffffff', duration: 0.3, ease }, 0);
  };

  const handlePillLeave = (i: number) => {
    const isActiveTab = 
      (i === 0 && activeTab === 'productos') ||
      (i === 1 && activeTab === 'negocios') ||
      (i === 2 && pathname === '/tecnologia') ||
      (i === 3 && pathname === '/implementaciones') ||
      (i === 4 && pathname === '/nosotros');

    if (isActiveTab) return;

    const pill = pillRefs.current[i];
    const circle = circleRefs.current[i];
    if (!pill) return;

    activeTweenRefs.current[i]?.kill();

    const tl = gsap.timeline();
    activeTweenRefs.current[i] = tl;

    if (circle) {
      tl.to(circle, { scale: 0, xPercent: -50, duration: 0.25, ease }, 0);
    }
    tl.to(pill, { color: '#e4e4e7', borderColor: 'rgba(255, 255, 255, 0.1)', duration: 0.25, ease }, 0);
  };

  const handleTabClick = (tab: 'productos' | 'negocios') => {
    if (activeTab === tab) {
      setActiveTab(null);
      updateMenuAnimation(false, null);
    } else {
      setActiveTab(tab);
      // Pass the target tab parameter directly to avoid reading state during asynchronous batching
      setTimeout(() => {
        updateMenuAnimation(true, tab);
      }, 20);
    }
  };

  const handleClose = () => {
    setActiveTab(null);
    updateMenuAnimation(false, null);
  };

  const setCardRef = (i: number) => (el: HTMLDivElement | null) => {
    if (el) {
      cardsRef.current[i] = el;
    }
  };

  return (
    <div className={`card-nav-container ${className}`}>
      {/* Click outside to close dropdown */}
      {activeTab && <div className="fixed inset-0 z-10" onClick={handleClose} />}

      <nav ref={navRef} className={`card-nav ${activeTab ? 'open' : ''}`} style={{ backgroundColor: baseColor }}>
        <div className="card-nav-inner-wrapper">
          <div className="card-nav-top">
            {/* Logo */}
            <Link 
              href="/" 
              className="logo-container flex items-center space-x-2 z-20" 
              onClick={handleClose}
            >
              <div className="w-8 h-8 bg-white flex items-center justify-center font-display font-extrabold text-black rounded-none">
                V
              </div>
              <span className="font-display font-bold text-base tracking-wider text-white">
                VALCORE
              </span>
            </Link>

            {/* Desktop Navigation Links with PillNav animations */}
            <div className="hidden lg:flex items-center space-x-2 z-20">
              {/* Productos Pill */}
              <button
                ref={el => { pillRefs.current[0] = el; }}
                onClick={() => handleTabClick('productos')}
                onMouseEnter={() => handlePillEnter(0)}
                onMouseLeave={() => handlePillLeave(0)}
                className={`pill ${activeTab === 'productos' ? 'is-active' : ''} cursor-pointer`}
              >
                <span className="hover-circle" ref={el => { circleRefs.current[0] = el; }} />
                <span className="pill-content flex items-center gap-1.5">
                  PRODUCTOS 
                  <ChevronDown className="w-3.5 h-3.5" />
                </span>
              </button>

              {/* Negocios Pill */}
              <button
                ref={el => { pillRefs.current[1] = el; }}
                onClick={() => handleTabClick('negocios')}
                onMouseEnter={() => handlePillEnter(1)}
                onMouseLeave={() => handlePillLeave(1)}
                className={`pill ${activeTab === 'negocios' ? 'is-active' : ''} cursor-pointer`}
              >
                <span className="hover-circle" ref={el => { circleRefs.current[1] = el; }} />
                <span className="pill-content flex items-center gap-1.5">
                  NEGOCIOS 
                  <ChevronDown className="w-3.5 h-3.5" />
                </span>
              </button>

              {/* Tecnologia Pill */}
              <Link
                ref={el => { pillRefs.current[2] = el as unknown as HTMLAnchorElement; }}
                href="/tecnologia"
                onClick={handleClose}
                onMouseEnter={() => handlePillEnter(2)}
                onMouseLeave={() => handlePillLeave(2)}
                className={`pill ${pathname === '/tecnologia' ? 'is-active' : ''}`}
              >
                <span className="hover-circle" ref={el => { circleRefs.current[2] = el; }} />
                <span className="pill-content">TECNOLOGÍA</span>
              </Link>

              {/* Casos Pill */}
              <Link
                ref={el => { pillRefs.current[3] = el as unknown as HTMLAnchorElement; }}
                href="/implementaciones"
                onClick={handleClose}
                onMouseEnter={() => handlePillEnter(3)}
                onMouseLeave={() => handlePillLeave(3)}
                className={`pill ${pathname === '/implementaciones' ? 'is-active' : ''}`}
              >
                <span className="hover-circle" ref={el => { circleRefs.current[3] = el; }} />
                <span className="pill-content">CASOS DE ÉXITO</span>
              </Link>

              {/* Nosotros Pill */}
              <Link
                ref={el => { pillRefs.current[4] = el as unknown as HTMLAnchorElement; }}
                href="/nosotros"
                onClick={handleClose}
                onMouseEnter={() => handlePillEnter(4)}
                onMouseLeave={() => handlePillLeave(4)}
                className={`pill ${pathname === '/nosotros' ? 'is-active' : ''}`}
              >
                <span className="hover-circle" ref={el => { circleRefs.current[4] = el; }} />
                <span className="pill-content">NOSOTROS</span>
              </Link>
            </div>

            {/* Right side CTA & Mobile trigger */}
            <div className="flex items-center gap-6 z-20">
              <Link href="/solicitar-demo" className="hidden sm:block">
                <button
                  type="button"
                  className="card-nav-cta-button cursor-pointer"
                  style={{ backgroundColor: buttonBgColor, color: buttonTextColor }}
                >
                  SOLICITAR EVALUACIÓN
                </button>
              </Link>

              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="lg:hidden text-white hover:text-zinc-300 focus:outline-none cursor-pointer"
              >
                {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Desktop Dropdown Panels */}
          {activeTab && (
            <div className="card-nav-content" aria-hidden={!activeTab}>
              {(activeItems || []).slice(0, 3).map((item, idx) => (
                <div
                  key={`${item.label}-${idx}`}
                  className="nav-card"
                  ref={setCardRef(idx)}
                  style={{ backgroundColor: item.bgColor, color: item.textColor }}
                >
                  <div className="nav-card-label">{item.label}</div>
                  <div className="nav-card-links">
                    {item.links?.map((lnk, i) => (
                      <Link 
                        key={`${lnk.label}-${i}`} 
                        className="nav-card-link" 
                        href={lnk.href} 
                        aria-label={lnk.ariaLabel}
                        onClick={handleClose}
                      >
                        <ArrowUpRight className="nav-card-link-icon w-3.5 h-3.5" aria-hidden="true" />
                        {lnk.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Mobile Drawer */}
      {isMobileOpen && (
        <div className="lg:hidden fixed inset-x-0 top-16 bg-zinc-950/98 border-b border-white/10 max-h-[calc(100vh-4rem)] overflow-y-auto z-40 p-6 space-y-6 shadow-2xl backdrop-blur-xl">
          <div>
            <div className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase mb-3 border-b border-white/5 pb-1">PRODUCTOS</div>
            <div className="grid grid-cols-1 gap-3">
              {productItems.flatMap(item => item.links).map((lnk) => (
                <Link
                  key={lnk.label}
                  href={lnk.href}
                  onClick={() => setIsMobileOpen(false)}
                  className="text-sm font-semibold text-white hover:text-zinc-300 flex items-center justify-between"
                >
                  {lnk.label}
                  <ArrowUpRight className="w-4 h-4 text-zinc-400" />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase mb-3 border-b border-white/5 pb-1">NEGOCIOS</div>
            <div className="grid grid-cols-1 gap-3">
              {businessItems.flatMap(item => item.links).map((lnk) => (
                <Link
                  key={lnk.label}
                  href={lnk.href}
                  onClick={() => setIsMobileOpen(false)}
                  className="text-sm font-semibold text-white hover:text-zinc-300 flex items-center justify-between"
                >
                  {lnk.label}
                  <ArrowUpRight className="w-4 h-4 text-zinc-400" />
                </Link>
              ))}
            </div>
          </div>

          <div className="border-t border-white/5 pt-4 space-y-4">
            <Link
              href="/tecnologia"
              onClick={() => setIsMobileOpen(false)}
              className="block text-sm font-bold tracking-wider text-white hover:text-zinc-300"
            >
              TECNOLOGÍA
            </Link>

            <Link
              href="/implementaciones"
              onClick={() => setIsMobileOpen(false)}
              className="block text-sm font-bold tracking-wider text-white hover:text-zinc-300"
            >
              CASOS DE ÉXITO
            </Link>

            <Link
              href="/nosotros"
              onClick={() => setIsMobileOpen(false)}
              className="block text-sm font-bold tracking-wider text-white hover:text-zinc-300"
            >
              NOSOTROS
            </Link>
          </div>

          <Link
            href="/solicitar-demo"
            onClick={() => setIsMobileOpen(false)}
            className="block w-full text-center bg-white text-black py-3 rounded-none font-mono font-bold tracking-widest text-[10px]"
          >
            SOLICITAR EVALUACIÓN TÉCNICA
          </Link>
        </div>
      )}
    </div>
  );
};

export default CardNav;
