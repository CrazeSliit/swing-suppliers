import LoginForm from "./LoginForm";
import LoginSlideshow from "./LoginSlideshow";

export const metadata = {
  title: "Sign in — Swin Suppliers",
};

export default function LoginPage() {
  return (
    <main className="flex min-h-screen w-full">

      {/* ── Left Panel (Slideshow) ────────────────────── */}
      <LoginSlideshow />

      {/* ── Right Panel ──────────────────────────────── */}
      <div className="flex w-full lg:w-1/2 flex-col min-h-screen bg-background">

        {/* Top bar */}
        <div className="flex items-center justify-between px-8 pt-7 pb-5 border-b border-border">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center shrink-0">
              <span className="text-primary-foreground font-black text-sm" style={{ fontFamily: '"Arial Black", sans-serif', letterSpacing: -0.5 }}>
                SS
              </span>
            </div>
            <span className="text-sm font-bold text-foreground tracking-tight">Swin Suppliers</span>
          </div>
          <span className="text-xs font-medium text-muted-foreground bg-muted px-3 py-1 rounded-full border border-border">
            Employee Portal
          </span>
        </div>

        {/* Center content */}
        <div className="flex flex-1 items-center justify-center px-8 py-10">
          <div className="w-full max-w-md">

            {/* Icon badge */}
            <div className="mb-7">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/25 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="w-7 h-7 text-primary">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
              </div>
            </div>

            {/* Heading */}
            <div className="mb-8">
              <h1 className="text-3xl font-extrabold text-foreground tracking-tight leading-tight">
                Welcome back
              </h1>
              <p className="text-muted-foreground text-sm mt-2 leading-relaxed">
                Sign in to manage your tasks, invoices, and profile.
              </p>
            </div>

            {/* Form */}
            <LoginForm />

          </div>
        </div>

        {/* Footer */}
        <div className="px-8 pb-7 border-t border-border">
          <p className="text-xs text-muted-foreground text-center pt-5">
            © {new Date().getFullYear()} Swin Suppliers. All rights reserved.
          </p>
        </div>

      </div>
    </main>
  );
}
