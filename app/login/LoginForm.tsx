"use client";

import { useActionState, useState } from "react";
import { login, AuthState } from "@/app/actions/auth";

const initialState: AuthState = {};

export default function LoginForm() {
  const [state, action, pending] = useActionState(login, initialState);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form action={action} className="flex flex-col gap-5 w-full">

      {/* Email */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="text-xs font-semibold text-foreground uppercase tracking-widest">
          Email Address
        </label>
        <div className="relative">
          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="w-4 h-4">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path strokeLinecap="round" strokeLinejoin="round" d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </span>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@swinsuppliers.com"
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-border bg-muted/40 text-foreground text-sm outline-none focus:border-ring focus:ring-2 focus:ring-ring/25 focus:bg-background transition-all placeholder:text-muted-foreground/50"
          />
        </div>
      </div>

      {/* Password */}
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center justify-between">
          <label htmlFor="password" className="text-xs font-semibold text-foreground uppercase tracking-widest">
            Password
          </label>
          <span className="text-xs text-primary font-medium cursor-pointer hover:underline underline-offset-2">
            Forgot password?
          </span>
        </div>
        <div className="relative">
          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="w-4 h-4">
              <rect x="3" y="11" width="18" height="11" rx="2" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
          </span>
          <input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            required
            autoComplete="current-password"
            placeholder="••••••••"
            className="w-full pl-10 pr-11 py-3 rounded-lg border border-border bg-muted/40 text-foreground text-sm outline-none focus:border-ring focus:ring-2 focus:ring-ring/25 focus:bg-background transition-all placeholder:text-muted-foreground/50"
          />
          <button
            type="button"
            onClick={() => setShowPassword((v) => !v)}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
            tabIndex={-1}
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                <line strokeLinecap="round" x1="1" y1="1" x2="23" y2="23" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Error */}
      {state.error && (
        <div role="alert" className="flex items-start gap-3 rounded-lg border border-destructive/25 bg-destructive/8 px-4 py-3">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4 text-destructive shrink-0 mt-0.5">
            <circle cx="12" cy="12" r="10" />
            <line strokeLinecap="round" x1="12" y1="8" x2="12" y2="12" />
            <line strokeLinecap="round" x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          <p className="text-sm text-destructive leading-snug">{state.error}</p>
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={pending}
        className="mt-1 w-full flex items-center justify-center gap-2.5 py-3 px-6 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed transition-all"
      >
        {pending ? (
          <>
            <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={3} />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 0 1 8-8v4a4 4 0 0 0-4 4H4z" />
            </svg>
            Signing in…
          </>
        ) : (
          <>
            Sign in to your account
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </>
        )}
      </button>

      {/* Security note */}
      <div className="flex items-center justify-center gap-2 pt-1">
        <div className="flex-1 h-px bg-border" />
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="w-3.5 h-3.5 shrink-0 text-primary">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
          </svg>
          Encrypted & secure
        </div>
        <div className="flex-1 h-px bg-border" />
      </div>

    </form>
  );
}
