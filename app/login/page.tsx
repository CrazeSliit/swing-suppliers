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
      <div className="flex w-full lg:w-1/2 items-center justify-center bg-background px-8 py-12">
        <div className="w-full max-w-sm">

          {/* Logo */}
          <div className="flex justify-start mb-8">
            <div
              style={{
                width: 64,
                height: 64,
                border: "2px solid rgb(112, 144, 200)",
                borderRadius: 12,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                background: "linear-gradient(135deg, rgb(232, 240, 254) 0%, rgb(200, 216, 248) 100%)",
              }}
            >
              <div style={{ textAlign: "center", lineHeight: 1 }}>
                <span style={{ fontSize: 24, fontWeight: 900, color: "rgb(0, 0, 0)", fontFamily: '"Arial Black", sans-serif' }}>S</span>
                <span style={{ fontSize: 24, fontWeight: 900, color: "rgb(0, 0, 0)", fontFamily: '"Arial Black", sans-serif' }}>S</span>

              </div>
            </div>
          </div>

          {/* Heading */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground">Welcome back</h1>
            <p className="text-muted-foreground text-sm mt-1.5">Sign in to your Swin Suppliers account</p>
          </div>

          <LoginForm />

        </div>
      </div>
    </main>
  );
}
