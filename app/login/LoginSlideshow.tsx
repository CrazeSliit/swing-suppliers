"use client";

import { useEffect, useState } from "react";

const slides = [
  {
    src: "/medium-shot-smiley-man-warehouse.jpg",
    alt: "Warehouse worker smiling",
  },
  {
    src: "/warehouse-workers-checking-inventory-consulting-each-other-about-organization-distribution-goods.jpg",
    alt: "Warehouse workers checking inventory",
  },
];

export default function LoginSlideshow() {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
        setFading(false);
      }, 600);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hidden lg:flex lg:w-1/2 relative flex-col justify-between overflow-hidden">
      {/* Slideshow background */}
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          className="absolute inset-0 transition-opacity duration-700"
          style={{
            backgroundImage: `url('${slide.src}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: i === current ? (fading ? 0 : 1) : 0,
          }}
          aria-hidden={i !== current}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-black/80 via-black/60 to-black/40" />

      {/* Decorative lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute left-1/4 top-0 h-full w-px bg-white/5 rotate-12 scale-y-125" />
        <div className="absolute left-2/3 top-0 h-full w-px bg-white/5 rotate-12 scale-y-125" />
      </div>

      {/* Top: brand */}
      <div className="relative z-10 px-10 pt-10 flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg border border-white/30 bg-white/10 backdrop-blur-sm flex items-center justify-center shrink-0">
          <span className="text-white font-black text-sm" style={{ fontFamily: '"Arial Black", sans-serif', letterSpacing: -1 }}>
            SS
          </span>
        </div>
        <span className="text-white/90 text-sm font-semibold tracking-wide">Swin Suppliers</span>
      </div>

      {/* Centre: tagline */}
      <div className="relative z-10 px-10 py-12">
        <p className="text-white/50 text-xs font-semibold uppercase tracking-widest mb-3">
          Employee Portal
        </p>
        <h2 className="text-4xl font-extrabold text-white leading-snug">
          Have a<br />
          <span className="text-primary">Good Day</span>
        </h2>
        <p className="mt-4 text-white/50 text-sm leading-relaxed max-w-xs">
          Manage your tasks, invoices, and profile — all in one place.
        </p>
      </div>

      {/* Bottom: dots + footer */}
      <div className="relative z-10 px-10 pb-8 flex items-center justify-between">
        <p className="text-white/25 text-xs">© {new Date().getFullYear()} Swin Suppliers. All rights reserved.</p>
        <div className="flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => { setFading(true); setTimeout(() => { setCurrent(i); setFading(false); }, 600); }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${i === current ? "bg-white scale-110" : "bg-white/30"}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
